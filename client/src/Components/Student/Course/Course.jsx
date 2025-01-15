import React, { useEffect, useMemo, useState } from "react";
import Filter from "./Filter";
import CourseCards from "./CourseCards";
import { GET } from "../../ApiFunction/ApiFunction";

const Course = () => {
  const [coursedata, setCoursedata] = useState([]);
  const [filterText, setFilterText] = useState({
    title: "",
    price: "",
    rate: "",
  });

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
    return coursedata.filter((course) => {
      const matchesTitle = course.courseName
        .toLowerCase()
        .includes(filterText.title.toLowerCase());

      let matchesPrice = true;
      switch (filterText.price) {
        case 0:
          matchesPrice = course.price >= 0 && course.price < 800;
          break;
        case 1:
          matchesPrice = course.price >= 800 && course.price <= 1000;
          break;
        case 2:
          matchesPrice = course.price > 1000;
          break;
        case 3:
          matchesPrice = course.price === 0;
          break;
        default:
          matchesPrice = true;
      }

      let matchesRating = true;
      switch (filterText.rate) {
        case 4:
          matchesRating = parseInt(course.rating) <= 4;
          break;
        case 5:
          matchesRating = parseInt(course.rating) > 4;
          break;
        default:
          matchesRating = true;
      }

      return matchesTitle && matchesPrice && matchesRating;
    });
  }, [coursedata, filterText]);

  return (
    <main className="h-[90vh] md:h-fit flex md:flex-row flex-col gap-2 items-start w-full relative bg-gray-50 ">
      <Filter
        setTitle={(e) =>
          setFilterText((prev) => ({ ...prev, title: e.target.value }))
        }
        setPrice={(e) => setFilterText((prev) => ({ ...prev, price: e }))}
        setRate={(e) => setFilterText((prev) => ({ ...prev, rate: e }))}
      />
      <CourseCards coursedata={filteredData} />
      {}
    </main>
  );
};

export default Course;
