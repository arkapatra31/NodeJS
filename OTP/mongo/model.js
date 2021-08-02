const mongoose = require('mongoose');
const {
    userSchema
} = require('./schema')

const userModel = mongoose.model('C_LOGIN_USER', userSchema);

module.exports = {
    userModel
};