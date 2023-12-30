const primaryUserController = require('../controllers/primaryUserController.js')
const authenticate = require('../Meddilware/authenticate')

const router = require('express').Router()

router.post('/', primaryUserController.addPrimaryUser)

router.get('/', authenticate, primaryUserController.getAllPrimaryUsers)

router.get('/done',  authenticate, primaryUserController.getDonePrimaryUsers)

router.get('/newreqest',  authenticate, primaryUserController.newPrimaryUser)

router.get('/:id',  authenticate, primaryUserController.getOnePrimaryUser)

router.put('/:id',  authenticate, primaryUserController.UpdatePrimaryUser)

router.delete('/:id',  authenticate, primaryUserController.delatePrimaryUser)

module.exports = router

