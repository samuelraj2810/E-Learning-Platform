const SubscriptionPlan = require("../models/SubscriptionPlan.model");

// Fetch all subscription plans
const getSubscriptionPlans = async (req, res) => {
  try {
    const plans = await SubscriptionPlan.find();
    res.status(200).json({ success: true, plans });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create a new subscription plan
const createSubscriptionPlan = async (req, res) => {
  try {
    const { name, price, duration, description, features } = req.body;
    const newPlan = new SubscriptionPlan({
      name,
      price,
      duration,
      description,
      features,
    });
    await newPlan.save();
    res
      .status(201)
      .json({
        success: true,
        message: "Plan created successfully",
        plan: newPlan,
      });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Subscribe a user to a plan
const subscribeToPlan = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming user ID is available via middleware
    const { planId } = req.params;

    // Logic to associate the user with the subscription plan
    // (Add your specific user subscription logic here)

    res
      .status(200)
      .json({ success: true, message: "Subscription activated successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};



module.exports = {
    getSubscriptionPlans,
    createSubscriptionPlan,
    subscribeToPlan
}