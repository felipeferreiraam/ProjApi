const axios = require('axios');
const { response } = require('express');


module.exports = class FilmeController {

    static filme (req, res) {
        res.render('./filmes/filme')
            }        

static newhope (req, res) {
  axios.get('https://swapi.dev/api/films/1/')
    .then((response) => {
         
      let newhope = response.data
      res.render('./filmes/newhope', {
          newhope: newhope
        })
      })
    }

    static empirestrikes (req, res) {
      axios.get('https://swapi.dev/api/films/2/')
        .then((response) => {
           
          let empirestrikes = response.data
          res.render('./filmes/empirestrikes', {
            empirestrikes: empirestrikes
            })
          })
        }

     static returnjedi (req,res) {
      axios.get('https://swapi.dev/api/films/3/')
        .then((response) => {

          let returnjedi = response.data
          res.render('./filmes/returnjedi', {
            returnjedi: returnjedi
            })
          })
        }
}

