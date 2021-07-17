const worker = new Worker('worker.js');

worker.addEventListener('message', function(msg) {
    console.log(msg.data);
});

worker.postMessage('This is index');