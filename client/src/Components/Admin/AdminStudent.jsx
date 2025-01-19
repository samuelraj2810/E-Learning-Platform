import React, { useEffect, useState } from "react";
import InstructorTable from "../Instructor/InstructorTable";
import { useNavigate } from "react-router-dom";
import { useCustomMessage } from "../Common/CustomMessage";
import axios from "axios";

const AdminStudent = () => {
  const [coursedata, setCoursedata] = useState([]);
  const [active, setActive] = useState(5);
  const showMessage = useCustomMessage();
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const token = sessionStorage.getItem("token");
    const result = await axios.get("http://localhost:3000/getallcourse", {
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

  const deleteData = async (params) => {
    const { _id } = params;
    try {
      await axios.delete(`http://localhost:3000/deletecourse/${_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getData();
    } catch (error) {
      console.error("Error deleting course:", error);
      showMessage("error", "Failed to delete course. Please try again.");
    }
  };

  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <h1 className="lg:text-lg font-semibold text-gray-700">All Courses</h1>
        <CustomButton
          title="Create new"
          onClick={handleaddcourse}
          icon={<PlusOutlined />}
          variant="default"
          className="bg-Primary py-5 font-bold tracking-wider text-white capitalize hover:bg-Primary/80"
        />
      </div>
      <div className="flex flex-row-reverse justify-end items-center flex-wrap gap-4">
        {filterOption.map((v, i) => (
          <button
            key={i}
            className={`p-2 rounded text-xs border duration-500 transition-all`}
            style={{
              borderColor: v.color,
              color: active === i ? "white" : v.color,
              backgroundColor: active === i && v.color,
            }}
            onClick={() => setActive(i)}
          >
            {v.name}
          </button>
        ))}
      </div>
      <InstructorTable
        data={filteredData}
        deleteFunction={(paeams) => deleteData(paeams)}
      />
    </div>
  );
};

export default AdminStudent;
