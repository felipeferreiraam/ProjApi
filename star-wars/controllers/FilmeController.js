const axios = require('axios')


module.exports = class FilmeController {

    static filme (req, res) {
        res.render('./filmes/filme')
            }        

static newhope (req, res) {
  axios.get('https://swapi.dev/api/films/2/')
    .then((response) => {
      console.log(response);
     
      let newhope = response
      res.render('./filmes/newhope', {
          newhope: newhope
        })
      })
    }
}

