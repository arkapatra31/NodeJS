//Will print after specified time
const timeout = setTimeout(() => {
    console.log("SetTimeOut")
},1000*5); //ms


// setImmediate() will execute code at the end of the current event loop cycle. This code will execute after any I/O operations in the next event loop and before any timers scheduled for the next event loop
const immediate = setImmediate(() => {
    console.log("SetImmediate")
});


//Will keep on printing at fixed interval
const interval = setInterval(() => {
    console.log("SetInterval");
}, 1000*3);

console.log("Before Next Tick");

const nextTick = process.nextTick(() => {
    console.log("Next Tick")
});

console.log("After Next Tick");


// clearTimeout(timeout);
// clearImmediate(immediate);
// clearInterval(interval);