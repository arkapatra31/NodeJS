const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    userName: {type:String, required: true},
    email: {type:String, unique: true, required: true},
    password: {type:String, required: true},
    mfaEnabled: {type:Boolean, required: true}
});

module.exports = {
    userSchema
};