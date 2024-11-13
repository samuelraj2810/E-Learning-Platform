import { Table } from "antd";
import React, { useState } from "react";
import CustomButton from "../Common/CustomButton";
import { DELETE, GET } from "../ApiFunction/ApiFunction";
import CustomDrawer from "../Common/CustomDrawer";

const InstructorTable = () => {
  const [open, setOpen] = useState(false);
  const showLargeDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
    const handleSubmit = () => {
      setOpen(false);
    }
  const dataSource = [
    { key: "1", course: "Mike", student: 32, revenue: "10 Downing Street" },
    { key: "2", course: "John", student: 42, revenue: "10 Downing Street" },
    { key: "3", course: "Alice", student: 28, revenue: "20 Downing Street" },
    { key: "4", course: "Bob", student: 35, revenue: "30 Downing Street" },
    { key: "5", course: "Charlie", student: 30, revenue: "40 Downing Street" },
    { key: "6", course: "Mike", student: 32, revenue: "10 Downing Street" },
    { key: "7", course: "John", student: 42, revenue: "10 Downing Street" },
    { key: "8", course: "Alice", student: 28, revenue: "20 Downing Street" },
    { key: "9", course: "Bob", student: 35, revenue: "30 Downing Street" },
    { key: "10", course: "Charlie", student: 30, revenue: "40 Downing Street" },
    { key: "1", course: "Mike", student: 32, revenue: "10 Downing Street" },
    { key: "2", course: "John", student: 42, revenue: "10 Downing Street" },
    { key: "3", course: "Alice", student: 28, revenue: "20 Downing Street" },
    { key: "4", course: "Bob", student: 35, revenue: "30 Downing Street" },
    { key: "5", course: "Charlie", student: 30, revenue: "40 Downing Street" },
    { key: "6", course: "Mike", student: 32, revenue: "10 Downing Street" },
    { key: "7", course: "John", student: 42, revenue: "10 Downing Street" },
    { key: "8", course: "Alice", student: 28, revenue: "20 Downing Street" },
    { key: "9", course: "Bob", student: 35, revenue: "30 Downing Street" },
    { key: "10", course: "Charlie", student: 30, revenue: "" },
  ];
  const updatedDataSource = dataSource.map(item => ({
    ...item,
    width: 120 ,
  }));
  console.log(updatedDataSource);
  
  const columns = [
    { title: "Course", dataIndex: "course", key: "course" ,render:(text) => <span className="!text-gray-500 ">{text ? text : "- - -"}</span>},
    { title: "Student", dataIndex: "student", key: "student",width:50,align:"center" ,render:(text) => <small className={text ? "bg-Primary/10 p-1 border-2 border-Primary/50 rounded-full text-Primary text-[10px]" : "text-gray-700"}>{text ? text : "- - -"}</small>},
    { title: "revenue", dataIndex: "revenue", key: "revenue",align:"center",render:(text) => <small className={text ? "text-green-600" : "text-gray-700"}>{text ? text : "- - -"}</small> },
    {
      title: "Action",
      key: "action",
      align:"center",
      width:100,
      render: (_, record) => (
        <div className="flex gap-2 justify-evenly">
          <CustomButton
            type="edit"
            onClick={() => handleEdit(record)}
          />
          <CustomButton
            type="delete"
            onClick={() => handleDelete(record.key)}
          />
        </div>
      ),
    },
  ];

  const handleDelete = (id) => {
    const url = `/`
    DELETE(`${url}/${id}`)
    GET(url)
  }
  const handleEdit = (data) => {
    setOpen(true)
  }

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
    <CustomDrawer open={open} onClose={onClose} onSubmit={handleSubmit} title="Create New Course">
      <div className="grid gap-4">
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </div>
    </CustomDrawer>
    </>
  );
};

export default InstructorTable;
