let currentTS = new Date();
let currentOffset = currentTS.getTimezoneOffset();
let ISTOffset = 660; // IST offset UTC +5:30

let ISTTS = new Date(
  currentTS.getTime() + (ISTOffset + currentOffset) * 60000
);

module.exports = ISTTS;


/* let current = new Date();

const currentTS = new Date(Date.UTC(current.getFullYear(), 
current.getMonth(),current.getDate(),current.getHours(), 
current.getMinutes(),current.getSeconds(), current.getMilliseconds()));

const expiryTS = new Date(Date.UTC(current.getFullYear(), 
current.getMonth(),current.getDate()+30,current.getHours(), 
current.getMinutes(),current.getSeconds(), current.getMilliseconds()));
console.log(currentTS, expiryTS);
module.exports = { currentTS, expiryTS }; */