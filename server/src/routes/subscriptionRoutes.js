const express = require("express");
const router = express.Router();
const {
  getSubscriptionPlans,
  createSubscriptionPlan,
  subscribeToPlan,
} = require("../controllers/SubscriptionPlan.controller");
const authMiddleware = require("../middleware/authMiddleware"); // Middleware for user authentication

// Route to fetch all plans
router.get("/plans/list", getSubscriptionPlans);

// Route to create a new plan (Admin-only route, protected with auth middleware)
router.post("/plans/create", authMiddleware, createSubscriptionPlan);

// Route to subscribe to a plan
router.post("/plans/subscribe/:planId", authMiddleware, subscribeToPlan);

module.exports = router;
