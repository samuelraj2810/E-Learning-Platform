import React from "react";
import CourseSection from "./CourseSection";

const CourseLectures = ({ sections }) => {
  if (!sections || sections.length === 0) {
    return <div>No course content available.</div>;
  }

  return (
    <div className="border border-gray-300 rounded-md overflow-hidden">
      <div className="p-4 bg-gray-100 border-b border-gray-300 text-lg font-bold text-gray-800">
        Course Content
      </div>
      {sections.map((section, index) => (
        <CourseSection
          key={index}
          title={section.title}
          lectures={section.lectures}
          duration={section.duration}
          media={section.media}
        />
      ))}
    </div>
  );
};

export default CourseLectures;
