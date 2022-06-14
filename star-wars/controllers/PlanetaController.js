
const axios = require ('axios')
const { response } = require('express')


module.exports = class PlanetaController {
    static planeta (req, res){
        res.render('./planeta')
    }

    static async planeta (req, res){
        const tatooine = await axios.get('https://swapi.dev/api/planets/1')
        const yavin = await axios.get('https://swapi.dev/api/planets/3')
        const mustafar = await axios.get('https://swapi.dev/api/planets/13')
    

        res.render('planeta', {
            tatooine: tatooine.data,
            yavin: yavin.data,
            mustafar: mustafar.data,
          })
}
}