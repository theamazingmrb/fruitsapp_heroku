const exp = require('constants')
const fruits = require('./models/fruits')
const pokemon = require('./models/pokemon')

const express = require('express')
const app = express() // app variable we can use all over the place to attach stuf to our app
// process.env will ook at the environment for environment variables
// and pass them if needed. 
// 

// let creditcardnumber =  process.env.CARDNUMBER
const PORT = process.env.PORT || 3001
const morgan = require('morgan')
// App.set for settings
// console.log(fruits)
// Mount middle Wares app.use() - middlewares go above any route we want that middleware to affect
app.use(morgan('tiny')) // morgan is just a logger
app.use(express.static('public')) // Tells the app to serve static file
//out of the public folder

app.get('/pokemon/:name', (req,res) => {
    res.send({pokemon: pokemon.filter(p => p === req.params.name)})
})

// I.N.D.U.C.E.S
// Index - see all items routes. get all items out the db and send to the user
app.get('/fruits', (req, res)=> {
    // res.send(fruits) - res.send sends back raw data or html
    // to send ejs we use
    // ------- res.render(view, {data})
    // - view represents an ejs page, will check for this file name in the views folder
    // - {data} - represents and data we want this page to use that is dynmic /changing
    // noramally in an object {key: value}
    // when a key and value have the same name you ca n just put the variable there
    res.render('index.ejs', { fruits, pokemon: pokemon[0] })
})
// SHOW 
app.get('/fruits/:index', (req, res)=> {
    console.log(req.params.index)
    const fruit = fruits[req.params.index]
    // res.status(200).send(fruit)
    // we willupdate this to also send a view + data
    res.render('show.ejs', { fruit })
})



const hero = {
    name: 'Billie',
    powers: [
        1,2,3
    ]
}
app.get('/test', (req,res)=>{
    
    res.send(`
        <h1> ${hero.name} </h1>
            <ul>
                ${hero.powers.map(power=> `<li>${power}</li>`)}
            </ul>
    `)
})

// app.listen lets our app know which port to run
app.listen(PORT, () => {
    console.log('Their power level is over', PORT)
})