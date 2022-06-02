const axios = require('axios')


module.exports = class FilmeController {
    static filme (req, res) {
        axios.get('https://swapi.dev/api/films/')
    .then((response) => {
      console.log(response);
   
    let filmes = response
                console.log(filmes)

                res.render('filme', {
                  filmes: filmes
              })
            })
}
}