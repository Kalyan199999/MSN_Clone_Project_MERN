const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

// connection
const connect = require('./CONFIG/connection')

// routes
const userrouter = require('./ROUTE/userRoute')
const newsRoute = require('./ROUTE/newsRoute')

const PORT = process.env.PORT || 5050;

app.use(cors());

app.use(express.json());

// Make the images folder public to access from anywhere
app.use('/IMAGES', express.static(__dirname + '/IMAGES'));

// set the api path
app.use( '/api/user' , userrouter );
app.use( '/api/news' , newsRoute )

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