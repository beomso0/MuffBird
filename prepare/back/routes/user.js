const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const router = express.Router();
const { User } = require('../models'); // --> db.User 가져옴. (구조분해 할당)

router.post('/login', (req, res, next) => {
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
      return res.status(200).json(user); // 최종 로그인. 프론트 서버로 user 정보 전달.
    })
  })(req, res, next); // next로 에러처리 한 번에 하기 위해 미들웨어를 확장함.
}); // passport에서 정의한 local 전략이 실행됨.

router.post('/', async (req, res, next) => { //POST/user/ --> saga의 signUp api에서 axios 호출하는 부분이랑 경로 같음.
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

router.post('/user/logout', (req, res) => {
  req.logout();
  req.session.destroy(); 
  req.send('ok');
});

module.exports = router;