const express = require('express')
const app = express()
const pokemon = require('./data/db.js')

app.listen(3000, () => {
    console.log('Server started on port 3000');
    
})