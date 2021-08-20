const { Router } = require('express');
const { custModel } = require('../CustomerModel/model');
const { productModel } = require('../ProductModel/model');

const router = Router();

router.post('/insertCust', async(req,res) => {
    let custData = new custModel({
        custID: req.body.custID,
        custName: req.body.custName
    })
    let custResp = await custData.save();
    res.status(200).send(custResp);
});

router.post('/insertProduct', async(req,res) => {
    let prdData = new productModel({
        productID: req.body.productID,
        productName: req.body.productName,
        productPrice: req.body.productPrice
    })
    await prdData.save();
    let prdResp = await prdData.save();
    res.status(200).send(prdResp);
});

router.get('/assignCust/:prd/:cust', async(req,res) => {
    const product = await productModel.findById(req.params.prd);
    product.customer = req.params.cust;
    product.save();
    res.status(200).send(product);
});

router.get('/assignProduct/:cust/:prd', async(req,res) => {
    const cust = await custModel.findById(req.params.cust);
    cust.product = req.params.prd;
    cust.save();
    res.status(200).send(cust);
});

router.get('/showProducts', async(req,res) => {
    const products = await productModel.find({}).populate({path: 'customer', model: 'C_CUSTS'});
    res.status(200).send(products)
});

router.get('/showCustomers', async(req,res) => {
    const customers = await custModel.find({}).populate({path: 'product', model: 'C_PRODUCTS'});
    res.status(200).send(customers)
});

module.exports = router;
