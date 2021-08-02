require('dotenv').config();
const express = require('express');
const router = express.Router();
const { authenticator } = require('otplib');
const qrcode = require('qrcode');
const { SHA256 } = require('crypto-js');
const { insertBulk, fetchUser } = require('./mongo/services/mongoServices');


//Declaring Routers
router.get('/', (req, res) => {
    res.status(200).send("Welcome to Login Server");
});

router.post('/login', async (req, res) => {
    try {
        let email = req.body.email;
        let password = SHA256(req.body.password).toString();
        let respData = await fetchUser(email, password);
        //check for mfaLogin flag
        if (!respData.mfaEnabled) res.status(200).send(respData);
        else {
            
            let secretKey = process.env.AUTHENTICATION_SECRET_KEY;

            if(req.body.token === undefined || req.body.token == null || req.body.token ==='')
                res.status(403).send({Error : "AuthToken is missing"});
            else{
                let isValidToken = authenticator.check(req.body.token, secretKey);
                isValidToken ? res.status(200).send({ 
                    ...respData,
                    tokenExpiryTime : authenticator.timeRemaining()
                 })
                 : res.status(403).send({Error: "Login Failed Due to Invalid Token"});
            }
        }
    } catch (err) {
        res.status(500).send({
            Error: "Unable to fetch Data"
        });
    }
});

router.post('/getmfaBarcode', async(req, res) => {
    let user = process.env.AUTH_USER;
    let service = process.env.AUTH_SERVICE;
    let secretKey = process.env.AUTHENTICATION_SECRET_KEY;
    
    let authToken = authenticator.generate(secretKey);
    const otpauth = authenticator.keyuri(user, service, secretKey);

    qrcode.toDataURL(otpauth, (err, imageUrl) => {
        if (err) {
          res.status(500).send({Error : "Unable to generate token/barcode"});
        }
        res.status(200).send({
            AUTH_TOKEN : authToken,
            barCodeURI : imageUrl
        });
      })
});

router.post('/insertBulk', async (req, res) => {
    const reqData = req.body;
    let inpData = reqData.map((data) => {
        return {
            ...data,
            password: SHA256(data.password),
        }
    });
    let respData = await insertBulk(inpData);
    res.status(200).send(respData);
});

module.exports = {
    router
};