const { result } = require("underscore");

const p = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        //resolve("Promise is successful");
        reject(new Error("Promise is rejected"))
    },2000);
    
});

p
    .then((result) => console.log(result))
    .catch((err) => console.log(err.message))