const mongoose = require('mongoose')
const schema = require('./schema')

const myModel = mongoose.model('test',schema,'test');

module.exports = myModel;

