const express = require('express')
const router = express.Router()
const userRoute = require('./user')
const productRoute = require('./product')
const cartRoute = require('./cart')
const { models } = require('mongoose')

router.use('/user',userRoute)
router.use('/userProduct',productRoute)
router.use('/singleProduct',productRoute)

// update product
router.use('/update',productRoute)
// delete
router.use('/delete',productRoute)

// cart details 
router.use('/userCart',cartRoute)
module.exports = router