const express = require("express");

const verifyToken = require('../MIDDLEWARE/verifyToken')
const { uploadUser } = require('../MULTERHANDLER/uploadImage')

// import all the custiom functions
const { getUserById , registration , updateUser } = require('../CONTROLER/userControler')

// create the user router
const userrouter  = express.Router();

// Get user by specific ID
userrouter.get( "/:id" , verifyToken , getUserById )

// create the new user
userrouter.post('/register' , uploadUser.single('user_profile') , registration )

// update the user
userrouter.put('/update/:id' , verifyToken , uploadUser.single('user_profile') , updateUser );

module.exports = userrouter;