const express = require('express')
const router = express.Router()
const userRoute = require('./user')
const { models } = require('mongoose')

router.use('/user',userRoute)

module.exports = router