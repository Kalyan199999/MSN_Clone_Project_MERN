const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const connect = require('./CONFIG/connection')

const PORT = process.env.PORT || 5050;

app.use(cors());

app.use(express.json());

app.listen( PORT , ()=>{
    try 
    {
        console.log(`Server is running on port ${PORT}`);

        // connect the DB
        connect()
    } 
    catch (error) 
    {
        console.log(`Server error:${error}`);
        
    }
});