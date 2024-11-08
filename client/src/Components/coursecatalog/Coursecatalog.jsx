import React, { useState } from "react";
import { Link } from "react-router-dom";
import javaScriptBaicsImage from "../../Assets/CourseCatalog/image1.png";
import Reactfundamental from "../../Assets/CourseCatalog/pngwing.png";
import nodejs from "../../Assets/CourseCatalog/image3.png";
import css from "../../Assets/CourseCatalog/image4.png";
import API from "../../Assets/CourseCatalog/image5.png";

const courses = [
  { id: 1, image: javaScriptBaicsImage, title: "JavaScript Basics", instructor: "John Doe", price: "$49", category: "Programming", rating: 4.5 },
  { id: 2, image: Reactfundamental, title: "React Fundamentals", instructor: "Jane Smith", price: "$59", category: "Frontend Development", rating: 4.7 },
  { id: 3, image: nodejs, title: "Node.js for Beginners", instructor: "Alex Brown", price: "$39", category: "Backend Development", rating: 4.3 },
  { id: 4, image: css, title: "CSS for Beginners", instructor: "Emily Davis", price: "$29", category: "Frontend Development", rating: 4.8 },
  { id: 5, image: API, title: "API Learning", instructor: "Michael Clark", price: "$45", category: "Backend Development", rating: 4.6 },
];

const CourseCatalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [instructor, setInstructor] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [rating, setRating] = useState(0);

  // Filtering logic
  const filteredCourses = courses.filter(course => {
    return (
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category ? course.category === category : true) &&
      (instructor ? course.instructor === instructor : true) &&
      parseFloat(course.price.slice(1)) >= priceRange[0] &&
      parseFloat(course.price.slice(1)) <= priceRange[1] &&
      course.rating >= rating
    );
  });

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar for filtering */}
     
      <div className="md:w-1/4 p-6 bg-gray-50 border-r border-gray-200 h-screen sticky top-0 overflow-y-auto">
      <h2 className="text-2xl font-semibold mb-4">Filters</h2>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by course title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-3 border rounded-lg w-full mb-4 shadow-sm"
        />

        {/* Filter by Category */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-3 border rounded-lg w-full mb-4 shadow-sm"
        >
          <option value="">All Categories</option>
          <option value="Frontend Development">Frontend Development</option>
          <option value="Backend Development">Backend Development</option>
          <option value="Programming">Programming</option>
        </select>

        {/* Filter by Instructor */}
        <select
          value={instructor}
          onChange={(e) => setInstructor(e.target.value)}
          className="p-3 border rounded-lg w-full mb-4 shadow-sm"
        >
          <option value="">All Instructors</option>
          <option value="John Doe">John Doe</option>
          <option value="Jane Smith">Jane Smith</option>
          <option value="Alex Brown">Alex Brown</option>
          <option value="Emily Davis">Emily Davis</option>
          <option value="Michael Clark">Michael Clark</option>
        </select>

        {/* Filter by Price */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Price Range: {priceRange[0]} - {priceRange[1]}</label>
          <input
            type="range"
            min="0"
            max="100"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
            className="w-full accent-gray-500 mt-2"
          />
          <input
            type="range"
            min="0"
            max="100"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
            className="w-full accent-gray-500 mt-2"
          />
        </div>

        {/* Filter by Rating */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Minimum Rating:</label>
          <input
            type="number"
            min="0"
            max="5"
            step="0.1"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="p-3 border rounded-lg w-full shadow-sm"
          />
        </div>
      </div>

      {/* Main content area */}
      <div className="md:w-3/4 p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Course Catalog</h1>

        {/* Course Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredCourses.length > 0 ? (
            filteredCourses.map(course => (
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

export default CourseCatalog;
