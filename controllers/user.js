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
router.post('/signup', async (req, res) => {
    // encrypt password
    req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10))
    //create new user
    User.create(req.body, (err, user) => {
    //redirect to login page
    res.redirect('/user/login')
    })
    
})

// the login routes
// get => form 
router.get('/login', (req, res) => {
    res.render('user/login.ejs')
})

//post => submit form
router.post('/login', (req, res) => {
    // get the data from the request body
    const {username, password} = req.body
    User.findOne({username}, (err, user) => {
        //checking if user exists
        if(!user) {
            res.send(`user doesn't exists`)
        } else {
            // checking if password matches
            const result = bcrypt.compareSync(password, user.password)
            if(result) {
                res.redirect('/animals')
            } else {
                res.send('wrong password')
            }
        }
    })
})


module.exports = router