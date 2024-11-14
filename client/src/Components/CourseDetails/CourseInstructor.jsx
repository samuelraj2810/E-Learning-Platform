import React from "react";
import { IoIosStar } from "react-icons/io";
import { MdReviews } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaPlayCircle } from "react-icons/fa";

const CourseInstructor = ({ instructor }) => {
  if (!instructor) {
    return <div>No instructor data available for this course.</div>;
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Instructor</h3>
      <div className="flex items-center space-x-4">
        <img
          src={instructor.image}
          alt={instructor.name}
          className="w-20 h-20 rounded-full"
        />
        <div>
          <div className="text-sm text-gray-800 flex items-center space-x-2">
            <IoIosStar />
            <span>{instructor.rating} Instructor Rating</span>
          </div>
          <div className="text-sm text-gray-800 mt-2 flex items-center space-x-2">
            <MdReviews />
            <span>{instructor.reviews.toLocaleString()} Reviews</span>
          </div>
          <div className="text-sm text-gray-800 mt-2 flex items-center space-x-2">
            <BsFillPeopleFill />
            <span>{instructor.students.toLocaleString()} Students</span>
          </div>
          <div className="text-sm text-gray-800 mt-2 flex items-center space-x-2">
            <FaPlayCircle />
            <span>{instructor.courses} Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInstructor;
