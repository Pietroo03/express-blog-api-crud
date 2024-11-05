const posts = require('../data/db.js')

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
    const post = posts.find(post => post.slug === (req.params.slug))

    if(!post) {
        return res.status(404).json({
            error: '404! Not Found'
        })
    }

    return res.json({
        data: post
    })
}


module.exports = {
    index,
    show,
}

