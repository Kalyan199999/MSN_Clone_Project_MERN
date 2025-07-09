const mongoose = require('mongoose');

// store the images of users
const fileInfo = require('./imageInfo')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    minlength: 8, // hashed before saving
    select: false // do not return by default
  },

  phone: {
    type: String,
    default: null
  },

  country: {
    type: String,
    default: 'India'
  },

  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    default: 'other'
  },

  dateOfBirth: {
    type: Date,
    default: Date.now()
  },
  profile:{
    type: fileInfo
  }

} , { timestamps: true })

const User = mongoose.model('User', userSchema);

module.exports = User;