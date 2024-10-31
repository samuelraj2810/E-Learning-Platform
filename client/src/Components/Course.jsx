import React from "react";
import htmlphoto from "../Assets/html5-icon-12118.png";
import clogo from "../Assets/c logo.png";
import javalogo from "../Assets/Java-Logo.jpg";
import pythhologo from "../Assets/python.jpg"

function Course() {
  let CourseDetails = [
    {
      courseName: "Html",
      instructorName: "Antony",
      duration: "10:00:00",
      rating: 4.5,
      image:htmlphoto
    },
    {
      courseName: "Python",
      instructorName: "kalidas",
      duration: "9:53:06",
      rating: 4.5,
      image:pythhologo
    },
    {
      courseName: "Java",
      instructorName: "Sathish",
      duration: "11:21:24",
      rating: 4.5,
      image:javalogo
    },
    {
      courseName: "C Programming",
      instructorName: "Sudeep",
      duration: "7:32:43",
      rating: 4.5,
      image:clogo
    },
  ];


  return (
    <div className="w-[90%] m-auto mb-10 flex flex-col gap-5 md:gap-14 ">
      <h1 className="text-2xl font-semibold md:text-[26px] md:text-3xl">Popular Courses</h1>
      <div className="grid grid-col-1 gap-10 md:grid-cols-4 md:gap-28 mx-auto ">
        {CourseDetails.length >= 1 ? (
          CourseDetails.map((value, index) => (
            <div
              key={index}
              className="p-2 text-sm border shadow-lg rounded-lg md:text-base"
            >
              <div>
                <div className="w-56 h-36 mb-4 rounded-md md:mb-6 md:w-[250px] md:h-[170px] border">
                  <img src={value.image} className=" w-full h-full rounded-md"></img>
                </div>
                <h1>
                  Course :{" "}
                  <span className="font-light">{value.courseName}</span>
                </h1>
                <h1>
                  Instructor :{" "}
                  <span className="font-light">{value.instructorName}</span>
                </h1>
                <h1>
                  Duration :{" "}
                  <span className="font-light">{value.duration}</span>
                </h1>
                <h1>
                  Rating : <span className="font-light">{value.rating}</span>
                </h1>
              </div>
            </div>
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
