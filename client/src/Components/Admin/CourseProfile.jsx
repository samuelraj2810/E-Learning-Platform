import React from "react";
import CustomDonut from "../Common/CustomDonut";
import InstructorTable from "../Instructor/InstructorTable";
import { useCustomMessage } from "../Common/CustomMessage";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CourseProfile = ({ courseData, allCourse, refresh = () => {} }) => {
  const showMessage = useCustomMessage();
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  const deleteData = async (params) => {
    const { _id } = params;
    try {
      await axios.delete(`http://localhost:3000/deletecourse/${_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      refresh();
    } catch (error) {
      console.error("Error deleting course:", error);
      showMessage("error", "Failed to delete course. Please try again.");
    }
  };
  const editData = (params) => {
    navigate("/instructordashboard/instructorcourse/editCourse", {
      state: params,
    });
  };
  return (
    <div className="flex flex-col md:flex-row h-full relative items-center gap-10">
      <p className="absolute top-2 left-2">Trending</p>
      <CustomDonut
        courseData={courseData}
        className="h-fit sm:mx-auto w-fit p-4"
      />
      <div className="h-full w-full">
        <h1 className="p-2 bg-gray-50 text-gray-700">Details</h1>
        <div className="flex flex-wrap lg:flex-nowrap gap-4 h-full py-2">
          <div className="shadow p-4 rounded-md h-fit w-full lg:w-fit flex flex-col flex-wrap gap-4">
            {courseData?.map((v, i) => (
              <div className="flex items-center gap-4 text-xs">
                <span
                  className={`h-3 w-7`}
                  style={{ backgroundColor: v.color }}
                />
                <span>{v.name}</span>
              </div>
            ))}
          </div>
          <div className=" w-full grid max-h-96 bg-Primary/5">
            {/* {allCourse?.map((v) => (
              <ul className="shadow p-2 text-xs">
                <li>{v.courseName}</li>
              </ul>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseProfile;
