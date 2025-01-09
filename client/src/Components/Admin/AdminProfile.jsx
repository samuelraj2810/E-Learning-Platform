import React, { useState } from "react";
import CustomButton from "../Common/CustomButton";

const AdminProfile = () => {
    const [active, setActive] = useState(0)
  const adminData = [
    {
      title: "Course",
      count: 100,
    },
    {
        title: "Lecture",
        count: 100,
    },
  ];
  return (
    <div className="text-gray-700 flex flex-col gap-2">
      <p>Admin Profile</p>
      <div className="grid grid-cols-2 items-center gap-4">
        {adminData.map((v, i) => (
          <CustomButton
            key={i}
            titleC
            onClick={()=>setActive(i)}
            variant={"default"}
            color="solid"
            className={`min-h-40 w-full rounded-lg relative p-2 ${active === i ? `border-Primary backdrop-grayscale border` : "bg-Primary/10"}`}
          >      
            <strong className="bg-Primary text-xs p-2 text-center absolute rounded-tr right-0 top-0 text-white">
              {v.count}
            </strong>
            <p className="text-sm font-bold tracking-widest">{v.title}</p>
          </CustomButton>
        ))}
      </div>
      {active === 0 && <div className="border p-2 min-h-full">Course Data</div>}
      {active === 1 && <div>Lecture Data</div>}
    </div>
  );
};

export default AdminProfile;
