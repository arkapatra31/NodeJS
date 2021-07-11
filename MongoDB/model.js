const mongoose = require('mongoose')
const schema = require('./schema')

const myModel = mongoose.model('user',schema);

module.exports = myModel;

