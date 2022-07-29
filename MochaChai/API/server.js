const express = require('express');
var app = express();
app.use(express.json);

app.get('/', (req,res) => {
    res.status(200).send("Home Page");
});

app.get('/users', (req,res) => {
    console.log("Users Page")
    res.status(200).send({   
        id : 123,
        name : John 
    });
});


app.post('/post', (req, res) => {
    if(req.body.id === null){
        res.status(400).send("Invalid Request");
    }
    res.status(200).send("User Created");
})

app.listen('3000', () => {console.log("Server Running")});

module.exports = app;