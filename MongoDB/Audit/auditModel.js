const mongoose = require('mongoose');
const { auditSchema } = require('./auditSchema')
//Model
const auditModel = mongoose.model('audit', auditSchema);
module.exports = {
    auditModel
}