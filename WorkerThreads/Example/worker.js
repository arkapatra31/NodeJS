//Worker Threads in Node.js is useful for performing heavy JavaScript tasks. 
//With the help of threads, Worker makes it easy to run javascript codes in parallel making it much faster and efficient. 
//We can do heavy tasks without even disturbing the main thread. 

const { workerData, parentPort } = require("worker_threads");

console.log("Technical Articles on " + workerData);

parentPort.postMessage({ fileName: workerData, status: "Done" });
