const Razorpay = require("razorpay");
const crypto = require("crypto");
const Payment = require("../models/payment.model"); // Update the path as needed
const dotenv = require("dotenv");
dotenv.config();

// Initialize Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

// Create a Razorpay order
const createOrder = async (req, res) => {
  try {
    const { amount, courseId, userId } = req.body;

    // Validate required fields
    if (!amount || !courseId || !userId) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Amount, courseId, and userId are required.",
        });
    }

    // Create Razorpay order options
    const options = {
      amount: amount * 100, // Convert to smallest currency unit
      currency: "INR",
      receipt: `receipt_${userId}_${Date.now()}`,
    };

    // Create Razorpay order
    const order = await razorpay.orders.create(options);

    // Save the order details in the database
    const payment = new Payment({
      userId,
      courseId,
      razorpay_order_id: order.id,
      amount,
      currency: order.currency,
      receipt: options.receipt,
    });
    await payment.save();

    res.status(201).json({
      success: true,
      order,
      message: "Order created successfully.",
    });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// Verify Razorpay payment
const verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    // Validate required fields
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res
        .status(400)
        .json({ success: false, message: "All payment fields are required." });
    }

    // Generate signature and verify
    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid payment signature." });
    }

    // Update payment details in the database
    const payment = await Payment.findOneAndUpdate(
      { razorpay_order_id },
      {
        razorpay_payment_id,
        razorpay_signature,
        payment: true,
      },
      { new: true }
    );

    if (!payment) {
      return res
        .status(404)
        .json({ success: false, message: "Payment not found." });
    }

    res.status(200).json({
      success: true,
      message: "Payment verified successfully.",
      payment,
    });
  } catch (error) {
    console.error("Error verifying payment:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// Get payment details by ID
const getPaymentDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const payment = await Payment.findById(id);

    if (!payment) {
      return res
        .status(404)
        .json({ success: false, message: "Payment not found." });
    }

    res.status(200).json({
      success: true,
      payment,
    });
  } catch (error) {
    console.error("Error fetching payment details:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = {
  createOrder,
  verifyPayment,
  getPaymentDetails,
};
