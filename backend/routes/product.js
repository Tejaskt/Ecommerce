const express = require('express')
const { product, addProduct, singleProduct, updateProduct, deleteProduct } = require("../controller/product.controller")
const router = express.Router()


// Task one see all the product
router.get('/products',product)

// Task to add product
router.post('/add-product', addProduct)

// single product 
router.get('/product/:id', singleProduct)

// task -4 update product
router.put('/edit/:id', updateProduct)

// task -5 delete product
router.delete('/edit/:id' , deleteProduct)
module.exports = router