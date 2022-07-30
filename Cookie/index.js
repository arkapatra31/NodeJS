const express = require('express');
const cookieParser = require('cookie-parser');


const app = express();
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Welcome to a simple HTTP cookie server');
});


// "Remember Me" for 15 minutes res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });

// save as above res.cookie('rememberme', '1', { maxAge: 900000, httpOnly: true })

//Get route for adding a cookie
app.get('/setcookie', (req, res) => {
    res.cookie(`Cookie_Name`,`This is Cookie Value`, { maxAge : 1000 * 20 }); //maxAge : ms
    res.send('Cookie have been saved successfully');
});

//Get route for adding a secured cookie
app.get('/setSecureCookie', (req, res) => {
    let info = {
        name : "User1",
        id : 123
    }
    res.cookie(`Cookie token name`,info,{
        maxAge: 50000,
        secure: true,
        httpOnly: true,
        sameSite: 'lax'
    });
    res.send('Cookie have been saved successfully');
});

//Get the cookie from incoming request
app.get('/getcookie', (req, res) => {
    //show the saved cookies
    console.log(req.cookies)
    res.send(req.cookies);
});

app.listen(3000, () => console.log("Server is running at port 3000"));