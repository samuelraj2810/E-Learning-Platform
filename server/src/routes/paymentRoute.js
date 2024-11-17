const express = require("express");
const paymentrouter = express.Router();
const paymentController = require("../controllers/paymentController");

paymentrouter.post("/order", paymentController.createOrder);
paymentrouter.post("/verify", paymentController.verifyPayment);
paymentrouter.get("/details/:id", paymentController.getPaymentDetails); // Updated route

module.exports = paymentrouter;
