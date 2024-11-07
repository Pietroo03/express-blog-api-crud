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

app.use('/posts', loggerMiddleware)

app.use('/posts', PostsRouter)

app.use(notFoundMiddleware)


