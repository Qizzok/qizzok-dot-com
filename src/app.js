const express = require('express')
const hbs = require('hbs')

hbs.registerPartials(__dirname + '/templates')

const app = express()
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('index')
})

module.exports = app
