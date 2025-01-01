import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET } from "../../ApiFunction/ApiFunction";
import { Collapse } from "antd";
import { CaretRightOutlined, VideoCameraOutlined } from "@ant-design/icons";
import CustomButton from "../../Common/CustomButton";

const CourseDetails = () => {
  const { _id } = useParams();
  const [temp, setTemp] = useState([]);
  const getCourse = async () => {
    const data = await GET(`http://localhost:3000/getcourse/${_id}`);
    setTemp(data);
  };
  useEffect(() => {
    getCourse();
  }, []);
  const subItems = (item, index) => {
    return item.title.map((title, index) => ({
      label: (
        <div className="flex justify-between items-center">
          <p className="text-Primary font-Poppins ">{title} </p>
          <small className="text-gray-500 font-Poppins ">
            {item.lectureDuration[index]}
          </small>
        </div>
      ),
      children: (
        <div className="py-2 sm:px-4 grid">
          <p className="font-medium font-Koulen">Course description</p>
          <p className="p-2 text-gray-500 border min-h-28 rounded-lg mt-2">
            {item.description[index]}
          </p>
          <p className="font-medium font-Koulen mt-2">
            What will you learn this section ?
          </p>
          <p className="p-2 text-gray-500 border min-h-28 rounded-lg mt-2">
            {item.learn[index]}
          </p>
        </div>
      ),
    }));
  };
  console.log(temp);
  return (
    <>
      {temp.length > 0 &&
        temp.map((item, index) => (
          <div className="sm:flex bg-gray-100 h-full md:h-[90vh] w-full border relative">
            <div className="sm:w-fit bg-white border flex flex-col">
              <h1 className="lg:text-xl font-semibold border-b p-4">
                {item.courseName}
              </h1>
            </div>
            <div className=" h-full sm:py-2 md:p-2 sm:pr-0 flex-1 overflow-y-scroll">
              <p className="bg-white p-4 text-sm lg:text-base text-Primary">
                video <VideoCameraOutlined className="ml-2" />
              </p>
              <div className="p-4 flex gap-1 bg-white relative ">
                {!item.isPaid && (
                  <div
                    className={`h-full backdrop-grayscale w-full top-0 left-0 absolute`}
                  />
                )}
                <video
                  controls={item.isPaid}
                  muted
                  className="h-full w-full mx-auto"
                >
                  <source
                    src={`http://localhost:3000${item.videoPath}`}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <Collapse
                bordered={false}
                defaultActiveKey={["1"]}
                expandIcon={({ isActive }) => (
                  <CaretRightOutlined
                    className="!text-Primary"
                    rotate={isActive ? 90 : 0}
                  />
                )}
                items={subItems(item, index)}
                className="bg-white lg:px-4 py-4"
              />
              <div className="drop-shadow-lg border text-white flex items-center justify-between bg-Primary p-2 backdrop-blur-sm w-full sticky left-0 bottom-0 ">
                <p className="font-bold font-Poppins !tracking-wider">Price</p>
                <p className="mr-auto ml-4 font-medium ">{temp[0].price}</p>
                <CustomButton
                  title="buy"
                  color="solid"
                  className="bg-white text-Primary"
                />
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default CourseDetails;
