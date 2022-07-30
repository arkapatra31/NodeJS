const express = require("express")
const jwt = require('jsonwebtoken')
const _  = require("lodash")
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())
app.use(express.json())


const user = {
    name : "John",
    userId : 123
}
//Checking for JWT across requests
app.get('/login', (req, res) => {
    let token = jwt.sign(user, "JWT_KEY");
    res.cookie(`x-authorization`,token, {maxAge : 1000 * 10});
    // res.cookie(`Cookie token name`, token, {
    //     maxAge: 50000,
    //     secure: true,
    //     httpOnly: true,
    //     sameSite: 'lax'
    // });
    
    res.cookie("Cookie", token);
    res.send({token})
});

app.get('/myProfile', (req, res) => {
    let user = jwt.verify(req.cookies.Cookie,"JWT_KEY");
    res.send(_.pick(user, ['name']));

});



//Assign port dynamically based on env
app.listen(3000, () => console.log(`App is running at http://localhost:3000`));
console.clear()