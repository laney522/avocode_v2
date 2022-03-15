const passport = require('passport');
const { User } = require('../models');
const local = require('./local');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id); // 세션에 다 들고 있기 무거우니까 유저 아이디만 따로 저장하는 것.
  });

  passport.deserializeUser(async (id, done) => {  // serailize해준 아이디를 필요하면 DB에서 복구해준다
    try{
      const user = await User.findOne({ where: { id }});
      done(null, user);  // req.user
    } catch (error) {
      console.error(error);
      done(error);
    }
  });

  local();
};