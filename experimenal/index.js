const express = require('express');
var app = express();

app.use(logger);

app.get('/', (req,res, next) => {
    console.log("Home");
    res.status(200).send(`<html><body>Hello !!!</body></html>`);
    next();
}, audit);

//app.use(logger);
app.get('/users', (req,res, next) => {
    console.log("Users Page")
    res.status(200).send(`<html><body>Users Page</body></html>`);
    next();
});

//app.use(logger);

function logger(req, res, next){
    console.log("Logging");
    next();
}

function audit(req, res, next){
    console.log("Auditing");
    next();
}




app.listen('3000', () => {});