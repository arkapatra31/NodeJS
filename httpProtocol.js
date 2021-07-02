const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.write("This is Homepage");
        res.end()
    }

    if(req.url === '/view/'){
        res.writeHead(status=200)
        res.write(JSON.stringify([1,'qbc','121ccc']));
        res.end()
    }
});

server.listen(3000);


console.log("Server is up at http://localhost:3000");