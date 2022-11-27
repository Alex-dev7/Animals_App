const express = require('express')
const Animal = require('../models/animals')


// create route
const router = express.Router()


// router middleware 
// ?????  sesion ??


// Routes

//------------- seed --------------------
router.get('/seed', (req, res) => {

    //define data we want to put in the database
   
 })

  
 //------------ index --------------------
 router.get('/', (req, res) => {

    Animal.findOne({})
    .then((animals) => {
        res.render('animals/index.ejs', {animals})
    })
    .catch(err => console.log(err))
 })



 module.exports = router