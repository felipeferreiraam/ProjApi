const axios = require('axios');
const { response } = require('express');


module.exports = class PersoangemController {

    static personagem (req, res) {
        res.render('personagem')
    }

    static async personagens (req, res) {
        const luke = await axios.get('https://swapi.dev/api/people/1')
        const yoda = await axios.get('https://swapi.dev/api/people/20')
        const solo = await axios.get('https://swapi.dev/api/people/14')
        const vader = await axios.get('https://swapi.dev/api/people/4')
        const palpatine = await axios.get('https://swapi.dev/api/people/21')
        const maul = await axios.get('https://swapi.dev/api/people/44')


        res.render('personagem', {
          luke: luke.data,
          yoda: yoda.data,
          solo: solo.data,
          vader: vader.data,
          palpatine: palpatine.data,
          maul: maul.data
        })
      }
  }

