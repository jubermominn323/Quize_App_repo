const { check } = require("express-validator")
const MIN = 6;
exports.userSignupValidator = [
    check("name").not().isEmpty().withMessage("Name field required"),
    check("email").isEmail().withMessage("Must be a valid email"),
    check("password").isLength({ min: MIN }).withMessage(`Password must be atleast ${MIN} character long`)
];

exports.userSigninValidator = [
    check("email").isEmail().withMessage("Must be a valid email"),
    check("password").isLength({ min: MIN }).withMessage(`Password must be atleast ${MIN} character long`)
];
