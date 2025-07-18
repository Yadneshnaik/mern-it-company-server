const express = require('express');
const router = express.Router();
const PlanBooking = require('../models/PlanBooking');

// POST /api/book-plan
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, planTitle, price } = req.body;

    const newBooking = new PlanBooking({
      name,
      email,
      phone,
      planTitle,
      price
    });

    await newBooking.save();
    res.status(201).json({ message: 'Plan booked successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to book plan' });
  }
});

module.exports = router;
