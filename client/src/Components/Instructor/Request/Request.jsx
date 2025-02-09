import React, { useEffect, useState } from "react";
import CustomTable from "../../Common/CustomTable";
import { GET } from "../../ApiFunction/ApiFunction";
const Request = () => {
  const [request, setRequest] = useState([]);
  const fetch = async () => {
    const res = await GET(`${process.env.REACT_APP_BACKEND_URL}/getRequests`);
    setRequest(res);
  };
  useEffect(() => {
    fetch();
  }, []);
  const header = [
    {
      title: "Course Name",
      dataIndex: "coursename",
      key: "coursename",
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
          className={
            text
              ? "text-amber-600 bg-amber-50 py-1 rounded-full px-2"
              : "text-gray-700"
          }
        >
          {text ? text : "- - -"}
        </small>
      ),
    },
  ];
  return (
    <div className="grid gap-4">
      <h1 className="lg:text-2xl text-base font-light text-gray-500 tracking-wide">
        Request
      </h1>
      <CustomTable columns={header} data={request} />
    </div>
  );
};

export default Request;
