const { Router } = require("express");
const { userModel } = require("../Users/model");
const ISTTS = require("../services/fetchIST");
const router = Router();

router.post("/insertUser", async (req, res) => {
  let userData = new userModel({
    userID: req.body.userID,
    userName: req.body.userName,
    accountCreated: +new Date(ISTTS),
    accountExpiryDate: +new Date(ISTTS) + 30*24*60*60*1000,
  });
  let custResp = await userData.save();
  res.status(200).send(custResp);
});

module.exports = router;
