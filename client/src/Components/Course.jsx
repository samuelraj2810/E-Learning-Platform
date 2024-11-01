import React from "react";
import htmlphoto from "../Assets/html5-icon-12118.png";
import clogo from "../Assets/c logo.png";
import javalogo from "../Assets/Java-Logo.jpg";
import pythhologo from "../Assets/python.jpg";
import CarddComp from "./CarddComp";

function Course() {
  let CourseDetails = [
    {
      courseName: "Html",
      instructorName: "Antony",
      duration: "10:00:00",
      rating: 4.5,
      image: htmlphoto,
    },
    {
      courseName: "Python",
      instructorName: "kalidas",
      duration: "9:53:06",
      rating: 4.5,
      image: pythhologo,
    },
    {
      courseName: "Java",
      instructorName: "Sathish",
      duration: "11:21:24",
      rating: 4.5,
      image: javalogo,
    },
    {
      courseName: "C Programming",
      instructorName: "Sudeep",
      duration: "7:32:43",
      rating: 4.5,
      image: clogo,
    },
  ];

  return (
    <div className="w-[90%] mx-auto mb-10 flex flex-col gap-5 md:gap-14 ">
      <h1 className="text-2xl font-semibold md:text-3xl">Popular Courses</h1>
      <div className="flex flex-row flex-wrap gap-10 justify-center md:gap-[90px] mx-auto ">
        {CourseDetails.length >= 1 ? (
          CourseDetails.map((value, index) => (
            <CarddComp
              index={index}
              image={value.image}
              courseName={value.courseName}
              instructorName={value.instructorName}
              duration={value.duration}
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
