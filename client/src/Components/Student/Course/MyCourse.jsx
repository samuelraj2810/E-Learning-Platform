import React, { useEffect, useMemo, useState } from "react";
import CourseCards from "./CourseCards";
import { GET } from "../../ApiFunction/ApiFunction";

const MyCourse = ({}) => {
  const userId = sessionStorage.getItem("id");
    const [coursedata, setCoursedata] = useState([]);
    const [filterText, setFilterText] = useState([]);
  
    useEffect(() => {
      getData();
    }, []);

    useMemo(()=>{
      if(userId){
      const filteredData = coursedata.filter(course => course.boughtBy.includes(userId));
      setFilterText(filteredData)}
    },[userId])

    const getData = async () => {
      const result = await GET("http://localhost:3000/getallcourse");
      if (result) {
        setCoursedata(result.filter(course => course.boughtBy.includes(userId)));
      } else {
        setCoursedata([]);
      }
    };
    console.log(coursedata,"del");
  return (
    <div className="grid gap-4 p-2 md:p-4">
      <h1 className="lg:text-2xl text-base border-l-8 border-Primary pl-2 font-semibold text-PrimaryDark tracking-widest">
        My Course
      </h1>
      <div>
        <CourseCards coursedata={coursedata}/>
      </div>
    </div>
  );
};

export default MyCourse;
