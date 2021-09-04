const mongoose = require("mongoose");
const ISTTS = require("../services/fetchIST");
let current = new Date();
const currentTS = new Date(
  Date.UTC(
    current.getFullYear(),
    current.getMonth(),
    current.getDate(),
    current.getHours(),
    current.getMinutes(),
    current.getSeconds(),
    current.getMilliseconds()
  )
);

const expiryTS = new Date(
  Date.UTC(
    current.getFullYear(),
    current.getMonth(),
    current.getDate() + 30,
    current.getHours(),
    current.getMinutes(),
    current.getSeconds(),
    current.getMilliseconds()
  )
);

let userSchema = new mongoose.Schema({
  userID: String,
  userName: String,
  accountCreated: {
    type: Date,
    required: true /* default: +new Date(ISTTS) */,
  },
  accountExpiryDate: {
    type: Date,
    required: true /* default: +new Date(ISTTS) + 30*24*60*60*1000 */,
  },
});

module.exports = userSchema;
