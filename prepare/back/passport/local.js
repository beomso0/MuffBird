const passport = require('passport');
const bcrypt = require('bcrypt');
const { Strategy: LocalStrategy } = require('passport-local');
const { User } = require('../models');

module.exports = () => {
  passport.use(new LocalStrategy({ //localStrategy 안에는 객체 1 함수 1 들어감.
    usernameField: 'email',
    passwordField: 'password',    
  }, async (email, password, done) => { // 위에서 받은 인자들을 가지고, 로그인 전략 구현한 함수 작성.
    try { // 비동기함수(await 등)는 항상 try로 감싸줄 것.
      // 1. 이메일 존재하는지 확인
      const user = await User.findOne({
        where: { email } // 원래는 email: email인데, es6 문법에 따라 축약함.
      })
      if(!user) {
        return done(null, false, { reason: '존재하지 않는 사용자입니다.' }); // passport에서 직접 res.로 응답 보내지는 않고, 일단 done으로 처리함.
        // done은 순서대로 서버에러, 성공 여부, 클라이언트 에러를 넘겨줌.
      }
      
      // 2. 비밀번호 확인
      const result  = await bcrypt.compare(password, user.password);
      if (result) { // result 존재 --> 성공하면
        return done(null, user);
      }
      return done(null, false, { reason: '비밀번호가 틀렸습니다.' });      
    } catch (error) { // 서버 에러 시.
      console.error(error);
      return done(error);
    }
  }));
};