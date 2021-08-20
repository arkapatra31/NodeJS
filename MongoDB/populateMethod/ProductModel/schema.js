const mongoose = require('mongoose')

let productSchema = new mongoose.Schema({
    productID: String,
    productName: String,
    productPrice: String,
    customer: { type: mongoose.Types.ObjectId, ref: "C_CUSTS" }
});

module.exports = productSchema;