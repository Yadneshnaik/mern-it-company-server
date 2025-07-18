const express = require('express');
const router = express.Router();
const TeamMember = require('../models/TeamMember');

// GET all team members
router.get('/', async (req, res) => {
  try {
    const team = await TeamMember.find();
    res.json(team);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
