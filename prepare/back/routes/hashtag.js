const express = require('express');
const router = express.Router();
const { Post, Hashtag, Image, Comment, User } = require('../models');
const { Op } = require('sequelize');

router.get('/:hashtag', async (req, res, next) => { // GET / hashtag / 모핀
  try {
    const where = {};
    if (parseInt(req.query.lastId, 10)) { // 쿼리스트링으로 받은 값은 req.query안에 들어있음
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) }
      // --> id가 lastId가 작은 것들만 불러오기 
      // Op: 오퍼레이터. 연산자.
    }     
    const posts = await Post.findAll({
      where,
      limit: 10, 
      order: [
        ['createdAt', 'DESC'],
        [Comment, 'createdAt', 'DESC'],
      ], // 작성 시점 내림차 순으로 가져옴
      include: [{
        model: Hashtag,
        where: { name: decodeURIComponent(req.params.hashtag) },
      },{
        model: User,   
        attributes: ['id', 'nickname'],
      }, {
        model: Image,
      }, {
        model: Comment,
        include: [{
          model: User,
          attributes: ['id', 'nickname'],
        }],
      }, {
        model: User,
        as: 'Likers',
        attributes: ['id'],
      }, {
        model: Post,
        as: 'Retweet',
        include: [{
          model: User,
          attributes: ['id', 'nickname'],
        }, {
          model: Image,
        }]
      }],
    });
    // console.log(posts);
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;