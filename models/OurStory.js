// models/OurStory.js
const mongoose = require('mongoose');

const OurStorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: String,
  content: {
    type: String,
    required: true,
  },
  imageUrl: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('OurStory', OurStorySchema);
