const express = require('express')
const app = express()
const routes = require('./routes/pokemon.js')

app.listen(3001, () => {
    console.log('Server started on port 3001');
})

app.use('/pokemons', routes)



