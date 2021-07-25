const express = require('express');
const expressSession = require('express-session');
const passport = require('passport');

const app = express();
app.use(expressSession({
    secret : 'test_login',
    resave : false,
    saveUninitialized : true
}));
app.use(passport.initialize());
app.use(passport.session());
require('./auth');

//function to check if the user is logged in or not
function isLoggedIn(req, res, next){
    req.user ? next() : res.send('Error 401. User not logged in');
}

app.get('/', (req,res) => {
    res.send('<center><a href ="/auth/google"><br><font color="Green" size="20px" face="verdana">Authenticate With Google</font></a></center>');
});

app.get('/auth/google', 
    passport.authenticate('google', {scope: ['email', 'profile']} )
);

app.get('/google/callback',
    passport.authenticate('google',
        {
            successRedirect : '/loggedIn',
            failureRedirect : '/failedLogin',
            failureFlash: 'Something went wrong. Please try again'
        }
    )
);

app.get('/loggedIn', isLoggedIn, (req,res) => {
    res.send(`Hello ${req.user.given_name}`);
});

app.get('/failedLogin', (req,res) => {
    res.send("Failed Login");
});

app.get('/logOut', (req,res)=>{
    req.logOut();
    req.session.destroy();
    res.send("Logged Out !!!");
})

app.listen(4000, () => console.log("Server is running at http://localhost:4000"));
