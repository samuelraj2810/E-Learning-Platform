const mongoose = require("mongoose");

const SubscriptionPlanSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  duration: {
    type: String, // Limited to specific options
    enum: ["1 Month", "3 Months", "6 Months", "12 Months"], // Allowed values
    required: true,
  },
  description: {
    type: String,
  },
  features: [
    {
      type: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("SubscriptionPlan", SubscriptionPlanSchema);
