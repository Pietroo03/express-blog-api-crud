const express = require('express')
const PostsRouter = require('./routers/posts.js')
const app = express()
const host = 'http://127.0.0.1'
const port = 3000

app.use(express.static('public'))
app.use(express.json())

app.listen(port, () => {
    console.log(`Example app listening on ${host}:${port}`)
})

app.use('/', PostsRouter)


