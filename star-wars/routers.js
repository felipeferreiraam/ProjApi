const {Router} = require('express');
const { route } = require('express/lib/application');
const FilmeController = require('./controllers/FilmeController');
const router = Router()

const IndexController = require('./controllers/IndexController');
const NaveController = require('./controllers/NaveController');
const PersoangemController = require('./controllers/PersonagemController');
const PlanetaController = require('./controllers/PlanetaController');

router.get('/', IndexController.index);
router.get('/filme', FilmeController.filme);
router.get('/filmes/newhope', FilmeController.newhope);
router.get('/filmes/empirestrikes', FilmeController.empirestrikes);
router.get('/filmes/returnjedi', FilmeController.returnjedi);
router.get('/personagem', PersoangemController.personagem);
router.get('/planeta', PlanetaController.planeta);
router.get('/nave', NaveController.nave)

module.exports = router