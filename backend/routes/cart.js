const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const { cart , addToCart, updateCart} = require('../controller/cart.controller')

// route to get cart 
router.get('/cart',cart)

// route to add to cart
router.post('/addToCart',addToCart)

// route to update cart
router.put('/updateCart',updateCart)

module.exports = router