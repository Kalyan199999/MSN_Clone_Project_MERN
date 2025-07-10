const express = require("express");
const newsRoute = express.Router();

const verifyToken = require('../MIDDLEWARE/verifyToken')
const { uploadNews } = require('../MULTERHANDLER/uploadNewsImage')

module.exports = newsRoute;