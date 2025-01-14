import React, { useEffect, useState } from "react";
import CustomButton from "../Common/CustomButton";
import CustomDonut from "../Common/CustomDonut";
import { GET } from "../ApiFunction/ApiFunction";
import CourseProfile from "./CourseProfile";

const AdminProfile = () => {
  const [userData, setUserData] = useState([]);
  const [courseData, setCourseData] = useState([]);
  const [active, setActive] = useState(0);

  const adminData = [
    {
      title: "View Course",
      count: userData?.length,
    },
    {
      title: "View Lecture",
      count: 100,
    },
  ];
  const fetchData = async () => {
    const colorMap = new Map([
      ["Technology", "#ede9fe"],
      ["Business", "#4338ca"],
      ["Design", "#6d28d9"],
      ["Programming", "#e11d48"],
      ["Marketing", "#ca8a04"],
      ["Other", "#16a34a"],
    ]);
    const result = await GET("http://localhost:3000/getallcourse");
    setUserData(result);
    const course = result
      ?.map((v) => v.courseType)
      .reduce((acc, category, i) => {
        const existing = acc.find((item) => item.name === category);
        if (existing) {
          existing.count += 1;
        } else {
          acc.push({
            name: category,
            count: 1,
            color: colorMap.get(category) || "#000000",
          });
        }
        return acc;
      }, []);
    setCourseData(course);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="text-gray-700 flex flex-col gap-4 h-full">
      <p className="">Admin Profile</p>
      <div className="grid grid-cols-2 items-center gap-4">
        {adminData.map((v, i) => (
          <CustomButton
            key={i}
            onClick={() => setActive(i)}
            variant={"default"}
            color="solid"
            className={`min-h-40 w-full rounded-lg relative p-2 ${
              active === i
                ? `border-Primary border text-Primary`
                : "bg-gray-100"
            }`}
          >
            <strong className="bg-Primary text-xs p-2 text-center absolute rounded-tr rounded-bl-md right-0 top-0 text-white">
              {v.count}
            </strong>
            <p className="text-sm font-bold tracking-widest">{v.title}</p>
          </CustomButton>
        ))}
      </div>
      {active === 0 ? (
        <CourseProfile
          courseData={courseData}
          allCourse={userData}
          refresh={() => fetchData()}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default AdminProfile;
