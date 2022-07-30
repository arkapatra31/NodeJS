//Will print after specified time
const timeout = setTimeout(() => {
    console.log("SetTimeOut")
},1000*2); //ms


// setImmediate() will execute code at the end of the current event loop cycle. This code will execute after any I/O operations in the current event loop and before any timers scheduled for the next event loop
const immediate = setImmediate(() => {
    console.log("SetImmediate")
});


//Will keep on printing at fixed interval
const interval = setInterval(() => {
    console.log("SetInterval");
}, 1000*3);


clearTimeout(timeout);
clearImmediate(immediate);
clearInterval(interval);
console.clear();