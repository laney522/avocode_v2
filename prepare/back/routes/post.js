const express = require('express');


// router.post('/login', (req, res, next) => {
  
  // })
  
const { Post, Image, Comment, User } = require('../models');
const { isLoggedIn } = require('./middlewares');
  
const router = express.Router();
router.post('/', isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.create({
      content: req.body.content,
      UserId: req.user.id,
    });
    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [{
        model: Image,
      }, {
        model: Comment,
        include: [{
          model: User,
          attributes: ['id', 'nickname'],
        }],
      }, {
        model: User,
        attributes: ['id', 'nickname'],
      }]
    })
    res.status(201).json(fullPost);
  } catch(error) {
    console.error(error);
    next(error);
  }
});

router.post('/:postId/comment', isLoggedIn, async (req, res, next) => { // POST / post/1/comment
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId }
    });
    if (!post) {
      return res.status(403).send('존재하지 않는 게시글입니다.');
    }
    const comment = await Comment.create({
      content: req.body.content,
      PostId: parseInt(req.params.postId, 10), // reducer > post.js > ADD_COMMENT_SUCCESS -> action.data.PostId 대소문자 일치시켜주어야 한다!
      UserId: req.user.id,
    })
    // const fullComment = await Comment.findOne({
    //   where: { id: comment.id },
    //   include: [{
    //     model: User,
    //     attributes: ['id', 'nickname'],
    //   }],
    // })
    res.status(201).json(comment);
  } catch(error) {
    console.error(error);
    next(error);
  }
});

router.delete('/', (req, res) => {
  res.json({ id: 1 })
});

module.exports = router;