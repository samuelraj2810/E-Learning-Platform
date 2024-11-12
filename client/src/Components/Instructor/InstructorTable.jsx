import { Table } from "antd";
import React from "react";
import CustomButton from "../Common/CustomButton";

const InstructorTable = () => {
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
    { key: "10", course: "Charlie", student: 30, revenue: "40 Downing Street" },
  ];
  const updatedDataSource = dataSource.map(item => ({
    ...item,
    width: 120 ,
  }));
  console.log(updatedDataSource);
  
  const columns = [
    { title: "Course", dataIndex: "course", key: "course" ,render:(text) => <span className="!text-gray-500">{text}</span>},
    { title: "Student", dataIndex: "student", key: "student" },
    { title: "revenue", dataIndex: "revenue", key: "revenue" },
    {
      title: "Action",
      key: "action",
      align:"center",
      width:100,
      render: (_, record) => (
        <div className="flex gap-2 justify-evenly">
          <CustomButton
            type="edit"
            // onClick={() => showEditModal(record)}
          />
          <CustomButton
            type="delete"
            // onClick={() => handleDelete(record.key)}
          />
        </div>
      ),
    },
  ];

  return (
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
  );
};

export default InstructorTable;
