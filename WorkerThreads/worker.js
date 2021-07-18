const {parentPort} = require('worker_threads');

function add(num1, num2){
    return num1+num2;
}

parentPort.on('message', message => 
               parentPort.postMessage(
                add(1,3)
               ) 
            );