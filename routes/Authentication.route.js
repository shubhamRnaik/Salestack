// const {Router} = require('../config')
const express = require('express')
const router = express.Router()
const {signup,signIn} = require('../controller/Authenticate.controller.js')



router.post('/signup',signup)
router.post('/signin',signIn)


module.exports = router