const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  confirmationCode: {
    type: String,
    unique: true
  },
  status: {
    type: String,
    enum: ["Pending Confirmation", "Active"],
    default: "Pending Confirmation"
  },
  role: {type: String, enum: ['participant', 'researcher', 'admin'], default: 'participant'},
  profilePicPath: {
    type: String,
    default: ""
  },

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
