import React, { useEffect, useMemo, useState } from "react";
import { DELETE, GET } from "../ApiFunction/ApiFunction";
import { message, Popconfirm, Table } from "antd";
import CustomButton from "../Common/CustomButton";

function AdminInstructor() {
  const [insdata, setInsData] = useState([]);
  const [active, setActive] = useState(5);

  const filterOption = [
    { name: "Technology", color: "#0ea5e9" },
    { name: "Business", color: "#6366f1" },
    { name: "Design", color: "#8b5cf6" },
    { name: "Programming", color: "#f43f5e" },
    { name: "Personal Development", color: "#eab308" },
    { name: "View All", color: "#334155" },
  ];


  const getallInstructors = async () => {
    let response = await GET("http://localhost:3000/getallinsdata");
    setInsData(response.data);
  };


  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };


  const filteredData = useMemo(() => {
    let filter 
    if (active === 0) {
      return (filter = insdata.filter((v) => v.expertise === "Technology"));
    } else if (active === 1) {
      return (filter = insdata.filter((v) => v.expertise === "Business"));
    } else if (active === 2) {
      return (filter = insdata.filter((v) => v.expertise === "Design"));
    } else if (active === 3) {
      return (filter = insdata.filter(
        (v) => v.expertise === "Programming"
      ));
    } else if (active === 4) {
      return (filter = insdata.filter(
        (v) => v.expertise === "Personal Development"
      ));
    } else {
      return insdata;
    }
  }, [active, insdata]);


  const columns = [
    {
      title: <span className="text-base font-semibold">Name</span>,
      dataIndex: "username",
      key: "username",
      render: (text) =>
        text ? <span className="font-semibold">{text}</span> : "----",
    },
    {
      title: <span className="text-base font-semibold">Age</span>,
      dataIndex: "age",
      key: "age",
      render:(text) =>text?text:"-----"
    },
    {
      title: <span className="text-base font-semibold">Expertise</span>,
      dataIndex: "expertise",
      key: "expertise",
    },
    {
      title: <span className="text-base font-semibold">Action</span>,
      width: "100px",
      render: (_, record) => (
        <div>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => deleteInstructor(record.userId)}
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

  const deleteInstructor = async (userId) => {
    console.log(userId);
    const response = await DELETE("http://localhost:3000/deleteinsdata", {
      userId,
    });
    console.log(response.message);
  };
  useEffect(() => {
    getallInstructors();
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="self-start text-xl p-10">Instructor Table</h1>
      <div className="flex flex-row-reverse self-start ml-16 p-5 justify-end items-center flex-wrap gap-4">
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
      <Table className="w-[90%]" columns={columns} dataSource={filteredData} />
    </div>
  );
}

export default AdminInstructor;
