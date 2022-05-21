const express = require('express')
const app = express()

const routes = require('./routers')
const {engine} = require('express-handlebars')
const helpers = require('./helpers/handlesbars')

app.use(express.static('public'))
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use('/', routes) 
  

app.listen(8080, () => {
  console.log('Server Inicializado')
})