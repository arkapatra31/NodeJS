var zipcodes = require('zipcodes');
var pincodeDirectory = require('india-pincode-lookup');

//zipcode is specific to 
console.log(zipcodes.lookup(400706));

/* var zipObj = zipcodes.random();
console.log(zipObj) */

console.log(pincodeDirectory.lookup(713201));