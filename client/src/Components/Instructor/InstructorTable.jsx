import { Table } from "antd";
import React, { useEffect, useState } from "react";
import CustomButton from "../Common/CustomButton";
import { DELETE, GET } from "../ApiFunction/ApiFunction";
import CustomDrawer from "../Common/CustomDrawer";
import CustomInput from "../Common/CustomInput";
import axios from "axios";
import Course from "../Home/Course";
import { useNavigate } from "react-router-dom";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";

const InstructorTable = () => {
  const [open, setOpen] = useState(false);
  const [updateId, setUpdateId] = useState(false);
  const [coursedata, setCoursedata] = useState([]);
  let formData = new FormData()
  const [editdata, setEditdata] = useState({
    courseName: "",
    duration: "",
    rating: "",
    price: "",
    image: null,
    video: null,
  });
  const navigate = useNavigate();
  const showLargeDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const handleSubmit = async () => {
    setOpen(false);
    const token = sessionStorage.getItem("")
    formData.append("courseName", editdata.courseName);
    formData.append("duration", editdata.duration);
    formData.append("rating", editdata.rating);
    formData.append("price", editdata.price);
    
    if (image) formData.append("image", editdata.image);
    if (video) formData.append("video", editdata.video);

    const result = await axios.put(
      `http://localhost:3000/editcourse/${editdata._id}`,formData,{
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
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
    console.log();

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
        <span className="!text-gray-500 ">{text ? text : "- - -"}</span>
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
          <CustomButton
            type="delete"
            onClick={() => handleDelete(record.key)}
          />
        </div>
      ),
    },
  ];

  const handleDelete = (id) => {
    const url = `/`;
    DELETE(`${url}/${id}`);
    GET(url);
  };
  const handleEdit = (data) => {
    setEditdata(data);
    setOpen(true);
    setUpdateId(true);
  };
  console.log(editdata);

  const props = [
    {
      name: "image",
      action: "",
      headers: {},
      onChange(info) {
        if (info.file.status === "done" || info.file.status === "uploading") {
          setEditdata((prev) => ({
            ...prev,
            image: info.file.originFileObj,
          }));
        }
      },
    },
    {
      name: "video",
      action: "",
      headers: {},
      onChange(info) {
        if (info.file.status === "done" || info.file.status === "uploading") {
          setEditdata((prev) => ({ ...prev, video: info.file.originFileObj }));
        }
      },
    },
  ];

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
      <CustomDrawer
        open={open}
        onClose={onClose}
        onSubmit={handleSubmit}
        title={updateId ? "Edit the course " : "Create New Course"}
      >
        <div className="grid gap-4 md:gap-6 lg:gap-8">
          <CustomInput
            title="Course Name"
            value={editdata.courseName}
            placeholder="Enter course name"
            className="md:w-fit"
            containerClassName="p-2 bg-gray-50 flex items-center gap-4"
            onChange={(e) =>
              setEditdata({ ...editdata, courseName: e.target.value })
            }
          />
          <CustomInput
            title="Price"
            value={editdata.price}
            placeholder="Enter price"
            className="md:w-fit"
            containerClassName="p-2 bg-gray-50 flex items-center gap-4"
            onChange={(e) =>
              setEditdata({
                ...editdata,
                price: parseFloat(e.target.value),
              })
            }
          />
          <CustomInput
            title="Rating"
            value={editdata.rating}
            placeholder="Enter rating"
            className="md:w-fit"
            containerClassName="p-2 bg-gray-50 flex items-center gap-4"
            onChange={(e) =>
              setEditdata({
                ...editdata,
                rating: e.target.value,
              })
            }
          />
          <CustomInput
            title="duration"
            value={editdata.duration}
            placeholder="Enter duration"
            className="md:w-fit"
            containerClassName="p-2 bg-gray-50 flex items-center gap-4"
            onChange={(e) =>
              setEditdata({
                ...editdata,
                duration: e.target.value,
              })
            }
          />
          <div className=" bg-gray-50  flex gap-5 text-base p-2">
            <label>Image</label>
            <Upload {...props[0]}>
              <Button icon={<UploadOutlined />} onChange={(e) => {}}>
                Click to Upload
              </Button>
            </Upload>
          </div>
          <div className=" bg-gray-50  flex gap-5 text-base p-2">
            <label>Video</label>
            <Upload {...props[1]}>
              <Button
                icon={<UploadOutlined />}
                onChange={(e) => {
                  setEditdata({ ...editdata, video: e.target.value });
                }}
              >
                Click to Upload
              </Button>
            </Upload>
          </div>
        </div>
      </CustomDrawer>
    </>
  );
};

export default InstructorTable;
