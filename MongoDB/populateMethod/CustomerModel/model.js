const mongoose = require('mongoose')
const custSchema = require('./schema')

const custModel = mongoose.model('C_CUSTS',custSchema);

module.exports = { custModel };

