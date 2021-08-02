const express = require('express');
const {
    mongoConnect
} = require('./mongo/connect');
const mongo = new mongoConnect();
require('dotenv').config();
const app = express();
const { router } = require('./routes')

app.use(express.json());

app.get('/', router);

app.post('/getmfaBarcode', router);

app.post('/login', router);

app.post('/insertBulk', router);

app.listen(process.env.PORT_NUMBER, () => console.log(`Express Server running at ${process.env.EXPRESS_URL}`));
mongo.connStatus;