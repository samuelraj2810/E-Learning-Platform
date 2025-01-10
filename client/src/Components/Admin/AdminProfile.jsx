import React, { useEffect, useState } from "react";
import CustomButton from "../Common/CustomButton";
import CustomDonut from "../Common/CustomDonut";
import { GET } from "../ApiFunction/ApiFunction";

const AdminProfile = () => {
 const [userData, setUserData] = useState([])
  const [active, setActive] = useState(0);
  const adminData = [
    {
      title: "View Course",
      count: 100,
    },
    {
      title: "View Lecture",
      count: 100,
    },
  ];
    const fetchData = async () => {
      const result = await GET("http://localhost:3000/getallcourse");
      setUserData(result);
    };
  
    useEffect(() => {
      fetchData();
    }, []);

  return (
    <div className="text-gray-700 flex flex-col gap-4 h-full">
      <p className="">Admin Profile</p>
      <div className="grid grid-cols-2 items-center gap-4">
        {adminData.map((v, i) => (
          <CustomButton
            key={i}
            onClick={() => setActive(i)}
            variant={"default"}
            color="solid"
            className={`min-h-40 w-full rounded-lg relative p-2 ${
              active === i
                ? `border-Primary border text-Primary`
                : "bg-gray-100"
            }`}
          >
            <strong className="bg-Primary text-xs p-2 text-center absolute rounded-tr rounded-bl-md right-0 top-0 text-white">
              {v.count}
            </strong>
            <p className="text-sm font-bold tracking-widest">{v.title}</p>
          </CustomButton>
        ))}
      </div>
      <CustomDonut  className="h-fit w-fit p-4"/>
    </div>
  );
};

export default AdminProfile;
