const pokemons = require('../data/db.js')
const fs = require('fs')

const index = (req, res) => {
    res.json({
        data: pokemons,
        counter: pokemons.length
    })
}

const show = (req, res) => {
    const pokemon = pokemons.find((pokemon) => pokemon.name.toLowerCase() === req.params.name)

    if (!pokemon) {
        return res.status(404).json({
            error: `Nessun pokemon trovato con il nome di ${req.params.name} `
        })
    }

    return res.status(200).json({
        data: pokemon
    })
}

const store = (req, res) => {

    const pokemon = {
        name: req.body.name,
        type: req.body.type,
        level: req.body.level
    }

    pokemons.push(pokemon)

    fs.writeFileSync('./data/db.js', `module.exports = ${JSON.stringify(pokemons, null, 4)}`)

    return res.status(201).json({
        status: 201,
        data: pokemons,
        counter: pokemons.length
    })

}

module.exports = {
    index,
    show,
    store
}