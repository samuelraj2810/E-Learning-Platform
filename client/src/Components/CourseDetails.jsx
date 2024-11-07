// // src/pages/CourseDetails.jsx
// import React from "react";
// import { useParams } from "react-router-dom";

// const courses = [
//   {
//     id: 1,
//     title: "JavaScript Basics",
//     instructor: "John Doe",
//     price: "$49",
//     description: "Learn the fundamentals of JavaScript.",
//   },
//   {
//     id: 2,
//     title: "React Fundamentals",
//     instructor: "Jane Smith",
//     price: "$59",
//     description: "Dive into React development.",
//   },
//   {
//     id: 3,
//     title: "Node.js for Beginners",
//     instructor: "Alex Brown",
//     price: "$39",
//     description: "Get started with server-side JavaScript using Node.js.",
//   },
//   // Add more courses here
// ];

// const CourseDetails = () => {
//   const { courseId } = useParams();
//   const course = courses.find((c) => c.id === parseInt(courseId));

//   if (!course) {
//     return <p className="text-center text-red-500">Course not found!</p>;
//   }

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold text-center mb-8">{course.title}</h1>
//       <div className="bg-white shadow-md rounded-lg p-6">
//         <p className="text-gray-800 mb-4">
//           <strong>Instructor:</strong> {course.instructor}
//         </p>
//         <p className="text-gray-800 mb-4">
//           <strong>Price:</strong> {course.price}
//         </p>
//         <p className="text-gray-800 mb-4">
//           <strong>Description:</strong> {course.description}
//         </p>
//         <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
//           Enroll Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CourseDetails;
