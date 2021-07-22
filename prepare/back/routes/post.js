const express = require('express');
const multer = require('multer');
// multer는 보통 라우터마다 따로 장착함.
// form 마다 데이터 타입이 다르기 때문에.
const path = require('path'); //노드 기본 모듈
const fs = require('fs');

const { Post, Comment, Image, User, Hashtag } = require('../models');
const { isLoggedIn } = require('./middlewares');

const router = express.Router();

try {
  fs.accessSync('uploads') // 업로드 폴더 있는지 확인
} catch (error) { // 없으면
  console.log('업로드 폴더가 없어서 생성함');
  fs.mkdirSync('uploads');
}

const upload = multer({
  storage: multer.diskStorage({ // 나중에 여기를 aws로 수정할 예정
    destination(req, file, done) { // 저장 폴더
      done(null, 'uploads') 
    },
    filename(req, file, done) { // 파일 이름(photo.png)
      const ext = path.extname(file.originalname); // 확장자 추출(.png)
      const basename = path.basename(file.originalname, ext); // photo(확장자 제외한 이름) 추출
      done(null, basename + '_' + new Date().getTime() + ext); // phto123432.png 중복을 막기 위해 밀리초 단위 시간을 넣음.
    }
  }),
  limits: { fileSize: 20 * 1024 * 1024 } // 20MB 용량 제한
});

router.post('/', isLoggedIn, upload.none() ,async (req, res, next) => { // POST/post
  try {
    const hashtags = req.body.content.match(/#[^\s#]+/g);
    const post = await Post.create({
      content: req.body.content,
      UserId: req.user.id,
    });
    if (hashtags) {
      const result = await Promise.all(hashtags.map((tag) => Hashtag.findOrCreate({
        where: { name: tag.slice(1).toLowerCase() },
      }))); // 해시태그 떼고 소문자로 전환해서 저장. 
      // findOrCreate: 만들거나 등록. --> 이미 있으면 등록 x
      await post.addHashtags(result.map((v) => v[0])); // find or create 라서 result 자료형이 [노드, true], [리액트 true] 이런식으로 돼있음.
    }
    if (req.body.image) {
      if (Array.isArray(req.body.image)) { // 이미지 여러개 올린 경우
        const images = await Promise.all(req.body.image.map((image) => Image.create({ src: image }))); //db에 파일 주소만 저장.
        await post.addImages(images);
      } else { // 하나만 올린 경우
        const image = await Image.create({ src: req.body.image });
        await post.addImages(image);
      }
    }
    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [{
        model: Image,
      }, {
        model: Comment,
        include: [{
          model: User, // 댓글 작성자
          attributes: ['id', 'nickname'],          
        }]
      }, {
        model: User, // 게시글 작성자
        attributes: ['id', 'nickname'],
      }, {
        model: User, // 좋아요 누른 사람
        as: 'Likers',
        attributes: ['id'],
      }]
    });
    res.status(201).json(fullPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/:postId/comment', isLoggedIn, async (req, res, next) => { // POST/post/1/comment
  // --> :postId 가 params 됨.
  try {
    // 존재하지 않는 게시글의 댓글에 접근하는 것은 아닌지 검사하기 
    const post = await Post.findOne({
      where: { id: req.params.postId }
    });

    if (!post) {
      return res.status(403).send('존재하지 않는 게시글입니다.');
    }

    const comment = await Comment.create({
      content: req.body.content,
      PostId: parseInt(req.params.postId),
      UserId: req.user.id, // --> passport에서 자동으로 desrializeuser 해서 req.user에 접근 가능.
    });

    const fullComment = await Comment.findOne({
      where: { id: comment.id },
      include: [{
        model: User,
        attributes: ['id', 'nickname'],
      }],
    });

    res.status(201).json(fullComment);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/:postId/retweet', isLoggedIn, async (req, res, next) => { // POST/post/1/retweet
  // --> :postId 가 params 됨.
  try {
    console.log(req.params.id);
    // 존재하지 않는 게시글의 댓글에 접근하는 것은 아닌지 검사하기 
    const post = await Post.findOne({
      where: { id: req.params.postId },
      include: [{ // 이 부분까지 include를 하는 것이 좋음.
        model: Post,
        as: 'Retweet'
      }],
    });

    if (!post) {
      return res.status(403).send('존재하지 않는 게시글입니다.');
    }

    if (req.user.id === post.UserId || (post.Retweet && post.Retweet.UserId === req.user.id )) {
      return res.status(403).send('자신의 글은 리트윗할 수 없습니다.');
    }

    const retweetTargetId = post.RetweetId || post.id;
    const exPost = await Post.findOne({
      where: {
        UserId: req.user.id,
        RetweetId: retweetTargetId,
      },
    })
    if (exPost) {
      return res.status(403).send('이미 리트윗한 게시글입니다.');
    }
    const retweet = await Post.create({
      UserId: req.user.id,
      RetweetId: retweetTargetId,
      content: 'retweet', // model에 allownull이 false여서 아무 값이나 넣어준 것.
    });
    const retweetWithPrevPost = await Post.findOne({ // 리트윗한 원본 게시글까지 함께 담아서 프론트로 보내주기 위해 만듦.
      // include 관계가 복잡해지면, router 관계를 쪼개는 것이 좋음. 
      // 이정도는 괜찮지만 더 복잡해질 경우에는 분리하는 것이 좋음.
      where: { id: retweet.id },
      include: [{
        model: Post,
        as: 'Retweet',
        include: [{
          model: User,
          attributes: ['id', 'nickname'],
        }, {
          model: Image,
        }]
      }, {
        model: User,
        attributes: ['id', 'nickname']
      }, {
        model: Image,
      }, {
        model: Comment,
        include: [{
          model: User,
          attributes: ['id', 'nickname']
        }]
      }, {
        model: User,
        as: 'Likers',
        attributes: ['id'],
      }],
    });
    res.status(201).json(retweetWithPrevPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.patch('/:postId/like', isLoggedIn, async (req, res, next) => { // PATCH/post/1/like
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId }
    })
    if (!post) {
      return res.status(403).send('게시글이 존재하지 않습니다');
    }
    await post.addLikers(req.user.id);
    res.json({ PostId: post.id, UserId: req.user.id })
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete('/:postId/like', isLoggedIn, async (req, res, next) => { // DELETE/post/1/like
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId }
    })
    if (!post) {
      return res.status(403).send('게시글이 존재하지 않습니다');
    }
    await post.removeLikers(req.user.id);
    res.json({ PostId: post.id, UserId: req.user.id })
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete('/:postId', isLoggedIn ,async (req, res, next) => { // DELETE/post
  try {
    await Post.destroy({ // destroy: sequelize의 제거 메쏘드
      where: { id: req.params.postId },
      UserId: req.user.id,
    });
    res.status(200).json({ PostId: parseInt(req.params.postId) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/logout', isLoggedIn, async (req, res, next) => {
  try {
    req.logout();
    req.session.destroy();
    res.send('logout done');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/images', isLoggedIn, upload.array('image'), async (req, res, next) => { // POST/images (req, res, next)는 업로드가 끝난 뒤에 실행 됨.
  console.log(req.files);
  res.json(req.files.map((v) => v.filename)); // 프론트로 파일명을 리턴.--> 이걸 활용해서 미리보기, 리사이징 프론트에서 할 수 있음.
});

module.exports = router;