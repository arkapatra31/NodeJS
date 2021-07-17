self.addEventListener('message', function(msg){
    const message = `${msg.data} sent to worker.js`;
    this.self.postMessage(message);
    this.self.close();
})