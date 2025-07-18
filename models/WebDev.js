const mongoose = require('mongoose');

const WebDevSchema = new mongoose.Schema({
  title: String,
  price: String,
  description: String,
  features: [String],
  whatIsFree: [String],
});

module.exports = mongoose.model('WebDev', WebDevSchema);
