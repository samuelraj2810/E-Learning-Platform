import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import CourseCards from "./CourseCards";
import axios from "axios";

const Course = () => {
  const [coursedata, setCoursedata] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const token = sessionStorage.getItem("token");
    const result = await axios.get("http://localhost:3000/getinstcourse", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (result.data) {
      setCoursedata(result.data);
    } else {
      setCoursedata([]);
    }
  };
  console.log(coursedata)
  // const filter
  return (
    <main className="h-[90vh] flex md:flex-row flex-col gap-2 items-start w-full relative bg-gray-50 md:overflow-hidden">
      <Filter />
      <CourseCards coursedata={coursedata}/>
    </main>
  );
};

export default Course;
