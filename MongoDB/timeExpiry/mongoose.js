const mongo = require('mongoose')

const url = "mongodb://127.0.0.1/PersonalDB";

class mongoConnect {
    connect = mongo.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    connStatus = mongo.connection
        .once("open", () => console.log(`Connected to Mongoose at ${url}`))
        .on("error", error => {
            console.log(`Error Details ---> ${error}`);
        });
}
module.exports = {
    mongoConnect
}