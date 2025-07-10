const express = require("express");

const verifyToken = require('../MIDDLEWARE/verifyToken')
const { uploadUser } = require('../MULTERHANDLER/uploadImage')

// import all the custiom functions
const { getUserById , registration , updateUser , deleteUser } = require('../CONTROLER/userControler')

// create the user router
const userrouter  = express.Router();

// Get user by specific ID
userrouter.get( "/:id" , verifyToken , getUserById )

// create the new user
userrouter.post('/' , uploadUser.single('user_profile') , registration )

// update the user
userrouter.put('/:id' , verifyToken , uploadUser.single('user_profile') , updateUser );

// delete the user
userrouter.delete('/:id' , verifyToken , deleteUser )

module.exports = userrouter;