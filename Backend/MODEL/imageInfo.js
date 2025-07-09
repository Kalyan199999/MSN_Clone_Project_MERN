const mongoose = require('mongoose');

// Define images as a Mongoose sub-schema
const fileInfo = new mongoose.Schema({
    
  fieldname: String,
  originalname: String,
  encoding:String,
  mimetype:String,
  destination:String,
  filename: String,
  path: String,
  size: Number

}, { _id: false }); // _id: false to avoid generating _id for each file object

module.exports = { fileInfo };