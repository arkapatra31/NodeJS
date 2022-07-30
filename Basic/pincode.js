var zipcodes = require('zipcodes');
var pincodeDirectory = require('india-pincode-lookup');
const postalCodes = require('postal-codes-js');

//zipcode is specific to USA
//console.log(zipcodes.lookup(400706));

var zipObj = zipcodes.random();
//console.log(zipObj)

const lis = pincodeDirectory.lookup(713201);
if(lis && lis.length>0){
    pincodeDetails = []
    lis.forEach(elem => {
        pincodeDetails.push({

            region : elem.officeName,
            pin : elem.pincode,
            taluk : elem.taluk,
            district : elem.districtName,
            state : elem.stateName

        })
    });
    console.log(pincodeDetails);
}



const countryCode = 'USA'; // ISO 3166-1 alpha-2 or alpha-3 country code as string.
const postalCode = '713201'; // Postal code as string or number.
//console.log(postalCodes.validate(countryCode, postalCode)); // Returns 'true' if valid, error message as string otherwise.