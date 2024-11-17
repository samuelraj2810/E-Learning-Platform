
const mongoose = require("mongoose");
const { v4 } = require("uuid");

const paymentSchema = new mongoose.Schema({
    id: {
        type: String,
        default: v4,
      },
    userId: {
        type: String,
      },
    razorpay_order_id: {
        type: String,
        required: true,
      },
    razorpay_payment_id: {
        type: String,
        required: true,
      },
    razorpay_signature: {
        type: String,
        required: true,
      },
    amount: {
        type: Number,
        default:799
      },
    payment: {
        type: Boolean,
        default: false,
      },
    date: {
        type: Date,
        default: Date.now
      },
    currency: {
        type: String,
        default: "INR",
      },
},
{ timestamps: true }
);

const payment = mongoose.model("Payment",paymentSchema);

module.exports = payment;