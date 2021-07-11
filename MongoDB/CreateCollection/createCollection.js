const mongoose = require('mongoose');
const {userModel} = require('./Model')
const url = "mongodb://127.0.0.1/PersonalDB";

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Check status of connection
mongoose.connection
    .once("open", () => console.log("Connected"))
    .on("error", error => {
        console.log(`Error Details ---> ${errror}`);
    });

// Function call
userModel.insertMany([{
        name: 'Gourav',
        age: 20,
        userName: 'gourab20'
    },
    {
        name: 'Kartik',
        age: 21,
        userName: 'kartik21'
    },
    {
        name: 'Arka',
        age: 25,
        userName : 'arka31'
    }
]).then(function () {
    console.log("Data inserted") // Success
}).catch(function (error) {
    console.log(error) // Failure
});