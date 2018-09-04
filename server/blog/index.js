const express = require('express')

const Router = express.Router()
const Blog = require('../model').getModel('blog')

Router.get('/list', (req, res) => {
    Blog.find({}, (err, doc) => res.json(doc))
})

module.exports = Router
