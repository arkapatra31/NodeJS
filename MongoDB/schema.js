const mongoose = require('mongoose')

let testSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: String,
    userName: String,
    purpose: String
});

module.exports = testSchema;