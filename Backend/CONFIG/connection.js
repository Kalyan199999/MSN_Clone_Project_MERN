// connect the server to mongoose database
const mongoose = require("mongoose");

const connect = async ()=>{
    try 
    {
    const conn = await mongoose.connect(process.env.CONNECTION_STRING);

    console.log(`MongoDB Connected to: ${conn.connection.host}:5050`);
  } 
  catch (error) 
  {
    console.error(`MongoDB Connection failed!: ${error.message}`);
    process.exit(1);
  }
}

module.exports = connect;