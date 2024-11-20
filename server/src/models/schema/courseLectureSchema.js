const mongoose = require("mongoose");

// Lecture Schema for storing individual lecture details
const lectureSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    media: {
      type: String, // URL to the video or other media associated with the lecture
      required: true,
    },
    duration: {
      type: String, // Duration of the lecture (e.g., "10 mins", "30 mins")
      required: true,
    },
  },
  { timestamps: true }
);

// Section Schema for storing sections with lectures
const sectionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    lectures: [lectureSchema], // Array of lectures belonging to this section
    duration: {
      type: String, // Total duration of the section (e.g., "1 hour")
      required: true,
    },
    media: {
      type: String, // Media URL for the entire section (could be an introductory video, etc.)
      required: true,
    },
  },
  { timestamps: true }
);

// Course Schema (if needed to store course-related data)
const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    sections: [sectionSchema], // Array of sections in the course
  },
  { timestamps: true }
);

// Create the Course model
const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
