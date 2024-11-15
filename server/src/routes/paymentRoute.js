const express = require("express")
const paymentRouter = express.Router();
const { paymentGateWay, verifyRazorpay } = require('../controllers/paymentController');



paymentRouter.post("/payment", paymentGateWay);
paymentRouter.post("/verify", verifyRazorpay);



module.exports = paymentRouter;