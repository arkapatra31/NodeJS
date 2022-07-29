var restify = require('restify');
var server = require('./routes/route')

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

var server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);
server.get('/new', (req, res)=>{
    res.send("Using Get Method");
});
server.get('/customer', server);

server.listen(3000, function() {
  console.log('%s listening at %s', server.name, server.url);
});