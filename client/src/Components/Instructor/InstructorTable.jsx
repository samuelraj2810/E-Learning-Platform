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

const InstructorTable = () => {
  const [open, setOpen] = useState(false);
  const [updateId, setUpdateId] = useState(false);
  const [coursedata, setCoursedata] = useState([]);
  const navigate = useNavigate()
  const showMessage = useCustomMessage(); 
  const [editdata, setEditdata] = useState({
    courseName: "",
    duration: "",
    rating: "",
    price: "",
    title: [""],
    lectureDuration: [""],
    description: [""],
    requirements: [""],
    learn: [""],
    instructorName: "",
    instructorId: "",
    image: null,
    video: null,
  });


  
  let formData = new FormData();
  const token = sessionStorage.getItem("token");

  const showLargeDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleArrayChange = (index, key, value) => {
    setEditdata((prevData) => ({
      ...prevData,
      [key]: prevData[key].map((item, idx) => (idx === index ? value : item)),
    }));
  };

  const addArrayItem = (key) => {
    setEditdata((prevData) => ({
      ...prevData,
      [key]: [...prevData[key], ""],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    setOpen(false);
    console.log("hi");
    
   

    Object.keys(editdata).forEach((key) => {
      if (Array.isArray(editdata[key])) {
        editdata[key].forEach((item) => formData.append(key, item));
      } else if (key !== 'image' && key !== 'video') { 
        formData.append(key, editdata[key]);
      }
    });
  
   
    if (editdata.image) formData.append("image", editdata.image);
    if (editdata.video) formData.append("video", editdata.video);
  
    console.log(formData);
    

    const result = await axios.put(
      `http://localhost:3000/editcourse/${editdata._id}`,
      formData,
      {
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
          <CustomButton
            type="delete"
            onClick={() => handleDelete(record)}
          />
        </div>
      ),
    },
  ];

  const handleDelete = async (data) => {
    const {_id} = data;
    
    try {
      // Send delete request
      await axios.delete(`http://localhost:3000/deletecourse/${_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      // After successful deletion, refresh the table data
      getData();
  
    } catch (error) {
      console.error("Error deleting course:", error);
      // Optionally show a message to the user if deletion fails
      showMessage("error", "Failed to delete course. Please try again.");
    }
  };
  

  const handleEdit = (data) => {
    setEditdata(data,);
    setOpen(true);
    setUpdateId(true);
    // navigate("/instructordashboard/instructorcourse/editCourse",{state:data})
  };

  const props = [
    {
      name: "image",
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
      onChange(info) {
        if (info.file.status === "done" || info.file.status === "uploading") {
          setEditdata((prev) => ({...prev,  video: info.file.originFileObj }));
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
        title={updateId ? "Edit the course" : "Create New Course"}
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
            title="Duration"
            value={editdata.duration}
            placeholder="Enter Douration"
            className="md:w-fit"
            containerClassName="p-2 bg-gray-50 flex items-center gap-4"
            onChange={(e) =>
              setEditdata({ ...editdata, duration: e.target.value })
            }
          />
          <CustomInput
            title="Rating"
            value={editdata.rating}
            placeholder="Enter course rating"
            className="md:w-fit"
            containerClassName="p-2 bg-gray-50 flex items-center gap-4"
            onChange={(e) =>
              setEditdata({ ...editdata, rating: e.target.value===null?"":e.target.value })
            }
          />
          <CustomInput
            title="Course Price"
            value={editdata.price}
            placeholder="Enter course name"
            className="md:w-fit"
            containerClassName="p-2 bg-gray-50 flex items-center gap-4"
            onChange={(e) =>
              setEditdata({ ...editdata, price: e.target.value===null?"":e.target.value })
            }
          />
          
          {["title", "lectureDuration", "description", "requirements", "learn"].map(
            (key) => (
              <div key={key}>
                {editdata[key].map((item, index) => (
                  <CustomInput
                    key={index}
                    value={editdata[key][index]}
                    title={`${key} ${index + 1}`}
                    placeholder={`Enter ${key}`}
                    className="md:w-fit"
                    containerClassName="p-2 bg-gray-50 flex items-center gap-4"
                    onChange={(e) =>
                      handleArrayChange(index, key, e.target.value)
                    }
                  />
                ))}
                <Button onClick={() => addArrayItem(key)}>Add {key}</Button>
              </div>
            )
          )}
          <div className="bg-gray-50 flex gap-5 text-base p-2">
            <label>Image</label>
            <Upload {...props[0]}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
            
          </div>
          <div className="bg-gray-50 flex gap-5 text-base p-2">
            <label>Video</label>
            <Upload {...props[1]}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </div>
        </div>
      </CustomDrawer>
    </>
  );
};

export default InstructorTable;
