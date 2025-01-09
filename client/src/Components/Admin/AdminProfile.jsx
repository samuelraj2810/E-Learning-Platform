import React from "react";

const AdminProfile = () => {
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
          <div
            key={i}
            className="min-h-40 border text-center rounded-lg relative p-2"
          >
            <strong className="bg-Primary p-2 absolute rounded-b-full rounded-l-full right-0 top-0 text-white">
              {v.count}
            </strong>
            <div className="border">{v.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProfile;
