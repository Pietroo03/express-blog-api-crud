const express = require('express')
const app = express()
const pokemon = require('./data/db.js')

app.listen(3001, () => {
    console.log('Server started on port 3001');
    
})

app.get('/pokemon', (req, res) => {
    res.json({
        data: pokemon,
        counter: pokemon.length
    })
})
