import React, { useState } from "react";
import { Link } from "react-router-dom";
import javaScriptBaicsImage from "../../Assets/CourseCatalogMedia/image1.png"
import Reactfundamental from "../../Assets/CourseCatalogMedia/pngwing.png";
import nodejs from "../../Assets/CourseCatalogMedia/image3.png";
import css from "../../Assets/CourseCatalogMedia/image4.png";

const courses = [
  {
    id: 1,
    image: javaScriptBaicsImage,
    title: "JavaScript Basics",
    instructor: "Srinivan",
    price: 799,
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
    price: 649,
    category: "Backend Development",
    rating: 4.3,
    description: "Get started with Node.js for backend development.",
  },
  {
    id: 4,
    image: css,
    title: "CSS for Beginners",
    instructor: "Emily Davis",
    price: 399,
    category: "Frontend Development",
    rating: 4.8,
    description: "Learn how to style your website using CSS.",
  }
];

const Course = () => {
  return (
    <div className="w-[90%] mx-auto ">
      <div className="md:w-full p-6 ">
        <h1 className=" text-2xl md:text-3xl font-semibold mb-8 relative ">
          Popular Courses
        </h1>

        <div className="flex flex-wrap justify-evenly gap-5">
          {courses.length > 0 ? (
            courses.map((course) => (
              <div
                key={course.id}
                className="bg-white flex-col md:w-[280px] shadow-md rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-blue-50"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-contain rounded-md mb-4"
                />
                <h2 className="text-xl font-semibold">{course.title}</h2>
                <p className="text-gray-700">Instructor: {course.instructor}</p>
                <p className="text-green-500 font-bold">{course.price}</p>
                <p className="text-yellow-500 font-semibold">
                  Rating: {course.rating} ⭐
                </p>
                <Link
                  to={`/courses/${course.id}`}
                  className="inline-block mt-4 text-blue-500"
                >
                  View Details
                </Link>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              No courses found based on your filters.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Course;
