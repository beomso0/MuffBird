const passport = require('passport');
const local = require('./local');
const { User } = require('../models');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id); // --> user의 id 하나만 들고있음 for saving memory
  });

  passport.deserializeUser(async (id, done) => { // id로 복원. 한번 serialize되고 나면 그 다음부터는 여기가 실행됨.
    try {
      const user = await User.findOne({ where: { id } });
      done(null, user); // --> req.user안에 정보 넣어줌.
    } catch (error) {
      console.error(error);
      done(error);
    }
  });

  local();
}