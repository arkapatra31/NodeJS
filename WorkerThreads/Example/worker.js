const { workerData, parentPort } = require("worker_threads");

console.log("Technical Articles on " + workerData);

parentPort.postMessage({ fileName: workerData, status: "Done" });
