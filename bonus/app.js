const express = require('express')
const app = express()
const pokemons = require('./data/db.js')

app.listen(3001, () => {
    console.log('Server started on port 3001');
    
})

app.get('/pokemons', (req, res) => {
    res.json({
        data: pokemons,
        counter: pokemons.length
    })
})

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
