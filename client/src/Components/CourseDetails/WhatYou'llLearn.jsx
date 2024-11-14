import React from "react";

const WhatYoullLearn = ({ points }) => {
  if (!points || points.length === 0) {
    return <div>No learning points available for this course.</div>;
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        What You'll Learn
      </h2>
      <ul className="list-disc list-inside space-y-2 text-gray-600">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default WhatYoullLearn;
