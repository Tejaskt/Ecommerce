const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const { cart } = require('../controller/cart.controller')

// route to get cart 
router.get('/userCart',cart)

module.exports = router