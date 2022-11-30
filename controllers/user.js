// Import Dependencies
////////////////////////////////////////
const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs')


// create route
const router = express.Router()


// Routes

// the signup routes 
// get => form 
router.get('/signup', (req, res) => {
    res.render('user/signup.ejs')
})

//post => submit form
router.post('/signup', (req, res) => {
    res.send('signup')
})

// the login routes
// get => form 
router.get('/login', (req, res) => {
    res.render('user/login.ejs')
})

//post => submit form
router.post('/login', (req, res) => {
    res.send('login')
})


module.exports = router