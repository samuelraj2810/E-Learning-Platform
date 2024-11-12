import javaScriptBaicsImage from "../../Assets/CourseCatalogMedia/image1.png";
import Reactfundamental from "../../Assets/CourseCatalogMedia/pngwing.png";
import nodejs from "../../Assets/CourseCatalogMedia/image3.png";
import css from "../../Assets/CourseCatalogMedia/image4.png";
import API from "../../Assets/CourseCatalogMedia/image5.png";
const CourseCardData = [
  {
    id: 1,
    image: javaScriptBaicsImage,
    title: "JavaScript Basics",
    instructor: "Srinivan",
    price: 499,
    category: "Programming",
    rating: 4.5,
    description:
      "Learn the fundamentals of JavaScript, from variables to loops.",
  },
  {
    id: 2,
    image: Reactfundamental,
    title: "React Fundamentals",
    instructor: "Jane Smith",
    price: 499,
    category: "Frontend Development",
    rating: 4.7,
    description: "Master the basics of React, including components and hooks.",
  },
  {
    id: 3,
    image: nodejs,
    title: "Node.js for Beginners",
    instructor: "Alex Brown",
    price: 499,
    category: "Backend Development",
    rating: 4.3,
    description: "Get started with Node.js for backend development.",
  },
  {
    id: 4,
    image: css,
    title: "CSS for Beginners",
    instructor: "Emily Davis",
    price: 499,
    category: "Frontend Development",
    rating: 4.8,
    description: "Learn how to style your website using CSS.",
  },
  {
    id: 5,
    image: API,
    title: "API Learning",
    instructor: "Michael Clark",
    price: 499,
    category: "Backend Development",
    rating: 4.6,
    description:
      "Understand how to work with APIs and integrate them into your apps.",
  },
];

export default CourseCardData;
