const path = require('path')
const express = require('express')
const app = express()

app.get ('/', function (req, res) {
    res.sendFile(path.resolve('index.html'))
})

app.listen(8080, function(){
    console.log('Server Iniciado!')
})

app.use(express.static('public'))