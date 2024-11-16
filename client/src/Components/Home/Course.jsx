import React, { useState } from "react";
import { Link } from "react-router-dom";
import js from "../../Assets/CourseCatalog/Js.jpg";
import Reactfundamental from "../../Assets/CourseCatalog/React.jpg";
import nodejs from "../../Assets/CourseCatalog/Node.jpg";
import css from "../../Assets/CourseCatalog/css.jpg";

function Course() {
  let CourseDetails = [
    {
      id: 1,
      image: htmlphoto,
      title: "JavaScript",
      instructor: "John Doe",
      price: "₹499",
      category: "Programming",
      rating: 4.5,
      description:
        "Learn the fundamentals of JavaScript, from variables to loops.",
    },
    {
      id: 2,
      image: clogo,
      title: "React",
      instructor: "Jane Smith",
      price: "₹499",
      category: "Frontend Development",
      rating: 4.7,
      description:
        "Master the basics of React, including components and hooks.",
    },
    {
      id: 3,
      image: javalogo,
      title: "Node.js",
      instructor: "Alex Brown",
      price: "₹499",
      category: "Backend Development",
      rating: 4.3,
      description: "Get started with Node.js for backend development.",
    },
    {
      id: 4,
      image: pythhologo,
      title: "CSS",
      instructor: "Emily Davis",
      price: "₹499",
      category: "Frontend Development",
      rating: 4.8,
      description: "Learn how to style your website using CSS.",
    },
  ];
const courses = [
  {
    id: 1,
    image: js,
    title: "JavaScript Basics",
    instructor: "John Doe",
    price: "$49",
    category: "Programming",
    rating: 4.5,
  },
  {
    id: 2,
    image: Reactfundamental,
    title: "React Fundamentals",
    instructor: "Jane Smith",
    price: "$59",
    category: "Frontend Development",
    rating: 4.7,
  },
  {
    id: 3,
    image: nodejs,
    title: "Node.js for Beginners",
    instructor: "Alex Brown",
    price: "$39",
    category: "Backend Development",
    rating: 4.3,
  },
  {
    id: 4,
    image: css,
    title: "CSS for Beginners",
    instructor: "Emily Davis",
    price: "$29",
    category: "Frontend Development",
    rating: 4.8,
  },
];

const Course = () => {
  return (
    <div className="w-[90%] mx-auto mb-10 flex flex-col gap-5 md:gap-14 ">
      <h1 className="text-2xl font-semibold md:text-3xl relative z-10 "><span className="text-white">Popular</span> Courses</h1>
      <div className="h-10 w-[120px] rounded-tr-lg absolute rotate-12 -z-1 bg-Primary"/>
      <div className="flex flex-row flex-wrap justify-evenly w-full mx-auto ">
        {CourseDetails.length >= 1 ? (
          CourseDetails.map((value, index) => (
            <CarddComp
              index={index}
              image={value.image}
              courseName={value.title}
              instructorName={value.instructor}
              price={value.price}
              rating={value.rating}
            />
          ))
        ) : (
          <>
            <h1>data not found</h1>
          </>
        )}
    <div className="w-[90%] mx-auto ">
      <div className="md:w-full p-6 ">
        <h1 className=" text-2xl md:text-3xl font-semibold mb-8 relative ">
          <span className="text-white relative z-10 ">Course</span>Catalog
          <div className="h-10 w-[110px] rounded-tr-lg absolute top-0 rotate-12 z-1 bg-Primary" />
        </h1>

        <div className=" p-14 flex flex-wrap justify-evenly ">
          {courses.length > 0 ? (
            courses.map((course) => (
              <div
                key={course.id}
                className="bg-white flex-col w-[350px] shadow-md rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-blue-50"
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
