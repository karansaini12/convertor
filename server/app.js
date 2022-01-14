const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/userRoutes')
const bodyParser = require('body-parser')
const app = express()
const url = `mongodb://127.0.0.1:27017/newProject`
const port = 8000

app.use(bodyParser.json())
app.use(express.json())
app.use('/', routes)
mongoose.connect(url)
const db = mongoose.connection
db.once('open', _ => {
    console.log('database connected:', url)
})
db.on('error', err => {
    console.log('connection error:', err)
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})