require('dotenv').config();
const mongoose = require('mongoose');
const url = process.env.MONGO_URL;

class mongoConnect {
    connect = mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true
    });

    connStatus = mongoose.connection
        .once("open", () => console.log(`Connected to Mongoose at ${url}`))
        .on("error", error => {
            console.log(`Error Details ---> ${error}`);
        });
}
module.exports = {
    mongoConnect
}