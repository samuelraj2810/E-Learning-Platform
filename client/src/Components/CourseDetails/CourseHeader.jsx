import React from "react";
import { Link } from "react-router-dom";

const CourseHeader = ({
  title,
  description,
  instructor,
  duration,
  price,
  originalPrice,
  mediaSrc,
  
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">{title}</h1>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center mb-6">
        <span className="text-sm text-gray-600">Instructor: {instructor}</span>
        <span className="text-sm text-gray-600">Duration: {duration}</span>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          <span className="text-2xl font-semibold text-gray-800">
            ₹ {price}
          </span>
          <span className="text-sm text-gray-600 line-through">
            ₹ {originalPrice}
          </span>
        </div>
        <div>
          <Link to={"/payment"}>
            <button className="px-6 py-2 bg-Primary text-white rounded-full hover:bg-blue-700 transition">
              Buy Now
            </button>
          </Link>
        </div>
      </div>

      <div className="mt-6">
        <video controls className="w-full h-64 mb-4">
          <source src={mediaSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default CourseHeader;
  