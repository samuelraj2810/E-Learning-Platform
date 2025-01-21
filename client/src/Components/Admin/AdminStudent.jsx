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
  const token = sessionStorage.getItem("token");

  const getData = async () => {
    const result = await axios.get("http://localhost:3000/getalldata", {
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
  const columns = [
    {
      title: "Student Name",
      dataIndex: "name",
    },
    {
      title: "Email Id",
      dataIndex: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phonenumber",
    },
  ];

  const deleteData = async (params) => {
    const { userId } = params;
    try {
      await axios.delete(`http://localhost:3000/deletedata/${userId}`, {
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
      </div>
      <div className="flex flex-row-reverse justify-end items-center flex-wrap gap-4">
        {/* {filterOption.map((v, i) => (
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
        ))} */}
      </div>
      <InstructorTable
      columns={columns}
      data={coursedata}
      deleteFunction={(record)=>deleteData(record)}
      editBtn={false}
      />
    </div>
  );
};

export default AdminStudent;
