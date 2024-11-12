import React, { useState } from "react";

const CourseSection = ({ title, lectures, duration, media }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={toggleSection}
        className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-100 text-left"
      >
        <span className="font-semibold">{title}</span>
        <span className="text-gray-500">
          {lectures} • {duration} {isOpen ? "▲" : "▼"}
        </span>
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-50">
          {media ? (
            typeof media === "string" && media.includes(".mp4") ? (
              <video controls className="w-full h-64 mb-4">
                <source src={media} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={media}
                alt={title}
                className="w-full h-64 object-contain mb-4"
              />
            )
          ) : (
            <p className="text-sm text-gray-600">
              No media available for this section.
            </p>
          )}
          <p className="text-sm text-gray-600">
            Details about the {title} section...
          </p>
        </div>
      )}
    </div>
  );
};

export default CourseSection;
