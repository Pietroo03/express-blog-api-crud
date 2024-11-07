const pokemons = require('../data/db.js')

const index = (req, res) => {
    res.json({
        data: pokemons,
        counter: pokemons.length
    })
}

module.exports = {
    index
}