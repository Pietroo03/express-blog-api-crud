const express = require('express')
const PostsRouter = require('./routers/posts.js')
const notFoundMiddleware = require('./middlewares/notFound.js')
const loggerMiddleware = require('./middlewares/loggerMiddleware.js')
const app = express()
const host = 'http://127.0.0.1'
const port = 3000

app.use(express.json())
app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening on ${host}:${port}`)
})

app.use('/posts', (req, res, next) => {
    throw new Error('You broke everything!')
})

app.use('/posts', loggerMiddleware)

app.use('/posts', PostsRouter)

app.use(notFoundMiddleware)

app.use ((err, req, res, next) => {
    console.log('Error: ', err.message)

    console.error(err.stack)
    res.status(500).send({
        message: 'Something went wrong',
        error: err.message
    })
})


