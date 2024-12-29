import React, { useEffect, useMemo, useState } from "react";
import Filter from "./Filter";
import CourseCards from "./CourseCards";
import { GET } from "../../ApiFunction/ApiFunction";
import axios from "axios";

const Course = () => {

  const [coursedata, setCoursedata] = useState([]);
  const [filterText, setFilterText] = useState("");
  
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

  const filteredData = useMemo(() => {
    return coursedata.filter((course) =>
      course.courseName.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [coursedata, filterText]);
  
  return (
    <main className="h-[90vh] flex md:flex-row flex-col gap-2 items-start w-full relative bg-gray-50 md:overflow-hidden">
      <Filter onChange={(e)=>setFilterText(e.target.value)}/>
      <CourseCards coursedata={filteredData} />
    </main>
  );
};

export default Course;
