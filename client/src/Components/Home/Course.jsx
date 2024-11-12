import React from "react";
import htmlphoto from "../../Assets/Images/html5-icon-12118.png"
import clogo from "../../Assets/Images/c logo.png";
import javalogo from "../../Assets/Images/Java-Logo.jpg";
import pythhologo from "../../Assets/Images/python.jpg";
import CarddComp from "./CarddComp";

function Course() {
  let CourseDetails = [
    {
      id: 1,
      image: javaScriptBaicsImage,
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
      image: Reactfundamental,
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
      image: nodejs,
      title: "Node.js",
      instructor: "Alex Brown",
      price: "₹499",
      category: "Backend Development",
      rating: 4.3,
      description: "Get started with Node.js for backend development.",
    },
    {
      id: 4,
      image: css,
      title: "CSS",
      instructor: "Emily Davis",
      price: "₹499",
      category: "Frontend Development",
      rating: 4.8,
      description: "Learn how to style your website using CSS.",
    },
  ];

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
      </div>
    </div>
  );
}

export default Course;
