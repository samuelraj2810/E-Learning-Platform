// src/components/Data/CourseLecturesData.jsx

import introPhoto from "../../Assets/CourseDetailsMedia/Box.png";
import BasicSampleVideo from "../../Assets/CourseDetailsMedia/Basic-Sample-Video.mp4";
import advancedVideo from "../../Assets/CourseDetailsMedia/Basic-Sample-Video.mp4";
import setupImage from "../../Assets/CourseDetailsMedia/Basic-Sample-Video.mp4";
import cssIntroVideo from "../../Assets/CourseDetailsMedia/Basic-Sample-Video.mp4";
import jsImage from "../../Assets/CourseDetailsMedia/Basic-Sample-Video.mp4";

const CourseLecturesData = [
  // Course 1
  {
    id: 1,
    courseTitle: "JavaScript Basics",
    sections: [
      {
        title: "Introduction",
        lectures: "8 lectures",
        duration: "9min",
        media: introPhoto,
      },
      {
        title: "Setting up the Environment",
        lectures: "3 lectures",
        duration: "6min",
        media: null,
      },
      {
        title: "Basic Video Example",
        lectures: "5 lectures",
        duration: "15min",
        media: BasicSampleVideo,
      },
    ],
  },

  // Course 2
  {
    id: 2,
    courseTitle: "React Fundamentals",
    sections: [
      {
        title: "Getting Started with React",
        lectures: "6 lectures",
        duration: "12min",
        media: jsImage,
      },
      {
        title: "Understanding Components",
        lectures: "4 lectures",
        duration: "10min",
        media: null,
      },
      {
        title: "State Management",
        lectures: "7 lectures",
        duration: "20min",
        media: advancedVideo,
      },
    ],
  },

  // Course 3
  {
    id: 3,
    courseTitle: "Node.js for Beginners",
    sections: [
      {
        title: "Introduction to Node.js",
        lectures: "5 lectures",
        duration: "10min",
        media: introPhoto,
      },
      {
        title: "Setting up Node.js Environment",
        lectures: "3 lectures",
        duration: "8min",
        media: setupImage,
      },
      {
        title: "Creating Your First API",
        lectures: "6 lectures",
        duration: "15min",
        media: BasicSampleVideo,
      },
    ],
  },

  // Course 4
  {
    id: 4,
    courseTitle: "CSS for Beginners",
    sections: [
      {
        title: "CSS Basics",
        lectures: "7 lectures",
        duration: "12min",
        media: introPhoto,
      },
      {
        title: "Flexbox Layout",
        lectures: "5 lectures",
        duration: "10min",
        media: cssIntroVideo,
      },
      {
        title: "Responsive Design with CSS",
        lectures: "6 lectures",
        duration: "18min",
        media: null,
      },
    ],
  },

  // Course 5
  {
    id: 5,
    courseTitle: "API Learning",
    sections: [
      {
        title: "Understanding APIs",
        lectures: "5 lectures",
        duration: "10min",
        media: introPhoto,
      },
      {
        title: "Fetching Data from an API",
        lectures: "4 lectures",
        duration: "8min",
        media: setupImage,
      },
      {
        title: "Handling API Responses",
        lectures: "6 lectures",
        duration: "15min",
        media: BasicSampleVideo,
      },
    ],
  },
];

export default CourseLecturesData;
