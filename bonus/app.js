const express = require('express')
const app = express()
const pokemons = require('./data/db.js')
const pokemonController = require('./controllers/pokemonController.js')

app.listen(3001, () => {
    console.log('Server started on port 3001');
    
})

app.get('/pokemons', pokemonController.index)

app.get('/pokemons/:name', (req, res) => {
    const pokemon = pokemons.find((pokemon) => pokemon.name.toLowerCase() === req.params.name)

    if (!pokemon) {
        return res.status(404).json({
            error: `Nessun pokemon trovato con il nome di ${req.params.name} `
        })
    }

    return res.status(200).json({
        data: pokemon
    })
})
