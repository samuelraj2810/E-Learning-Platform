import { Table } from "antd";
import React, { useEffect, useState } from "react";
import CustomButton from "../Common/CustomButton";
import { GET } from "../ApiFunction/ApiFunction";
import CustomDrawer from "../Common/CustomDrawer";
import CustomInput from "../Common/CustomInput";
import axios from "axios";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import { useNavigate } from "react-router-dom";
import { useCustomMessage } from "../Common/CustomMessage";
import {message, Popconfirm } from "antd";

const InstructorTable = () => {
  const [open, setOpen] = useState(false);
  const [updateId, setUpdateId] = useState(false);
  const [coursedata, setCoursedata] = useState([]);
  const navigate = useNavigate();
  const showMessage = useCustomMessage();



  const token = sessionStorage.getItem("token");


  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };

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

  const updatedDataSource = coursedata.map((item) => ({
    ...item,
    width: 120,
  }));

  const columns = [
    {
      title: "Course Name",
      dataIndex: "courseName",
      key: "courseName",
      render: (text) => (
        <span className="!text-gray-500">{text ? text : "- - -"}</span>
      ),
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
      width: 50,
      align: "center",
      render: (text) => (
        <small
          className={
            text
              ? "bg-Primary/10 p-1 py-[3px] font-bold border-2 border-Primary/50 rounded-full text-Primary text-[10px]"
              : "text-gray-700"
          }
        >
          {text ? text : "- - -"}
        </small>
      ),
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      align: "center",
      render: (text) => (
        <small className={text ? "text-green-600" : "text-gray-700"}>
          {text ? text : "- - -"}
        </small>
      ),
    },
    {
      title: "price",
      dataIndex: "price",
      key: "price",
      align: "center",
      render: (text) => (
        <small className={text ? "text-green-600" : "text-gray-700"}>
          {text ? text : "- - -"}
        </small>
      ),
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      width: 100,
      render: (_, record) => (
        <div className="flex gap-2 justify-evenly">
          <CustomButton type="edit" onClick={() => handleEdit(record)} />
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() =>handleDelete(record)}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <CustomButton type="delete"/>
          </Popconfirm>
        </div>
      ),
    },
  ];

  const handleDelete = async (data) => {
    const { _id } = data;


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

  const handleEdit = (data) => {
    setUpdateId(true);
    navigate("/instructordashboard/instructorcourse/editCourse", {
      state: data,
    });
  };

 

  return (
    <>
      <Table
        bordered
        size="small"
        className=""
        columns={columns}
        dataSource={updatedDataSource}
        pagination={{
          pageSize: 10,
        }}
      />
    </>
  );
};

export default InstructorTable;
