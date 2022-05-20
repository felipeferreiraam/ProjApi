const {Router} = require('express')
const router = Router()



const IndexController = require('./controllers/IndexController')
const DoisController = require('./controllers/DoisController')
const TresController = require('./controllers/TresController')


router.get('/', IndexController.index)
router.get('/dois', DoisController.dois)
router.get('/tres', TresController.tres)


module.exports = router