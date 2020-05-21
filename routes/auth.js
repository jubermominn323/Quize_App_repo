const express = require('express')
const router = express.Router()
const { signUp, signIn } = require("../controllers/auth.js")
const { userSignupValidator, userSigninValidator } = require("../validator/auth")
const { runValidation } = require("../validator/index")


router.post("/signup", userSignupValidator, runValidation, signUp)
router.post("/signin", userSigninValidator, runValidation,signIn)

module.exports = router
