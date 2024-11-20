import React, { useEffect, useState } from "react";
import Filters from "./Filters";
import CourseCard from "./CourseCard";
import CourseCardData from "../Data/CourseCardData";

const CourseCatalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [instructor, setInstructor] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [ratingRange, setRatingRange] = useState([0, 5]);

  const filteredCourses = (CourseCardData || []).filter((course) => {
    return (
      (!searchTerm ||
        course.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (!category || course.category === category) &&
      (!instructor || course.instructor === instructor) &&
      course.price >= priceRange[0] &&
      course.price <= priceRange[1] &&
      course.rating >= ratingRange[0] &&
      course.rating <= ratingRange[1]
    );
  });

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="flex">
      {/* Filters Section */}
      <Filters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        category={category}
        setCategory={setCategory}
        instructor={instructor}
        setInstructor={setInstructor}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        ratingRange={ratingRange}
        setRatingRange={setRatingRange}
      />

      {/* Courses Section */}
      <div className="md:w-3/4 p-6 bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <p className="text-center text-gray-500">
              No courses found. Try adjusting your filters or search term.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCatalog;
