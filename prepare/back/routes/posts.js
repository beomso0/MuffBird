const express = require('express');

const { Post, User, Image } = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => { // GET / posts
  try {
    const posts = await Post.findAll({
      limit: 10, 
      order: [['createdAt', 'DESC']], // 작성 시점 내림차 순으로 가져옴
      include: [{
        model: User,        
      }, {
        model: Image,
      }],
    });
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;