const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const router = express.Router();
const { User, Post } = require('../models'); // --> db.User 가져옴. (구조분해 할당)
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

router.get('/', async (req, res, next) => { // --> GET/user
  try {
    if (req.user) {
      const fullUserWithoutPassword = await User.findOne({
        where: { id: req.user.id },
        attributes: {
          exclude: ['password'], // 전체에서 password만 제외하고 정보 가져오기
        },
        include: [{
          model: Post,
          attributes: ['id'], // 프론트에 필요한 정보만 전달하기 위해서
        }, {
          model: User,
          as: 'Followings',
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followers',
          attributes: ['id'],
        }],
      });
      res.status(200).json(fullUserWithoutPassword);
    } else {
      res.status(200).json(null);
    }    
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/login', isNotLoggedIn ,(req, res, next) => {
  passport.authenticate('local', (err, user, info) => { // (err,user,info) 여기는 done이 넘겨주는 콜백 부분
    if (err) { // 서버 에러
      console.error(err);
      return next(err);
    }
    if (info) { // 클라이언트 에러(reason)  
      return res.status(401).send(info.reason);
      // 401: 허가되지 않음
    }
    return req.logIn(user, async (loginErr) => { // passport 로그인 처리 --> session이 설정됨. (app.js에서) --> passport/index에서 serializeUser 실행
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      const fullUserWithoutPassword = await User.findOne({
        where: { id: user.id },
        attributes: {
          exclude: ['password'], // 전체에서 password만 제외하고 정보 가져오기
        },
        include: [{
          model: Post,
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followings',
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followers',
          attributes: ['id'],
        }],
      });
      return res.status(200).json(fullUserWithoutPassword); // 최종 로그인. 프론트 서버로 user 정보 전달.
    })
  })(req, res, next); // next로 에러처리 한 번에 하기 위해 미들웨어를 확장함.
}); // passport에서 정의한 local 전략이 실행됨.

router.post('/', isNotLoggedIn, async (req, res, next) => { //POST/user/ --> saga의 signUp api에서 axios 호출하는 부분이랑 경로 같음.
  try {
    // 이메일 중복 검사
    const exUser = await User.findOne({
      where: { // 검색 조건
        email: req.body.email,
      }
    });
    if (exUser) {
      return res.status(403).send('이미 사용 중인 이메일입니다.'); // return 반드시 붙여야 여기서 try문이 끝남!
      // status(403): 상태(헤더 중 하나). 금지의 의미p5.BandPass()
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 13); // password 암호화
    // 두번째 패러미터는 보안등급? 숫자가 높을수록 보안이 높지만, 해석에 시간이 더 걸림. 보통 10~13 정도.
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    res.status(200).send('ok');     
    // status(200): 성공
  } catch (error) {
    console.error(error);
    next(error); // next로 에러 처리하면 한 번에 보내줌(?)
    // status 500번대 --> 서버 잘못.
  }
});

router.post('/logout', isLoggedIn, (req, res) => {
  req.logOut();
  req.session.destroy(); 
  res.send('ok');
});

router.patch('/nickname', isLoggedIn, async (req, res, next) => { // PATCH/user/nickname
  try {
    await User.update({
      nickname: req.body.nickname,
    }, {
      where: { id: req.user.id },
    });
    res.status(200).json({ nickname: req.body.nickname });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.patch('/:userId/follow', isLoggedIn, async (req, res, next) => { // PATCH/user/1/follow
  try {
    const user = await User.findOne({
      where: { id: req.params.userId }
    });
    if (!user) {
      res.status(403).send('존재하지 않는 유저입니다.');
    }
    // user는 내가 팔로우 하려는 상대이므로 그 유저에 나를 'follower'로 추가 --> addFollower
    await user.addFollowers(req.user.id);
    res.status(200).json({ UserId: parseInt(req.params.userId) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete('/:userId/unfollow', isLoggedIn, async (req, res, next) => { // DELETE/user/1/unfollow
  try {
    const user = await User.findOne({
      where: { id: req.params.userId }
    });
    if (!user) {
      res.status(403).send('존재하지 않는 유저입니다.');
    }
    // user는 내가 팔로우 하려는 상대이므로 그 유저에 나를 'follower'로 추가 --> addFollower
    await user.removeFollowers(req.user.id);
    res.status(200).json({ UserId: parseInt(req.params.userId) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get('/followers', isLoggedIn, async (req, res, next) => { // GET/user/followers
  try {
    const user = await User.findOne({
      where: { id: req.user.id } // 나 찾기
    });
    if (!user) {
      res.status(403).send('존재하지 않는 유저입니다.');
    }
    // user는 내가 팔로우 하려는 상대이므로 그 유저에 나를 'follower'로 추가 --> addFollower
    const followers = await user.getFollowers();
    res.status(200).json(followers);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get('/followings', isLoggedIn, async (req, res, next) => { // GET/user/followings
  try {
    const user = await User.findOne({
      where: { id: req.user.id } // 나 찾기
    });
    if (!user) {
      res.status(403).send('존재하지 않는 유저입니다.');
    }
    // user는 내가 팔로우 하려는 상대이므로 그 유저에 나를 'follower'로 추가 --> addFollower
    const followings = await user.getFollowings();
    res.status(200).json(followings);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete('/follower/:userId', isLoggedIn, async (req, res, next) => { // DELETE/user/follower/2
  try {
    const user = await User.findOne({
      where: { id: req.params.userId }
    });
    if (!user) {
      res.status(403).send('존재하지 않는 유저입니다.');
    }
    // user는 내가 팔로우 하려는 상대이므로 그 유저에 나를 'follower'로 추가 --> addFollower
    await user.removeFollowings(req.user.id);
    res.status(200).json({ UserId: parseInt(req.params.userId) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;