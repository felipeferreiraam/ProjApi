
const axios = require ('axios')

module.exports = class PlanetaController {
    static planeta (req, res){
        axios.get('https://swapi.dev/api/planets/2/')
        .then((response) => {
            console.log(response)

            let planetas = response

        res.render ('./planetas/planeta',{
            plaentas: planetas
        })
    })
}
}