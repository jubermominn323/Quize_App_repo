const express = require('express')
const router = express.Router()
const { signUp, signIn, score, detail } = require("../controllers/auth.js")
const { userSignupValidator, userSigninValidator } = require("../validator/auth")
const { runValidation } = require("../validator/index")


router.post("/signup", userSignupValidator, runValidation, signUp)
router.post("/signin", userSigninValidator, runValidation,signIn)
router.put("/score", score)
router.get("/detail", detail)

module.exports = router
