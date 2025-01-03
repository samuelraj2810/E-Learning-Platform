import React from "react";
import { useLocation, useParams } from "react-router-dom";

const CoursePayment = () => {
  const { _id } = useParams();
  const location = useLocation();
  const data = location.state || ""
  console.log(data)
  return (
    <div className="p-2">
      <h1>Course Payment</h1>
    </div>
  );
};

export default CoursePayment;
