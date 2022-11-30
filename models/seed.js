// import dependencies
const mongoose = require('./connection')
const Animal = require('./animals')


// seed 

mongoose.connection.on('open', () => {

    // array of starter fruits
    const startingAnimal = [
        { species: "Raccoon", extinct: false, location: "North America", lifeExpectancy: 5, img: "https://i.insider.com/5086bc69eab8eae57a000000?width=750&format=jpeg&auto=webp"},
        { species: "Fox", extinct: true, location: "Europe and North America", lifeExpectancy: 4, img: "https://www.niabizoo.com/wp-content/uploads/2018/05/ms-animals-habitats-mammals.jpg" },
        { species: "Tiger", extinct: false, location: "Asia", lifeExpectancy: 10, img: "https://www.dartmoorzoo.org.uk/wp-content/uploads/2021/01/Tiger-1.jpg" },
        { species: "Chimpanzee", extinct: false, location: "Africa", lifeExpectancy: 15, img: "https://cdn.mos.cms.futurecdn.net/26MWT6NHVvQMbLKpmnMjDR.jpg" }

    ]

    // delete all animals
    Animal.deleteMany({}, (err, data) => {

        Animal.create(startingAnimal, (err, data) => {
            console.log(data)
            
        })
    })

})