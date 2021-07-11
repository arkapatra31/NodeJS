const mongoose = require('mongoose');
//Schema 
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    userName: {
        type: String,
        required: true
    }
})

module.exports = {userSchema}