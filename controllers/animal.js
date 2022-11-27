
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

    // get the animals from the database
    Animal.find({})
    .then((animals) => {
        res.render('animals/index.ejs', {animals})
        console.log(animals)
    })
    .catch(err => console.log(err))
 })


 //------------ new --------------------
 router.get('/new', (req, res) => {
    res.render('animals/new.ejs')
 })


 //------------ post -------------------
 router.post('/', (req, res) => {

    req.body.extinct = req.body.extinct === "on" ? true : false    

    Animal.create(req.body, (err, createdAnimal) => {
        console.log(createdAnimal)
        res.redirect('/animals')

    })
 })



 //------------ show --------------------
 router.get('/:id', (req, res) => {
    Animal.findById(req.params.id)
    .then((animal) => {
        res.render('animals/show.ejs', {animal})
        console.log(animal)
    })
    .catch(err => console.log(err))
 })
 


 module.exports = router