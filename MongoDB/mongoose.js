const mongo = require('mongoose')
const myModel = require('./model')

const url = "mongodb://127.0.0.1/PersonalDB";

mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongo.connection
    .once("open", () => console.log("Connected"))
    .on("error", error => {
        console.log(`Error Details ---> ${errror}`);
    });


async function fetchData() {
    const data = await myModel.find({});
    console.log(data);
}
fetchData()