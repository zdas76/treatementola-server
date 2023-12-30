const express = require("express")
const authHandler = require('../controllers/authHandler')
const authenticate = require('../Meddilware/authenticate')


const router = require('express').Router()

    router.post('/', authHandler.loginHandler)
    router.get('/', authenticate, authHandler.varifyToken)


module.exports = router