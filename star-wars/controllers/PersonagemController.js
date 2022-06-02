const axios = require('axios')


module.exports = class PersoangemController{
    static personagem (req, res){
        axios.get('https://swapi.dev/api/people/1/')
        .then((response) => {
            console.log(response)

            let pessoa = response
            console.log(pessoa)


        res.render ('personagem',{
            pessoa: pessoa
        })
    })
}
}