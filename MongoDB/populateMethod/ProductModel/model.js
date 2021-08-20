const mongoose = require('mongoose')
const productSchema = require('./schema')

const productModel = mongoose.model('C_PRODUCTS',productSchema);

module.exports = { productModel };

