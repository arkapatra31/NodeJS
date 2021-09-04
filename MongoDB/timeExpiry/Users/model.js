const mongoose = require('mongoose')
const userSchema = require('./schema')

const userModel = mongoose.model('CUSTOMERS',userSchema);

module.exports = { userModel };

