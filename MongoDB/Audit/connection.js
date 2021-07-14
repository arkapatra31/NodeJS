const mongoose = require('mongoose');
const url = "mongodb://127.0.0.1/PersonalDB";

class connect{
    
    connect = mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
        });

    //Check status of connection
    connection = mongoose.connection
        .once("open", () => console.log("Connected To mongoDB"))
        .on("error", error => {
            console.log(`Error Details ---> ${errror}`);
        });
}

module.exports = {
    connect
}