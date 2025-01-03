import React from "react";
import { useParams } from "react-router-dom";

const CoursePayment = () => {
  const { _id } = useParams();
  return (
    <div className="p-2">
      <h1>Course Payment</h1>
    </div>
  );
};

export default CoursePayment;
