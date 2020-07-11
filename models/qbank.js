const mongoose = require('mongoose')

const QbankSchema = new mongoose.Schema({
    question:{
        type: String
    },
    options: [String],
    answer: {
        type:String
    }
})

module.exports = mongoose.model("Qbank", QbankSchema)
