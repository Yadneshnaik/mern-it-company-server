// routes/ourStoryRoutes.js
const express = require('express');
const router = express.Router();
const OurStory = require('../models/OurStory');

// GET /api/our-story
router.get('/', async (req, res) => {
  try {
    const story = await OurStory.findOne().sort({ createdAt: -1 });
    res.json(story);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch our story' });
  }
});

// POST /api/our-story
router.post('/', async (req, res) => {
  try {
    const { title, subtitle, content, imageUrl } = req.body;

    const story = new OurStory({ title, subtitle, content, imageUrl });
    await story.save();

    res.status(201).json({ message: 'Our story created', story });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create story' });
  }
});

module.exports = router;
