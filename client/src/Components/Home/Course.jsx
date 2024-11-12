import React, { useState } from "react";
import { Link } from "react-router-dom";
import javaScriptBaicsImage from "../../Assets/CourseCatalog/Js.jpg";
import Reactfundamental from "../../Assets/CourseCatalog/React.jpg";
import nodejs from "../../Assets/CourseCatalog/Node.jpg";
import css from "../../Assets/CourseCatalog/css.jpg";

const courses = [
  { id: 1, image:"" , title: "JavaScript Basics", instructor: "John Doe", price: "$49", category: "Programming", rating: 4.5 },
  { id: 2, image:"" ,title: "React Fundamentals", instructor: "Jane Smith", price: "$59", category: "Frontend Development", rating: 4.7 },
  { id: 3,image:"" , title: "Node.js for Beginners", instructor: "Alex Brown", price: "$39", category: "Backend Development", rating: 4.3 },
  { id: 4,image:"" ,title: "CSS for Beginners", instructor: "Emily Davis", price: "$29", category: "Frontend Development", rating: 4.8 }
]

const Course = () => {

  return (
    <div className="w-[90%] mx-auto ">

      {/* Main content area */}
      <div className="md:w-full p-6 ">
        <h1 className="text-3xl font-bold mb-8">Course Catalog</h1>

        {/* Course Cards */}
        <div className=" p-14 flex flex-wrap justify-evenly ">
          {courses.length > 0 ? (
            courses.map(course => (
              <div
                key={course.id}
                className="bg-white flex-col w-[350px] shadow-md rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-blue-50"
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
