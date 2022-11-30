
const express = require('express')
const Animal = require('../models/animals')


// create route
const router = express.Router()


// router middleware 

//authorization middleware
router.use((req, res, next) => {
    if(req.session.loggedIn) {
        next()
    } else {
        res.redirect('/user/login')
    }
})


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

    //  add username to req.body to track related user
    req.body.username = req.session.username
    //create new animal
    Animal.create(req.body, (err, createdAnimal) => {
        // console.log(createdAnimal)
        res.redirect('/animals')

    })
 })


 //------------ edit -------------------
 // 1.
 router.get('/:id/edit', (req, res)=> {
    //get the animal from the database
    Animal.findById(req.params.id, (err, foundAnimal) => {

        res.render('animals/edit.ejs', {animal: foundAnimal})
        console.log(foundAnimal)

    })
 })
// 2. (put)
router.put('/:id', (req, res) => {

    req.body.extinct = req.body.extinct === "on" ? true : false 

    Animal.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedAnimal) => {
        res.redirect(`/animals/${req.params.id}`)

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


 //------------ delete -------------------
 router.delete('/:id', (req, res) => {
    //find the animal by id and remove it from the database
    Animal.findByIdAndDelete(req.params.id, (err, deletedFruit) => {
        res.redirect('/animals')
    })
 })
 


 module.exports = router