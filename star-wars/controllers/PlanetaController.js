
const axios = require ('axios')
const { response } = require('express')


module.exports = class PlanetaController {
    static planeta (req, res){
        res.render('./planeta')
    }

    static dathStar (req, res){
        axios.get('https://swapi.dev/api/planets/2/')
        .then((response) => {
            console.log(response)

            let planetas = response.data

        res.render ('./planetas/planeta',{
            plaentas: planetas
        })
    })
}
}