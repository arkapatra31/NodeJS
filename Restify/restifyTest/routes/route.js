const errors = require('restify-errors');   

module.exports = (server) => {
    server.get('/home', (req,res, next) => {
        try{
            res.send("HomePage Routing");
            next();
        } catch(ex){
            res.send(new errors.InvalidContentError);
            return;
        }
    });
}