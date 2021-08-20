const mongoose = require('mongoose')

let custSchema = new mongoose.Schema({
    custID: String,
    custName: String,
    product: { type: mongoose.Types.ObjectId, ref: "C_PRODUCTS" }
});

module.exports = custSchema;