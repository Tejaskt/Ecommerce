const express = require('express')
const router = express.Router()
const userRoute = require('./user')
const productRoute = require('./product')
const { models } = require('mongoose')

router.use('/user',userRoute)
router.use('/userProduct',productRoute)
router.use('/singleProduct',productRoute)

module.exports = router