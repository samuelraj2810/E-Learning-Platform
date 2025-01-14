import React, { useEffect, useState } from "react";
import CustomButton from "../Common/CustomButton";
import CustomDonut from "../Common/CustomDonut";
import { GET } from "../ApiFunction/ApiFunction";
import CourseProfile from "./CourseProfile";
import { Progress } from "antd";

const AdminProfile = () => {
  const twoColors = {
    "0%": "#108ee9",
    "100%": "#87d068",
  };
  const [userData, setUserData] = useState([]);
  const [courseData, setCourseData] = useState([]);
  const [active, setActive] = useState(0);
  const url = "http://localhost:3000";
  const courseImg = userData.map((v) => v.imagePath);
  console.log(courseImg);

  const adminData = [
    {
      title: "Courses",
      count: userData?.length,
      data: courseData,
    },
    {
      title: "Enrolled",
      count: 100,
    },
    {
      title: "View Lecture",
      count: 100,
    },
    {
      title: "View Lecture",
      count: 100,
    },
  ];
  const fetchData = async () => {
    const colorMap = new Map([
      ["Technology", "#22c55e"],
      ["Business", "#4338ca"],
      ["Design", "#6d28d9"],
      ["Programming", "#e11d48"],
      ["Personal Development", "#ca8a04"],
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
    <div className="text-gray-700 flex flex-col gap-4 h-full lg:overflow-hidden">
      <p>Admin Profile</p>
      <div className="grid md:grid-cols-4 grid-cols-2 items-center gap-4">
        {adminData.map((v, i) => (
          <div
            key={i}
            onClick={() => setActive(i)}
            className="w-full rounded-lg shadow gap-2 text-xs text-center flex"
          >
            <div className="grid gap-2 flex-1 p-2 text-left">
              <p className=" sm:text-base">
                Total no of <strong>{v.title}</strong>
              </p>
              <div className="border-t flex gap-2 flex-wrap pt-2">
                {v.data?.map((v) => (
                  <small style={{ color: v.color }}>{v.name}</small>
                ))}
              </div>
              {/* <Progress percent={v.count} strokeColor={twoColors} /> */}
            </div>
            <strong className="sm:text-base p-2 text-Primary min-w-9 md:min-w-16 items-center flex justify-center bg-Primary/10">
              {v.count}
            </strong>
          </div>
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
