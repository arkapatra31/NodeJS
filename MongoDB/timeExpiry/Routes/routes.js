const { Router } = require("express");
const { userModel } = require("../Users/model");
const fetchIST = require("../services/fetchIST");
const router = Router();

router.post("/insertUser", async (req, res) => {
  let userData = new userModel({
    userID: req.body.userID,
    userName: req.body.userName,
    accountCreated: +new Date(fetchIST()),
    accountExpiryDate: +new Date(fetchIST()) + 30*24*60*60*1000,
  });
  let custResp = await userData.save();
  res.status(200).send(custResp);
});

router.post("/checkExpiry", async(req, res) => {
  let data = await userModel.findOne({
    userName: req.body.userName
  }).then(({accountExpiryDate}) => ({accountExpiryDate}));
  let expDate = data.accountExpiryDate.toDateString();
  let currDate = fetchIST().toDateString();
  res.status(200).send(expDate === currDate ? {Error : 'Password Expired'} : {authenticated: true});
});

module.exports = router;
