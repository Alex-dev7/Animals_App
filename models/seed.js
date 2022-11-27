// import dependencies
const mongoose = require('./connection')
const Animal = require('./animals')


// seed 

mongoose.connection.on('open', () => {

    // array of starter fruits
    const startingAnimal = [
        { species: "Lion", extinct: false, location: "Africa", lifeExpectancy: 16},
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