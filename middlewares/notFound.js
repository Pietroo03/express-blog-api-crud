const notFoundMiddleware = (req, res, next) => {
    res.status(404).send('Sorry cannot find that!')
}

module.exports = notFoundMiddleware