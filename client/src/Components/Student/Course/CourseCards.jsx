import React, { useEffect, useState } from "react";
import { GET } from "../../ApiFunction/ApiFunction";
import axios from "axios";

const CourseCards = () => {
  const [coursedata, setCoursedata] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const token = sessionStorage.getItem("token");
    const result = await GET("http://localhost:3000/getallcourse", token);
    if (result) {
      setCoursedata(result);
    } else {
      setCoursedata([]);
    }
  };
  console.log(coursedata);

  return (
    <div className="h-fit w-full p-2 lg:pt-4 grid gap-2 lg:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {coursedata.length > 0 && (
        coursedata?.map((v,i)=>
        <div className="border rounded-lg p-4 max-h-48 min-h-48 lg:max-h-72 lg:min-h-80 hover:shadow-md transition-all duration-500 bg-white grid gap-2">
          <p className="break-normal font-bold tracking-widest border text-gray-600">{v.courseName.trim()}</p>
          <div className="border bg-gray-50"></div>
        </div>
        )
      )}
    </div>
  );
};

export default CourseCards;
