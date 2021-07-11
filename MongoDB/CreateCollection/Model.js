const mongoose = require('mongoose');
const {
    userSchema
} = require('./Schema')
//Model
const User = mongoose.model('CRT_MODEL', userSchema);
module.exports = {
    User
}