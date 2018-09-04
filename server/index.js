const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const blogRouter = require('./blog')

const PORT = 9003
const app = express()

app.use(cookieParser())
app.use(bodyParser.json())
app.use('/blog', blogRouter)

app.listen(PORT, () => console.log('server run in port 9003'))
