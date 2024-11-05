const posts = require('../data/db.js')
const fs = require('fs')

const index = (req, res) => {
    let html = ''
    posts.forEach(post => {
        const {title, slug, content, image, tags} = post
        const markup = `
        <ul>
            <li>
                <h1>${title}</h1>
                <img src="${image}" alt"">
                <div>${content}</div>
                <div>${tags}</div>
            </li>
        </ul>
        `
        html += markup
    })
    res.send(html)
}

const show = (req, res) => {
    const post = posts.find(post => post.slug.toLowerCase() === (req.params.slug))

    if(!post) {
        return res.status(404).json({
            error: '404! Not Found'
        })
    }

    return res.json({
        data: post
    })
}

const store = (req, res) => {
    console.log(req.body);

    const post = {
        title: req.body.title,
        slug: req.body.slug,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }

    posts.push(post)

    fs.writeFileSync('./data/db.js', `module.exports = ${JSON.stringify(posts, null, 4)}`)

    return res.status(201).json({
        data: posts,
        counter: posts.length
    })
}


module.exports = {
    index,
    show,
    store
}

