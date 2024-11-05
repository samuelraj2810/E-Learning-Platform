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
    <div className="w-[90%] m-auto h-fit py-8">
      <h1 className="text-2xl font-semibold drop-shadow md:text-3xl mb-10">
        <span className="text-Primary">Learn</span> Form Industrial Experts
      </h1>
      <div className="mx-auto rounded-lg flex flex-col md:flex-row flex-wrap gap-10 md:justify-center lg:justify-around mt-10 md:py-8 lg:p-4">
        {mentorsList.map((each) => (
          <div className="p-2 bg-gradient-to-tr from-red-100 to-gray-100 md:rounded-full text-sm md:text-base capitalize flex lg:flex-col lg:gap-10 md:w-2/5 lg:w-fit">
            <img
              src={each.image}
              alt="mentors"
              className="border-4 border-white hover:border z-10 hover:scale-105 transition-all duration-500 bg-gray-100 object-cover shadow-md rounded-full h-20 w-20 md:h-40 md:w-40 lg:h-60 lg:w-60 mr-2 lg:mr-0"
            />
            <div className="w-full bg-gray-50 border-double border-4 rounded-lg lg:shadow-lg scale-100 transition-all duration-500">
              <p className="uppercase text-[8px] md:text-xs text-gray-800 text-right lg:mb-2 bg-green-200 ml-auto w-fit px-1 md:p-1 rounded-md">
                {each.status}
              </p>
              <p className="text-xl w-4/5 md:w-full lg:text-center px-2">{each.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentors;
