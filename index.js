const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
app.use(cors())
app.get('/', (req, res) => {
    res.send('Server is running well....')
})

const data = require('./data/data.json')
app.get('/chefs', (req, res) => {
    res.send(data)
})
app.get('/chefs/:id', (req, res) => {
    const id = req.params.id
    const selectedChef = data.find(d => d.id == id)
    res.send(selectedChef)
})


app.listen(port)