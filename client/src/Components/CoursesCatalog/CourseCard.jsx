import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const fullStars = Math.floor(course.rating);
  const halfStar = course.rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(course.price);

  const FALLBACK_IMAGE = "/path/to/placeholder-image.jpg";

  return (
    <div className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-blue-50">
      <img
        src={course.image}
        alt={`Course cover for ${course.title} by ${course.instructor}`}
        className="w-full h-48 object-contain rounded-md mb-4"
        onError={(e) => {
          e.target.src = FALLBACK_IMAGE;
          e.target.alt = "Placeholder image";
        }}
      />
      <h2 className="text-xl font-semibold">{course.title}</h2>
      <p className="text-gray-700">Instructor: {course.instructor}</p>
      <p className="text-green-500 font-bold">{formattedPrice}</p>

      <div
        className="flex items-center mt-2"
        aria-label={`Rating: ${course.rating} out of 5`}
      >
        {[...Array(fullStars)].map((_, i) => (
          <span
            key={`full-${i}`}
            className="text-yellow-500"
            aria-hidden="true"
          >
            ⭐
          </span>
        ))}
        {halfStar === 1 && (
          <span className="text-yellow-500" aria-hidden="true">
            ⭐
          </span>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className="text-gray-300" aria-hidden="true">
            ⭐
          </span>
        ))}
      </div>

      <p className="mt-4 text-gray-700 line-clamp-3">
        {course.description.length > 100
          ? `${course.description.slice(0, 100)}...`
          : course.description}
      </p>

      <Link
        to={`/courses/${course.id}`}
        className="inline-block mt-4 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
      >
        View Details
      </Link>
    </div>
  );
};

export default CourseCard;
