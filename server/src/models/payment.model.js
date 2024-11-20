const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const paymentSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: uuidv4, // Ensures a unique identifier for each document
    },
    userId: {
      type: String,
      required: true, // Marked as required to ensure user association
    },
    courseId: {
      type: String,
      required: true, // Added to associate payment with a specific course
    },
    razorpay_order_id: {
      type: String,
      required: true,
    },
    razorpay_payment_id: {
      type: String,
    },
    razorpay_signature: {
      type: String,
    },
    amount: {
      type: Number,
      required: true, // Ensures amount is explicitly provided
    },
    payment: {
      type: Boolean,
      default: false,
    },
    currency: {
      type: String,
      default: "INR",
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
