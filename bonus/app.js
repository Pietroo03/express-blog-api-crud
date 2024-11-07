const express = require('express')
const app = express()
const pokemons = require('./data/db.js')
const pokemonController = require('./controllers/pokemonController.js')

app.listen(3001, () => {
    console.log('Server started on port 3001');
})

app.get('/pokemons', pokemonController.index)

app.get('/pokemons/:name', pokemonController.show)


