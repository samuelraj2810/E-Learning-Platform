import React, { useState, useEffect } from "react";

const LearningPage = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/learning")
      .then((res) => res.json())
      .then((data) => setResources(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold">Learning Resources</h2>
      {resources.map((resource) => (
        <div
          key={resource._id}
          className="mt-4 bg-white p-4 rounded-lg shadow-md"
        >
          <h3 className="text-xl">{resource.title}</h3>
          <a
            href={resource.url}
            className="text-blue-500 hover:text-blue-700 mt-2 block"
          >
            Access Resource
          </a>
        </div>
      ))}
    </div>
  );
};

export default LearningPage;
