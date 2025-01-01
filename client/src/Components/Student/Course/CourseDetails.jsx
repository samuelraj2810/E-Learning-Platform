import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET } from "../../ApiFunction/ApiFunction";

const CourseDetails = () => {
  const { _id } = useParams();
  const [temp, setTemp] = useState({});
  const getCourse = async () => {
    const data = await GET(`http://localhost:3000/getcourse/${_id}`);
    setTemp(data[0]);
  };
  useEffect(() => {
    getCourse();
  }, []);
  console.log(temp);
  return (
    <>
      {temp && (
        <div className="grid sm:grid-flow-col md:h-[90vh] w-full border">
          <div className="p-4 col-span-1 grid gap-4 items-center justify-center">
            <h1 className="text-xl font-bold ">Course details</h1>
            <h1 className="text-xl font-bold ">Course details</h1>
          </div>
          <div className="bg-gray-100 p-4 col-span-6">
            1
          </div>
          <div className="p-4 col-span-1">
            <h1 className="p-2 text-xl font-bold">{temp?.courseName}</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseDetails;
