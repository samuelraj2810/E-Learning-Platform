import { useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import CustomInput from "../Common/CustomInput";
import CustomButton from "../Common/CustomButton";
import axios from "axios";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import { useCustomMessage } from "../Common/CustomMessage";
import { PUTFILE } from "../ApiFunction/ApiFunction";

function EditCourse() {
  const location = useLocation();
  const data = location.state;
  const showMessage = useCustomMessage();
  const [editdata, setEditdata] = useState({
    courseName: data.courseName,
    duration: data.duration,
    rating: data.rating || "",
    price: data.price || "",
    title: data.title,
    lectureDuration: data.lectureDuration,
    description: data.description,
    requirements: data.requirements,
    learn: data.learn,
    instructorName: data.instructorName,
    instructorId: data.instructorId,
  });
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log("rating", editdata);

  const navigate = useNavigate();
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
    setLoading(true);
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
    const _id = data._id;

    try {
      const result = await PUTFILE(
        `http://localhost:3000/editcourse/${_id}`,
        formData
      );

      if (result.status === 200) {
        setLoading(false);

        showMessage("success", "Course updated successfully!");
        navigate("/instructordashboard/instructorcourse");
      }
    } catch (error) {
      setLoading(false);

      showMessage("error", "Error updating course. Please try again.");
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
      <span className="text-xl border-b pb-4">Edit Course</span>
      <table className="table-auto w-fit ">
  <tbody className="">
    <tr className="grid grid-cols-1 md:grid-cols-2 ">
      <td className=" px-4 py-2 font-medium">Course Name</td>
      <td className="px-4 py-2 ">
        <CustomInput
          placeholder="Enter course name"
          className="w-full "
          value={editdata.courseName}
          containerClassName="p-2  flex items-center gap-4"
          onChange={(e) =>
            setEditdata({ ...editdata, courseName: e.target.value })
          }
        />
      </td>
    </tr>
    <tr className="grid grid-cols-1 md:grid-cols-2">
      <td className="px-4 py-2 font-medium">Price</td>
      <td className="px-4 py-2">
        <CustomInput
          placeholder="Enter price"
          className="w-full"
          value={editdata.price}
          containerClassName="p-2  flex items-center gap-4"
          onChange={(e) =>
            setEditdata({ ...editdata, price: parseFloat(e.target.value) })
          }
        />
      </td>
    </tr>
    <tr className="grid grid-cols-1 md:grid-cols-2">
      <td className="px-4 py-2 font-medium">Rating</td>
      <td className="px-4 py-2">
        <CustomInput
          placeholder="Enter rating"
          className="w-full"
          value={editdata.rating}
          containerClassName="p-2  flex items-center gap-4"
          onChange={(e) =>
            setEditdata({ ...editdata, rating: e.target.value })
          }
        />
      </td>
    </tr>
    <tr className="grid grid-cols-1 md:grid-cols-2">
      <td className="px-4 py-2 font-medium">Duration</td>
      <td className="px-4 py-2">
        <CustomInput
          placeholder="Enter duration"
          className="w-full"
          value={editdata.duration}
          containerClassName="p-2  flex items-center gap-4"
          onChange={(e) =>
            setEditdata({ ...editdata, duration: e.target.value })
          }
        />
      </td>
    </tr>
    {["title", "lectureDuration", "description", "requirements", "learn"].map(
      (key) => (
        <React.Fragment key={key}>
          {editdata[key]?.map((item, index) => (
            <tr key={`${key}-${index}`} className="grid grid-cols-1 md:grid-cols-2">
              <td className="px-4 py-2">
                {key} {index + 1}
              </td>
              <td className="px-4 py-2">
                <CustomInput
                  placeholder={`Enter ${key}`}
                  className="w-full"
                  value={editdata[key][index]}
                  containerClassName="p-2  flex items-center gap-4"
                  onChange={(e) =>
                    handleArrayChange(index, key, e.target.value)
                  }
                />
              </td>
            </tr>
          ))}
          <tr>
            <td className="px-4 py-2" colSpan={2}>
              <Button
                onClick={() => addArrayItem(key)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Add {key}
              </Button>
            </td>
          </tr>
        </React.Fragment>
      )
    )}
  </tbody>
</table>
      <div className=" flex gap-5 text-base p-2">
        <label>Image</label>
        <Upload {...props.image}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </div>
      <div className=" flex gap-5 text-base p-2">
        <label>Video</label>
        <Upload {...props.video}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
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
export default EditCourse;
