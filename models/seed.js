// import dependencies
const mongoose = require('./connection')
const Animal = require('./animals')


// seed 

mongoose.connection.on('open', () => {

    // array of starter fruits
    const startingAnimal = [
        { species: "Lion", extinct: false, location: "Africa", lifeExpectancy: 16, img: "https://www.worldatlas.com/r/w960-q80/upload/3f/94/aa/shutterstock-126767138.jpg"},
        { species: "Lion", extinct: true, location: "Africa", lifeExpectancy: 16 },
        { species: "Lion", extinct: false, location: "Africa", lifeExpectancy: 16 }
    ]

    // delete all animals
    Animal.deleteMany({}, (err, data) => {

        Animal.create(startingAnimal, (err, data) => {
            console.log(data)
            
        })
    })

})