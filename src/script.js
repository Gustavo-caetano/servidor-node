const express = require('express')

const PORT = 3000;

const app = express()

app.get('/',(req, res) => {
    res.send("funcionando")
})

app.get('/teste',(req, res) => {
    res.send("funcionando porta teste")
})

app.get('/tv',(req, res) => {
    res.send("funcionando porta teste")
})

app.get('/on',(req, res) => {
    res.send("funcionando porta on")
})

app.get('/uma',(req, res) => {
    res.send("funcionando porta uma")
})

app.listen(PORT, () => {
    console.log("iniciou")
})