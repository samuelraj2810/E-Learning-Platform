import { DashboardOutlined } from "@ant-design/icons";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex h-screen w-screen bg-gray-200">
      <div className="bg-white shadow-lg grid grid-rows-[10%_90%]">
        <h1 className="font-bold tracking-widest lg:text-2xl p-4 bg-Primary text-white flex items-center">
          <DashboardOutlined className="mr-2" />
          Dashboard
        </h1>
        <div className="border m-2">content</div>
      </div>
      <div className="p-2">2</div>
    </div>
  );
};

export default Dashboard;
