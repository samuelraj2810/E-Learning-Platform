import React, { useEffect, useState } from "react";
import { Rate } from "antd";

const CourseCards = ({coursedata}) => {
  const url = "http://localhost:3000"

  console.log(coursedata);

  return (
    <div className="h-fit w-full p-2 lg:pt-4 grid gap-2 lg:gap-4 grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap">
      {coursedata.length > 0 &&
        coursedata?.map((v, i) => (
          <div className="border rounded-lg p-4 max-h-52 min-h-48 lg:max-h-72 lg:min-h-80 lg:max-w-72 lg:min-w-72 hover:shadow-md transition-all duration-500 bg-white flex flex-col gap-2 relative">
            <div className=" bg-gray-50 h-full">
              <img src={url+v.imagePath} className="rounded-md h-full"/>
            </div>
            <div className="text-xs md:text-base flex items-center justify-between font-bold tracking-widest text-gray-600">
              <p>{v?.courseName.trim()}</p>
              <p className="font-normal text-[10px]">{v?.duration.trim()}</p>
            </div>
            <Rate
              defaultValue={parseInt(v.rating)}
              disabled
              className="text-xs"
            />
            <div className="w-full flex items-center justify-between mt-4">
              <p className="font-bold tracking-wider text-Primary">Price</p>
              <p className="font-mono">{v?.price ? v?.price : "free"}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CourseCards;
