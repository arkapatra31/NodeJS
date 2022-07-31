const _ = require('lodash');
const moment = require('moment-timezone');
const dateIST = moment.tz(Date.now(), "Asia/Calcutta");


let sperson1 = {
    name : "John"
};

//Shallow Copy
let sperson2 = sperson1; //this basically reference to address of person1

console.clear()
console.log(`Shallow Copy ----> Before changing person2.name`, sperson1, sperson2);

//So if we change the name property of person2 then it will be automatically changed in person1
sperson2.name = "Alice";

console.log(`Shallow Copy ----> After changing person2.name`, sperson1, sperson2);
console.log('\n-----------------------------\n')


//In order to avoid shallow copying use ... operator or Object.assign({}, sourceObject) although this performs partial deep copy and will come to problem when we have nested object

let pperson1 = {
    name : "John",
    contact : {
        phone : 123,
        country : "UK"
    }
};

//let pperson2 = {...pperson1}; // Way 1
let pperson2 = Object.assign({}, pperson1); // Way 2

console.log(`Partial Deep Copy ----> Before changing person2.name`, pperson1, pperson2);

pperson2.name = "Alice";
pperson2.contact.country = "USA" //This will change person1 country to USA as well which is wrong

console.log(`Partial Deep Copy ----> After changing person2.name`, pperson1, pperson2);
console.log('\n-----------------------------\n')


//to solve the problem of partial deep copy using JSON.parse
let dp1 = {
    name : "John",
    contact : {
        phone : 123,
        country : "UK"
    },
    age : () => 30,
    date : dateIST
};

let dp2 = JSON.parse(JSON.stringify(dp1));
console.log(`Deep Copy ----> Before changing person2.name`, pperson1, pperson2);

dp2.contact.country = "USA"

//now if there is a function inside the object it will lost if we do JSON.stringify, some object will also be changed to type string which is wrong
console.log(`Deep Copy ----> After changing person2.name`, dp1, dp2);
console.log(typeof(dp1.date), typeof(dp2.date));
console.log('\n-----------------------------\n');


//to avoid all of the above problem using cloneDeep from lodash library
let finalObj1 = {
    name : "John",
    contact : {
        phone : 123,
        country : "UK"
    },
    age : () => 30,
    date : dateIST
};

let finalObj2 = _.cloneDeep(finalObj1);

finalObj2.contact.country = "USA"

console.log(`Deep Copy ----> Before changing person2.name`, finalObj1, finalObj2);

finalObj2.contact.country = "USA" 
finalObj2.date = moment.tz(Date.now(), 'Europe/London');

console.log(`Deep Copy ----> After changing person2.name`, finalObj1, finalObj2);
console.log("Checking typeOf Date property in both Objects ---> ",typeof(finalObj1.date), typeof(finalObj2.date));
console.log('\n-----------------------------\n');