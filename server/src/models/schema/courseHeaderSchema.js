const mongoose = require("mongoose");

// Course Schema
const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    instructor: {
      type: String,
      required: true,
    },
    duration: {
      type: String, // e.g., "4 weeks", "10 hours"
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    originalPrice: {
      type: Number,
      required: true,
    },
    mediaSrc: {
      type: String, // URL for the course video or media file
      required: true,
    },
    // Optional fields
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model (if you need to link it to a specific user)
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Create the Course model
const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
