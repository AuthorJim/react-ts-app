const express = require('express')
const mongoose = require('mongoose')

const DB_URL = 'mongodb://127.0.0.1:27017/AuthorJim'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', () => console.log('mongo 连接成功'))

const app = express()
const PORT = 9003

const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    body: String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
})

const Blog = mongoose.model('blog', blogSchema)

const createLogger = (err, doc) => {
    if (err) {
        console.log(err)
    } else {
        console.log(doc)
    }
}

// Blog.create({
//     title: '你到底是谁',
//     author: '黄锦文',
//     body: '今晚打老虎吗',
//     meta: { votes: 22, favs: 90 }
// })

// Blog.update(
//     { author: '黄锦文' },
//     { $set: { body: '春暖的花开带走冬天的忧伤' } },
//     createLogger
// )

app.get('/', (req, res) => res.send('<h1>你好 中国</h1>'))

app.get('/data', (req, res) => {
    Blog.find({}, (err, doc) => res.json(doc))
})

app.listen(PORT, () => console.log('server run in port 9003'))
