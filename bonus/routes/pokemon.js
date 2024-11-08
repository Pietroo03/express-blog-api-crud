const express = require('express')
const router = express.Router()
const pokemonController = require('../controllers/pokemonController.js')

router.get('/', pokemonController.index)

router.get('/:name', pokemonController.show)

router.post('/', pokemonController.store)

router.put('/:name', pokemonController.update)

router.delete('/:name', pokemonController.destroy)

module.exports = router