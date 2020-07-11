const jwt = require("jsonwebtoken")
const User = require("../models/user")
const Qbank = require("../models/qbank")

//const ObjectID = require('mongoose').ObjectID;

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


exports.score = (req, res) =>{
    
    const { userID } = req.body
    console.log(userID)

    User.findById({"_id":userID} , function(err, result){
        if(err){
            return res.status(422).json({error:err})
        }
        else{
            res.json(result)
        }
    })
    // User.updateOne({"_id":userId},{$set:{"score":score}}, function(err, result){
    //    if(err){
    //        return res.status(422).json({error:err})
    //    }
    //    else{
    //        res.json(result)
    //    }
    // })

}

exports.detail = (req, res ) => {
    const mysort = { score:-1}

    User.find({}, function (err, result) {

    if(err){
        return res.status(422).json({error:err})
    }
    else{
        res.json(result)
    }
    }).sort(mysort);
}

exports.addque = (req, res) =>{
    const { question, options, answer } = req.body

    User.findOne({}).exec((err, user) =>{
        if(err) {
            return res.status(422).json({
            error: "Something went wrong.",
        })
        }
        

        let newQue = new Qbank({ question, options, answer});

        newQue.save((err, que) => {
            if(err) {
                console.log(err)
                return res.status(400).json({
                    error:"Error saving data!!",
                })
            }
            
            res.json({
                message:`Successfully added `,
            })
        })
    })
}

exports.getque = (req, res) =>{
    Qbank.find()
    .then(ques =>{
        res.json(ques)
    })
    .catch(err =>{
        console.log(err)
    })
}

exports.randomque = (req, res) =>{
    Qbank.aggregate([
        { $sample: { size: 11 }}
    ])
    .then((ques) => {
      res.json(ques);
    })
    .catch((err) => {
      console.log(err);
    });
}

exports.result = (req, res) =>{
    const {answers, quesBank, userID} = req.body
    console.log(answers)
    
    console.log(userID)
    let score = 0
    
    console.log(quesBank)
    answers.map(ele => {
        quesBank.map(e => {
            if(ele.quesId == e._id && ele.ans == e.answer ){
                score++
            }
        }) 
    })

    User.updateOne({"_id":userID},{$set:{"score":score}}, function(err, result){
        if(err){
            return res.status(422).json({error:"Error saving score"})
        }
        else{
            res.json({score})
        }
     })
}