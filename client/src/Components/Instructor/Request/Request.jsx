import React from "react";
import CustomTable from "../../Common/CustomTable";
const Request = () => {
  const header = [
    {
      title: "Course Name",
      dataIndex: "courseName",
      key: "courseName",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Requested",
      dataIndex: "requested",
      key: "requested",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => (
        <small
          className={text ? "text-green-600 bg-green-50" : "text-gray-700"}
        >
          {text ? text : "- - -"}
        </small>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];
  return (
    <div className="grid gap-4">
      <h1 className="lg:text-2xl text-base font-light text-gray-500 tracking-wide">
        Request
      </h1>
      <CustomTable columns={header} />
    </div>
  );
};

export default Request;
