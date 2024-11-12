// RequirementsDescription.jsx

import React from "react";

const RequirementsDescription = ({ requirementsData }) => {
  if (!requirementsData) {
    return <div>No requirements data available for this course.</div>;
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <section className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Requirements
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          {requirementsData.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Description
        </h2>
        {requirementsData.description.map((desc, index) => (
          <p key={index} className="text-gray-600 mb-4">
            {desc}
          </p>
        ))}
        <p className="text-gray-600 mb-4">
          This is what you get in this course:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {requirementsData.courseContent.map((content, index) => (
            <li key={index}>{content}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default RequirementsDescription;
