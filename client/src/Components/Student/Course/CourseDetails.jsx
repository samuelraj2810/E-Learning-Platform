import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET } from "../../ApiFunction/ApiFunction";
import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

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
  const subItems = (item,index) => {
    return item.title.map((title, index) => ({
        label:title,
        children:
        <div>
            <p>{item.description[index]}</p>
            <p>{item.learn[index]}</p>
            <p>{item.lectureDuration[index]}</p>
        </div>,
      }));
  }
  console.log(temp);
  return (
    <>
      {temp.length > 0 &&
        temp.map((item, index) => (
          <div className="grid sm:grid-flow-col md:h-[90vh] w-full border">
            <div className="p-4 flex flex-col gap-4">
              <h1 className="text-xl font-bold ">Course details</h1>
              <Collapse
                bordered={false}
                defaultActiveKey={["1"]}
                expandIcon={({ isActive }) => (
                  <CaretRightOutlined rotate={isActive ? 90 : 0} />
                )}
                items={subItems(item,index)}
                className="bg-white"
              />
            </div>
            <div className="bg-gray-100 p-4 col-span-6">
            </div>
            <div className="p-4 col-span-1">
              <h1 className="p-2 text-xl font-bold">{temp?.courseName}</h1>
            </div>
          </div>
        ))}
    </>
  );
};

export default CourseDetails;
