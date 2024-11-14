import { Table } from "antd";
import React from "react";

const InstructorTable = () => {
  const dataSource = [
    { key: "1", name: "Mike", age: 32, address: "10 Downing Street" },
    { key: "2", name: "John", age: 42, address: "10 Downing Street" },
    { key: "3", name: "Alice", age: 28, address: "20 Downing Street" },
    { key: "4", name: "Bob", age: 35, address: "30 Downing Street" },
    { key: "5", name: "Charlie", age: 30, address: "40 Downing Street" },
    { key: "6", name: "Mike", age: 32, address: "10 Downing Street" },
    { key: "7", name: "John", age: 42, address: "10 Downing Street" },
    { key: "8", name: "Alice", age: 28, address: "20 Downing Street" },
    { key: "9", name: "Bob", age: 35, address: "30 Downing Street" },
    { key: "10", name: "Charlie", age: 30, address: "40 Downing Street" },
    { key: "1", name: "Mike", age: 32, address: "10 Downing Street" },
    { key: "2", name: "John", age: 42, address: "10 Downing Street" },
    { key: "3", name: "Alice", age: 28, address: "20 Downing Street" },
    { key: "4", name: "Bob", age: 35, address: "30 Downing Street" },
    { key: "5", name: "Charlie", age: 30, address: "40 Downing Street" },
    { key: "6", name: "Mike", age: 32, address: "10 Downing Street" },
    { key: "7", name: "John", age: 42, address: "10 Downing Street" },
    { key: "8", name: "Alice", age: 28, address: "20 Downing Street" },
    { key: "9", name: "Bob", age: 35, address: "30 Downing Street" },
    { key: "10", name: "Charlie", age: 30, address: "40 Downing Street" },
  ];

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Address", dataIndex: "address", key: "address" },
  ];

  return (
      <Table
        bordered
        size="small"
        columns={columns}
        dataSource={dataSource}
        pagination={{
          pageSize: 10,
        }}// Optional: Add if you want scrolling
      />
  );
};

export default InstructorTable;
