const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

//routes / URL /endpoint utama kita method GET
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('utama')
})
