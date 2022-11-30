require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const Animal = require('./models/animals')
const FruitRouter = require('./controllers/animal')
const UserRouter = require('./controllers/user')
const session = require('express-session')
const MongoStore = require('connect-mongo')


const app = express()

// middleware
app.use(morgan("dev"))
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(session({
    secret: process.env.SECRET,
    store: MongoStore.create({mongoUrl: process.env.DATABASE_URL}),
    saveUninitialized: true,
    resave: false,
})) //This now adds a property to the request object (req.session), we can use this object to store data between requests. Perfect for storing whether the user is logged in or not
app.use("/animals", FruitRouter)
app.use('/user', UserRouter)


app.get('/', (req, res) => {
    res.render('index.ejs')

})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})