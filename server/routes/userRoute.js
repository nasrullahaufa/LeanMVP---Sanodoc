const express = require('express')
const router = express.Router()
const userController = require("../controllers/userController")
// const authenticate = require("../middlewares/authentication")


router.post("/login", userController.login)


module.exports = router