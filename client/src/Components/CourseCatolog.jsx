// src/pages/CourseCatalog.jsx
import React from "react";
import { Link } from "react-router-dom";

const courses = [
  { id: 1, title: "JavaScript Basics", instructor: "John Doe", price: "$49" },
  {
    id: 2,
    title: "React Fundamentals",
    instructor: "Jane Smith",
    price: "$59",
  },
  {
    id: 3,
    title: "Node.js for Beginners",
    instructor: "Alex Brown",
    price: "$39",
  },
  // Add more courses here
];

const CourseCatalog = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Course Catalog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="text-gray-700">Instructor: {course.instructor}</p>
            <p className="text-green-500 font-bold">{course.price}</p>
            <Link
              to={`/courses/${course.id}`}
              className="inline-block mt-4 text-blue-500 hover:text-blue-700"
            >
              View Details
            </Link>
          </div>
        ))} 
      </div>
    </div>
  );
};

export default CourseCatalog;
