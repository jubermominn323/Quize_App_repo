const jwt = require("jsonwebtoken")
const User = require("../models/user")



exports.signUp = (req, res) => {
    const { name, email, password } = req.body

    User.findOne({email}).exec((err, user) =>{
        if(err) {
            return res.status(422).json({
            error: "Something went wrong.",
        })
        }
        
        if(user)  {
            return res.status(400).json({
                error: "Email already exists.", 
            })
        }

        let newUser = new User({ name, email, password});

        newUser.save((err, userData) => {
            if(err) {
                console.log(err)
                return res.status(400).json({
                    error:"Error saving data!!",
                })
            }
            
            res.json({
                message:`Hey ${name}, Welcome to app!! `,
            })
        })
    })
}

exports.signIn = (req, res) => {
    const { email, password } = req.body

    User.findOne({email}).exec((err, user) =>{

        if(err || !user)  {
            return res.status(400).json({
                error: "User with the email specified doesn't exist.", 
            })
        }

        if(!user.authenticate(password)){
            return res.status(400).json({
                error: "Password is incorrect"
            })
        }

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d"
        })

        const { _id, name, email } = user;

        return res.json({
            token,
            user:{
            _id,
            name, 
            email,
            },
            message:"Signed in successfully"
        })
    })
}
