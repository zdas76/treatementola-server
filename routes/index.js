const router = require('express').Router();
const authRoute = require('./auth')
const PrimaryUserRouter = require ('./primaryUserRouter');
const EmployeeRouter = require ('./employeeRouter.js');
const authenticate = require('../Meddilware/authenticate')

router.use('/api/auth', authRoute)
router.use('/api/primaryusers', PrimaryUserRouter)
router.use('/api/employee', authenticate, EmployeeRouter)


module.exports = router;