const express = require('express')
const { product, addProduct, singleProduct } = require("../controller/product.controller")
const router = express.Router()


// Task one see all the product
router.get('/products',product)

// Task to add product
router.post('/add-product', addProduct)

// single product 
router.get('/product/:id', singleProduct)

module.exports = router