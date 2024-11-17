import React, { useState } from "react";
import InstructorTable from "./InstructorTable";
import CustomButton from "../Common/CustomButton";
import { PlusOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import CustomDrawer from "../Common/CustomDrawer";
import CustomInput from "../Common/CustomInput";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const InstructorCourse = () => {
  const [open, setOpen] = useState(false);
  const [courseData, setCourseData] = useState({
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
  });
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const navigate = useNavigate();

  const showLargeDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  const handleArrayChange = (index, key, value) => {
    setCourseData((prevData) => ({
      ...prevData,
      [key]: prevData[key].map((item, idx) =>
        idx === index ? value : item
      ),
    }));
  };

  const addArrayItem = (key) => {
    setCourseData((prevData) => ({
      ...prevData,
      [key]: [...prevData[key], ""],
    }));
  };

  const handleaddcourse = () =>{
    navigate("/instructordashboard/instructorcourse/addCourse")
  }

  const handleSubmit = async () => {
    setOpen(false);

    const token = sessionStorage.getItem("token");
    let formData = new FormData();

    Object.keys(courseData).forEach((key) => {
      if (Array.isArray(courseData[key])) {
        courseData[key].forEach((item) => formData.append(key, item));
      } else {
        formData.append(key, courseData[key]);
      }
    });

    if (image) formData.append("image", image);
    if (video) formData.append("video", video);

    try {
      const response = await axios.post("http://localhost:3000/addcourse", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data.message || "Course added successfully!");
      navigate("/editdata", { state: response });
    } catch (error) {
      console.error("Error uploading course", error);
    }
  };

  const props = [
    {
      name: "image",
      beforeUpload: () => false,
      onChange(info) {
        if (info.file.status === "done" || info.file.status === "uploading") {
          setImage(info.file.originFileObj);
        }
      },
    },
    {
      name: "video",
      beforeUpload: () => false,
      onChange(info) {
        if (info.file.status === "done" || info.file.status === "uploading") {
          setVideo(info.file.originFileObj);
        }
      },
    },
  ];

  return (
    <div className="grid gap-8 lg:gap-12">
      <div className="flex items-center justify-between">
        <h1 className="lg:text-lg font-semibold text-gray-700">All Courses</h1>
        <CustomButton
          title="Create new"
          onClick={handleaddcourse}
          icon={<PlusOutlined />}
          variant="default"
          className="bg-Primary py-5 font-bold tracking-wider text-white capitalize hover:bg-Primary/80"
        />
      </div>
      <InstructorTable />
      <CustomDrawer
        open={open}
        onClose={onClose}
        onSubmit={handleSubmit}
        title="Create New Course"
      >
        <div className="grid gap-4 md:gap-6 lg:gap-8">
          <CustomInput
            title="Course Name"
            placeholder="Enter course name"
            className="md:w-fit"
            containerClassName="p-2 bg-gray-50 flex items-center gap-4"
            onChange={(e) =>
              setCourseData({ ...courseData, courseName: e.target.value })
            }
          />
          <CustomInput
            title="Price"
            placeholder="Enter price"
            className="md:w-fit"
            containerClassName="p-2 bg-gray-50 flex items-center gap-4"
            onChange={(e) =>
              setCourseData({ ...courseData, price: parseFloat(e.target.value) })
            }
          />
          <CustomInput
            title="Rating"
            placeholder="Enter rating"
            className="md:w-fit"
            containerClassName="p-2 bg-gray-50 flex items-center gap-4"
            onChange={(e) =>
              setCourseData({ ...courseData, rating: e.target.value })
            }
          />
          <CustomInput
            title="Duration"
            placeholder="Enter duration"
            className="md:w-fit"
            containerClassName="p-2 bg-gray-50 flex items-center gap-4"
            onChange={(e) =>
              setCourseData({ ...courseData, duration: e.target.value })
            }
          />
          {["title", "lectureDuration", "description", "requirements", "learn"].map(
            (key) => (
              <div key={key}>
                {courseData[key].map((item, index) => (
                  <CustomInput
                    key={index}
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
    </div>
  );
};

export default InstructorCourse;
