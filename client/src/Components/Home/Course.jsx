import React, { useState } from "react";
import { Link } from "react-router-dom";
// import javaScriptBaicsImage from "../../Assets/CourseCatalog/image1.png";
// import Reactfundamental from "../../Assets/CourseCatalog/pngwing.png";
// import nodejs from "../../Assets/CourseCatalog/image3.png";
// import css from "../../Assets/CourseCatalog/image4.png";
// import API from "../../Assets/CourseCatalog/image5.png";

const courses = [
  { id: 1,  title: "JavaScript Basics", instructor: "John Doe", price: "$49", category: "Programming", rating: 4.5 },
  { id: 2,  title: "React Fundamentals", instructor: "Jane Smith", price: "$59", category: "Frontend Development", rating: 4.7 },
  { id: 3,  title: "Node.js for Beginners", instructor: "Alex Brown", price: "$39", category: "Backend Development", rating: 4.3 },
  { id: 4, title: "CSS for Beginners", instructor: "Emily Davis", price: "$29", category: "Frontend Development", rating: 4.8 },
  { id: 5, title: "API Learning", instructor: "Michael Clark", price: "$45", category: "Backend Development", rating: 4.6 },
]

const Course = () => {

  return (
    <div className="w-[90%] mx-auto ">

      {/* Main content area */}
      <div className="md:w-full p-6 ">
        <h1 className="text-3xl font-bold mb-8">Course Catalog</h1>

        {/* Course Cards */}
        <div className=" p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.length > 0 ? (
            courses.map(course => (
              <div
                key={course.id}
                className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-blue-50"
              >
                {/* Image section */}
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-semibold">{course.title}</h2>
                <p className="text-gray-700">Instructor: {course.instructor}</p>
                <p className="text-green-500 font-bold">{course.price}</p>
                <p className="text-yellow-500 font-semibold">Rating: {course.rating} ⭐</p>
                <Link
                  to={`/courses/${course.id}`}
                  className="inline-block mt-4 text-blue-500"
                >
                  View Details
                </Link>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">No courses found based on your filters.</p>
          )}
        </div>
        </div>
      </div>
  );
};

export default Course;
