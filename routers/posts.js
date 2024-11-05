const express = require('express')
const router = express.Router()
const PostController = require('../controllers/PostController.js')

router.get('/', PostController.index)
router.get('/:slug', PostController.show)
router.post('/', PostController.store)

module.exports = router