// dependecies

require("dotenv").config() 
const mongoose = require("mongoose")

// database connection 
//--------------------
// setup inputs
const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// establish connection
mongoose.connect(DATABASE_URL, CONFIG)


// logging connection events from mongoose
mongoose.connection
.on('open', () => console.log("Connect to Mongoose"))
.on('close', () => console.log("Disconnected from Mongoose"))
.on('error', (error) => console.log(error))


module.exports = mongoose