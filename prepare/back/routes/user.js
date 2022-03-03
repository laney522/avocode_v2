const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../models');
const { nextTick } = require('process');

const router = express.Router();

router.post('/', async (req, res, next) => {  // post /user
 try {
   const exUser = await User.findOne({
     where: {
       email: req.body.email,
     }
   });
   if (exUser) {
     return res.status(403).send('이미 사용중인 아이디입니다.');
   }
  const hashedPassword = await bcrypt.hash(req.body.password, 12);
  await User.create({
    email: req.body.nickname,
    nickname: req.body.nickname,
    password: hashedPassword,
  });
  res.status(200).send('ok');
 } catch (error) {
   console.error(error);
   next(error);
 }
});

module.exports = router;

// 200 성공
// 300 리다이렉트
// 400 클라이언트 에러
// 500 서버 에러