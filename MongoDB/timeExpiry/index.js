const express = require('express');
const app = express();

const {mongoConnect} = require('./mongoose');
const mongo = new mongoConnect();
mongo.connStatus;

const router = require('./Routes/routes')
app.use(express.json());

app.post('/insertUser', router);
app.post('/checkExpiry', router);

app.listen(4000, () => console.log("Express Server is running at 4000"));