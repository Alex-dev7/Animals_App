// import dependecies
const mongoose = require('./connection')


// animals model

const {Schema, model} = mongoose

// animals schema
const animalsSchema = new Schema({
    species: String,
    extinct: Boolean,
    location: String,
    lifeExpectancy: Number,
    img: String
    
})



// make animal model
const Animal = model('Animal', animalsSchema)

//export model
module.exports = Animal