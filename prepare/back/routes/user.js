const express = require('express');
const router = express.Router();
const { User } = require('../models'); // --> db.User 가져옴. (구조분해 할당)

router.post('/', async (req, res) => { //POST/user/ --> saga의 signUp api에서 axios 호출하는 부분이랑 경로 같음.
  await User.create({
    email: req.body.email,
    nickname: req.body.nickname,
    password: req.body.password,
  });
  res.send('ok'); 
});

module.exports = router;