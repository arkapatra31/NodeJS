const mongoose = require('mongoose')

let testSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: String,
    userName: String,
    role: String
});

module.exports = testSchema;