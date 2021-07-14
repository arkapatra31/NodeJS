const mongoose = require('mongoose');
/* const moment = require('moment-timezone');
const dateIST = moment.tz(Date.now(), "Asia/Calcutta"); */

var utc = new Date();
utc.setHours(utc.getHours() + 2);

var current = new Date();
var tstamp = new Date(Date.UTC(current.getFullYear(), current.getMonth(), current.getDate(),
    current.getHours(), current.getMinutes(), current.getSeconds(), current.getMilliseconds()))
//Schema 
const auditSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    auditTimeStamp: {
        type: Date,
        default: tstamp
    }
})

module.exports = {
    auditSchema
}