const express = require('express')
const app = express()

const routes = require('./routes') 
const { engine } = require('express-handlebars')
const helpers = require('./helpers/handlebars')



app.use(express.static('public'))
app.engine('handlebars', engine({
    helpers: helpers
}))
app.set('view engine', 'handlebars')
app.use('/', routes)



app.listen(8080, () => {
    console.log(`Servidor iniciado`)
})