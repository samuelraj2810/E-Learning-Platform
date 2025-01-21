import { Table } from "antd";
import React, { useEffect, useState } from "react";
import CustomButton from "../Common/CustomButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCustomMessage } from "../Common/CustomMessage";
import { message, Popconfirm } from "antd";

const InstructorTable = ({
  data,
  columns,
  deleteFunction = (data) => {},
  editFunction = (data) => {},
  editBtn=true,
}) => {
  const [open, setOpen] = useState(false);
  const [updateId, setUpdateId] = useState(false);
  const [coursedata, setCoursedata] = useState([]);
  const navigate = useNavigate();
  const mod = [...columns, {
    title: "Action",
    key: "action",
    align: "center",
    width: 100,
    render: (_, record) => (
      <div className="flex gap-2 justify-evenly">
        {editBtn === true &&
        <CustomButton type="edit" onClick={() => handleEdit(record)} />}
        <Popconfirm
          title="Delete the task"
          description="Are you sure to delete this task?"
          onConfirm={() => handleDelete(record)}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <CustomButton type="delete" />
        </Popconfirm>
      </div>
    ),
  }]

  useEffect(() => {
    if (data?.length > 0) {
      setCoursedata(data);
    }
  }, [data]);

  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };

  const updatedDataSource = coursedata.map((item) => ({
    ...item,
    width: 120,
  }));

  const defaultColumn = columns ? mod :[
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
            onConfirm={() => handleDelete(record)}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <CustomButton type="delete" />
          </Popconfirm>
        </div>
      ),
    },
  ];

  const handleDelete = async (data) => {
    deleteFunction(data);
  };

  const handleEdit = (data) => {
    setUpdateId(true);
    editFunction(data);
  };

  return (
    <>
      <Table
        bordered
        size="small"
        className=""
        columns={defaultColumn}
        dataSource={updatedDataSource}
        pagination={{
          pageSize: 10,
        }}
      />
    </>
  );
};

export default InstructorTable;
