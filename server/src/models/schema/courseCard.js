const mongoose = require("mongoose");
const { v4 } = require("uuid");

// Define the course schema
const courseSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: v4, // Generates a unique ID for each course
    },
    title: {
      type: String,
      required: true, // Title of the course
    },
    description: {
      type: String,
      required: true, // A brief description of the course
    },
    image: {
      type: String,
      required: true, // Path to the course image (URL)
      default: "/path/to/placeholder-image.jpg", // Fallback image if no image is provided
    },
    instructor: {
      type: String,
      required: true, // Name of the instructor
    },
    price: {
      type: Number,
      required: true, // Course price (in INR)
    },
    rating: {
      type: Number,
      required: true, // Rating of the course (out of 5)
      min: 0,
      max: 5,
    },
  },
  { timestamps: true }
);

// Create a model based on the schema
const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
