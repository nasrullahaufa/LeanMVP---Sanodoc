const express = require('express')

const user = require('./userRoute')

const router = express.Router()

router.use("/user", user)

module.exports = router