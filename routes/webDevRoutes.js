const express = require('express');
const router = express.Router();
const WebDev = require('../models/WebDev');

// @route   GET /api/web-development
router.get('/', async (req, res) => {
  try {
    const plans = await WebDev.find();
    res.json(plans);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
