const express = require('express');


// router.post('/login', (req, res, next) => {
  
  // })
  
const { Post } = require('../models');
  
const router = express.Router();
router.post('/', async (req, res, next) => {
  try {
    const post = await Post.create({
      content: req.body.content,
    });
    res.status(201).json(post);
  } catch(error) {
    console.error(error);
    next(error);
  }
});

router.delete('/', (req, res) => {
  res.json({ id: 1 })
});

module.exports = router;