const express = require('express');
const app = express();

const {mongoConnect} = require('./mongoose');
const mongo = new mongoConnect();
mongo.connStatus;

const router = require('./Routes/routes')
app.use(express.json());

app.post('/insertCust', router);
app.post('/insertProduct', router);
app.get('/assignCust/:prd/:cust', router);
app.get('/showProducts', router);
app.get('/assignProduct/:cust/:prd', router);
app.get('/showCustomers', router);

app.listen(4000, () => console.log("Express Server is running at 4000"));