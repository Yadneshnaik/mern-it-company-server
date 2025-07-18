const mongoose = require('mongoose');

const PlanBookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  planTitle: String,
  price: String,
  bookedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('PlanBooking', PlanBookingSchema);
