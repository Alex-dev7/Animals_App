require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const Animal = require('./models/animals')
const FruitRouter = require('./controllers/animal')

const app = express()

// middleware
app.use(morgan("dev"))
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use("/animals", FruitRouter)


app.get('/', (req, res) => {
    res.send(`WORKS!`)

})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})