const express = require('express')
const router = express.Router()
const { signUp, signIn, score, detail, addque, getque, randomque, result } = require("../controllers/auth.js")
const { userSignupValidator, userSigninValidator } = require("../validator/auth")
const { runValidation } = require("../validator/index")


router.post("/signup", userSignupValidator, runValidation, signUp)
router.post("/signin", userSigninValidator, runValidation,signIn)
router.get("/detail", detail)
router.post("/addque", addque)
router.get("/getque", getque)
router.get("/randomque", randomque)
router.post("/result", result)
router.post("/score", score)
module.exports = router
