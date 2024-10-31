import React from "react";
import { Avatar } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import mentorImg from "../Assets/Images/mentors.png";
const Mentors = () => {
  const mentorsList = [
    ,
    { image: mentorImg, name: "ravid gupta kuman", status: "developer" },
    { image: mentorImg, name: "ravid", status: "developer" },
    { image: mentorImg, name: "ravid", status: "developer" },
    { image: mentorImg, name: "ravid", status: "developer" },
  ];
  return (
    <div className="w-[90%] m-auto h-fit py-4">
      <h1 className="text-2xl font-semibold md:text-3xl mb-10">
        Learn Form Industrial Experts
      </h1>
      <div className="mx-auto flex flex-col md:flex-row flex-wrap gap-10 md:justify-center lg:justify-around mt-10 ">
        {mentorsList.map((each) => (
          <div className="p-2 text-sm rounded-lg md:text-base capitalize flex lg:flex-col lg:gap-10 md:w-2/5 lg:w-fit lg:p-4">
            <img
              src={each.image}
              alt="mentors"
              className="border-8 border-white hover:border bg-gray-400 hover:scale-105 transition-all duration-500 hover:bg-gray-100 object-cover shadow-md rounded-full h-20 w-20 md:h-40 md:w-40 lg:h-60 lg:w-60 mr-2 lg:mr-0"
            />
            <div className="w-full lg:hover:shadow-lg scale-100 transition-all duration-500 lg:p-2 rounded-lg">
              <p className="uppercase text-xs text-indigo-700 text-right lg:mb-2 bg-indigo-200 ml-auto w-fit p-1 rounded-md">
                {each.status}
              </p>
              <p className="text-xl">{each.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentors;
