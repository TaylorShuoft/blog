const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

// 获取所有文章
router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 获取单篇文章
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      return res.status(404).json({ message: '文章未找到' });
    }
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 创建新文章
router.post('/', async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 更新文章
router.put('/:id', async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      return res.status(404).json({ message: '文章未找到' });
    }
    await post.update(req.body);
    res.json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 删除文章
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      return res.status(404).json({ message: '文章未找到' });
    }
    await post.destroy();
    res.json({ message: '文章已删除' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
