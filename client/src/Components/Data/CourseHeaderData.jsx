import BasicVideo from "../../Assets/CourseDetailsMedia/Basic-Sample-Video.mp4";
import Reactfundamental from "../../Assets/CourseCatalogMedia/pngwing.png";
import nodejs from "../../Assets/CourseCatalogMedia/image3.png";
import css from "../../Assets/CourseCatalogMedia/image4.png";
import API from "../../Assets/CourseCatalogMedia/image5.png";

const CourseHeaderData = [
  {
    id: 1,
    title: "JavaScript Basics",
    description:
      "Learn the fundamentals of JavaScript, from variables to loops.",
    instructor: "Srinivan",
    duration: "4 hours",
    price: 499,
    originalPrice: 599,
    mediaSrc: BasicVideo,
    paymentLink: "https://example.com/payment/js-basics",
  },
  {
    id: 2,
    title: "React Fundamentals",
    description: "Master the b5asics of React, including components and hooks.",
    instructor: "Jane Smith",
    duration: "6 hours",
    price: 499,
    originalPrice: 599,
    mediaSrc: Reactfundamental,
    paymentLink: "https://example.com/payment/react-fundamentals",
  },
  {
    id: 3,
    title: "Node.js for Beginners",
    description: "Get started with Node.js for backend development.",
    instructor: "Alex Brown",
    duration: "5 hours",
    price: 499,
    originalPrice: 599,
    mediaSrc: nodejs,
    paymentLink: "https://example.com/payment/nodejs-beginners",
  },
  {
    id: 4,
    title: "CSS for Beginners",
    description: "Learn how to style your website using CSS.",
    instructor: "Emily Davis",
    duration: "3 hours",
    price: 499,
    originalPrice: 599,
    mediaSrc: css,
    paymentLink: "https://example.com/payment/css-beginners",
  },
  {
    id: 5,
    title: "API Learning",
    description:
      "Understand how to work with APIs and integrate them into your apps.",
    instructor: "Michael Clark",
    duration: "4.5 hours",
    price: 499,
    originalPrice: 599,
    mediaSrc: API,
    paymentLink: "https://example.com/payment/api-learning",
  },
];

export default CourseHeaderData;
