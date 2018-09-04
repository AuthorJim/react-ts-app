const express = require('express')
const blogRouter = require('./blog')

const PORT = 9003
const app = express()

app.use('/blog', blogRouter)

app.listen(PORT, () => console.log('server run in port 9003'))
