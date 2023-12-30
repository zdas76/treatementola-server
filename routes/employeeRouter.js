const employee = require('../controllers/employeeController.js')

const router = require('express').Router()

router.post('/', employee.addEmployee)

router.get('/', employee.getAllEmployee)

// router.get('/allEmployee/:id', employee.getOnePrimaryUser)

// router.delete('/allEmployee/:id', employee.delatePrimaryUser)

module.exports = router

