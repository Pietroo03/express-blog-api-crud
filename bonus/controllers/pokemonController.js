const pokemons = require('../data/db.js')

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

module.exports = {
    index,
    show
}