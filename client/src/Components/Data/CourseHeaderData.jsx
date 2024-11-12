import BasicVideo from "../../Assets/CourseDetailsMedia/Basic-Sample-Video.mp4";
import Reactfundamental from "../../Assets/CourseDetailsMedia/Basic-Sample-Video.mp4";
import nodejs from "../../Assets/CourseDetailsMedia/Basic-Sample-Video.mp4";
import css from "../../Assets/CourseDetailsMedia/Basic-Sample-Video.mp4";
import API from "../../Assets/CourseDetailsMedia/Basic-Sample-Video.mp4";

const CourseHeaderData = [
  {
    id: 1,
    title: "JavaScript Basics",
    description:
      "Learn the fundamentals of JavaScript, from variables to loops.",
    instructor: "Srinivan",
    duration: "4 hours",
    price: 799,
    originalPrice: 3499,
    mediaSrc: BasicVideo
  },
  {
    id: 2,
    title: "React Fundamentals",
    description: "Master the b5asics of React, including components and hooks.",
    instructor: "Jane Smith",
    duration: "6 hours",
    price: 499,
    originalPrice: 2499,
    mediaSrc: Reactfundamental
  },
  {
    id: 3,
    title: "Node.js for Beginners",
    description: "Get started with Node.js for backend development.",
    instructor: "Alex Brown",
    duration: "5 hours",
    price: 649,
    originalPrice: 1999,
    mediaSrc: nodejs
  },
  {
    id: 4,
    title: "CSS for Beginners",
    description: "Learn how to style your website using CSS.",
    instructor: "Emily Davis",
    duration: "3 hours",
    price: 399,
    originalPrice: 2499,
    mediaSrc: css
  },
  {
    id: 5,
    title: "API Learning",
    description:
      "Understand how to work with APIs and integrate them into your apps.",
    instructor: "Michael Clark",
    duration: "4.5 hours",
    price: 799,
    originalPrice: 5999,
    mediaSrc: API
  },
];

export default CourseHeaderData;
