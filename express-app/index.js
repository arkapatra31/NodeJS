const express = require("express")
const joi = require("joi")
const _  = require("lodash")
const courses = require('./routes/courses')

const app = express()

const jwt = require('jsonwebtoken')

app.use(express.json())

//using express static
app.use(express.static('public'))

//Use the router for the specified path
app.use('/api/courses', courses)

app.get('/',(req,res) => {
    res.send("This is index page")
})

//Assign port dynamically based on env
const port = process.env.PORT || 3000
app.listen(3000, () => console.log(`App is running at http://localhost:${port}`));
console.clear()