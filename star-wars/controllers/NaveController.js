const axios = require('axios')

module.exports =  class NaveController {
    static nave (req, res){

        axios.get('https://swapi.dev/api/starships/2/')
        .then((response) => {
            console.log(response);
            
            let naves = response.data
            console.log(naves)

            res.render('./nave', {
              naves: naves
          })
        })
}
}

     