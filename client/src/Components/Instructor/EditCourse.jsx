import { useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import CustomInput from "../Common/CustomInput";
import CustomButton from "../Common/CustomButton";
import axios from "axios";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import { useCustomMessage } from '../Common/CustomMessage';


function EditCourse() {
    const location =useLocation()
    const data = location.state
    const showMessage = useCustomMessage();
  const [editdata, setEditdata] = useState({
    courseName: data.courseName,
    duration: data.duration,
    rating: data.rating||"",
    price:data.price||"" ,
    title: data.title,
    lectureDuration: data.lectureDuration,
    description:data.description ,
    requirements:data.requirements ,
    learn:data.learn,
    instructorName:data.instructorName,
    instructorId:data.instructorId,

  });
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploading, setUploading] = useState(false); // For the upload button state
  const [loading, setLoading] = useState(false); // For the upload button sta

  console.log("rating",editdata);
  
  const navigate = useNavigate()
  let formData = new FormData();

  
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

  const handleSubmit = async () => {
    const token = sessionStorage.getItem("token");

    
    Object.keys(editdata).forEach((key) => {
      if (Array.isArray(editdata[key])) {
        editdata[key].forEach((item) => formData.append(key, item));
      } else { 
        formData.append(key, editdata[key]);
      }
    });
  
   
    if (image) formData.append("image", image);
    if (video) formData.append("video", video);
    const _id = data._id

    
    try {
        const result = await axios.put(
          `http://localhost:3000/editcourse/${_id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
  
        if (result.status === 200) {
          showMessage("success","Course updated successfully!"); 
          navigate("/instructordashboard/instructorcourse");
        }
      } catch (error) {
        showMessage("error","Error updating course. Please try again."); 
        console.error("Error updating course:", error);
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
              setEditdata({ ...editdata, rating: e.target.value })
            }
          />
          <CustomInput
            title="Course Price"
            value={editdata.price}
            placeholder="Enter course name"
            className="md:w-fit"
            containerClassName="p-2 bg-gray-50 flex items-center gap-4"
            onChange={(e) =>
              setEditdata({ ...editdata, price: e.target.value })
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
            <Upload {...props.image}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </div>
          <div className="bg-gray-50 flex gap-5 text-base p-2">
            <label>Video</label>
            <Upload {...props.video}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </div>
          
          <CustomButton
          title="Submit"
          onClick={handleSubmit}
          icon
          variant="default"
          className="bg-green-400 py-5 font-bold tracking-wider text-white capitalize"
        />
        </div>
  )}
export default EditCourse