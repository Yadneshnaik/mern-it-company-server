const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  position: { type: String, required: true },
  bio: { type: String },
  linkedin: { type: String },
  email: { type: String },
});

module.exports = mongoose.model('TeamMember', teamMemberSchema);
