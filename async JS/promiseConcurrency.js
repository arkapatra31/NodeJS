const { result } = require("underscore");

const p1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        //console.log("Async operation...1");
        resolve("Promise p1")
        //reject(new Error("Promise 1 rejected"));
    },2000);
})

const p2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        //console.log("Async operation...2");
        resolve("Promise p2")
    },2000);
})

const p3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        //console.log("Async operation...3");
        resolve("Promise p3")
    },2000);
})

//race method return the promise which is executed at the very first
Promise.race([p1,p2,p3])
    .then(result => console.log(result))
    .catch(err => console.log(err.message)); 


 Promise.all([p1,p2,p3])
    .then(result => console.log(result))
    .catch(err => console.log(err.message));