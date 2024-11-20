const express = require("express");
const paymentRouter = express.Router();
const paymentController = require("../controllers/paymentController");

// Create a new Razorpay order
paymentRouter.post("/create-order", paymentController.createOrder);

// Verify a Razorpay payment
paymentRouter.post("/verify-payment", paymentController.verifyPayment);

// Get payment details by payment ID
paymentRouter.get("/payment-details/:id", paymentController.getPaymentDetails);

module.exports = paymentRouter;
