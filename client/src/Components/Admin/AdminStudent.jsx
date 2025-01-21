import React, { useEffect, useState } from "react";
import InstructorTable from "../Instructor/InstructorTable";
import { useNavigate } from "react-router-dom";
import { useCustomMessage } from "../Common/CustomMessage";
import axios from "axios";
import CustomButton from "../Common/CustomButton";
import { message, Popconfirm } from "antd";

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
    {
      title: "Action",
      key: "action",
      align: "center",
      width: 100,
      render: (_, record) => (
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => deleteData(record)}
            onCancel={()=> message.error("Click on No")}
            okText="Yes"
            cancelText="No"
          >
            <CustomButton type="delete" />
          </Popconfirm>
      ),
    },
  ];
  const deleteData = async (params) => {
    const { _id } = params;
    try {
      await axios.delete(`http://localhost:3000/deletedata/${_id}`, {
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
      />
    </div>
  );
};

export default AdminStudent;
