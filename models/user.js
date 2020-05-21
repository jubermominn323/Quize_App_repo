const mongoose = require("mongoose")
const crypto = require("crypto")

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },

    email: {
        type: String,
        trim: true,
        required :true,
        unique: true,
        lowercase: true
    },
    hashed_password: {
        type: String,
        required: true
    },
    salt: String,
},
{ timestamps: true }
)

UserSchema.methods = {
    makeSalt: function() {
        return Math.round(new Date().valueOf() * Math.random() + "")
    },
    encryptPassword: function(password) {
        if(!password) return "";


        try{
            return crypto
            .createHmac("sha1", this.salt)
            .update(password)
            .digest("hex")
        }catch(err) {
            return err
        }
    },

    authenticate: function(plainPassword) {
        return this.encryptPassword(plainPassword) === this.hashed_password;
    }
}
UserSchema.virtual("password")
    .set( function (password) {
        this._password = password;
        this.salt = this.makeSalt();
        this.hashed_password = this.encryptPassword(password)
    })
    .get(function() {
        return this._password;
    })
module.exports = mongoose.model("User", UserSchema)