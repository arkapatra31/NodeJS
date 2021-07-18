const {Worker} = require('worker_threads');
const worker = new Worker('./worker.js');

worker.on('message', (msg) => console.log(msg));
worker.postMessage('ping');
