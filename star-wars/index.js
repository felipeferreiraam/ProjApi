const path = require('path')
const express = require('express')
const res = require('express/lib/response')
const app = express()

app.get('/', function (req, res) {
  res.sendFile(path.resolve('index.html'))
})

app.listen(8080, function () {
  console.log('Server Inicializado')
})

app.use(express.static('public'))