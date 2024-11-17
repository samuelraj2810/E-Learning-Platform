import React, { useState } from "react";
import CustomButton from "../Common/CustomButton";
import CustomInput from "../Common/CustomInput";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCustomMessage } from "../Common/CustomMessage";

function AddCourse() {
  const showMessage = useCustomMessage();
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
  const [uploading, setUploading] = useState(false); // For the upload button state
  const [loading, setLoading] = useState(false); // For the upload button state
  const navigate = useNavigate();

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

  const handleSubmit = async () => {
    if(image === null){
      return showMessage("info","image is required")
    }else if(video === null ){
      return showMessage("info","video is required")
    }
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
      if (response.status === 200) {
        setLoading(false)
        showMessage("success", "Course added successfully");
        navigate("/instructordashboard/instructorcourse");
      } else {
        setLoading(false)
        showMessage("error", "Course addition failed");
      }
    } catch (error) {
      setLoading(false)
      console.error("Error uploading course", error);
    }
  };

  const props = {

    image: {
      beforeUpload: (file) => {
        setImage(file);
        return false; 
      },
      onRemove: () => {
        setImage(null); 
      },
      fileList: image ? [image] : [],
    },

    video: {
      beforeUpload: (file) => {
        setVideo(file);
        return false;
      },
      onRemove: () => {
        setVideo(null); 
      },
      fileList: video ? [video] : [],
    },
  };

  return (
    <div className="grid gap-4 md:gap-6 lg:gap-8">
      <span className="text-xl">Add Course</span>
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
      <div className="flex gap-5 text-base p-2">
        <label>Image</label>
        <Upload {...props.image}>
          <CustomButton icon={<UploadOutlined />} title="Upload" variant="filled"/>
        </Upload>
        <span className="text-red-500 mx-1 text-xs bg-red-50 rounded-md h-fit p-1">required</span>
      </div>
      <div className="flex gap-5 text-base p-2">
        <label>Video</label>
        <Upload {...props.video}>
          <CustomButton icon={<UploadOutlined />} title="Upload" variant="filled"/>
        </Upload>
        <span className="text-red-500 mx-1 text-xs bg-red-50 rounded-md h-fit p-1">required</span>
      </div>
      <CustomButton
        title="Submit"
        onClick={handleSubmit}
        loading={loading}
        variant="default"
        className="bg-green-400 py-5 font-bold tracking-wider text-white capitalize"
      />
    </div>
  );
}

export default AddCourse;
