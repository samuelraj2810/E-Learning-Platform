import React from "react";
import CustomTable from "../../Common/CustomTable";
const Request = () => {
  const header = [{}];
  return (
    <div className="grid gap-4">
      <h1 className="lg:text-2xl text-base font-light text-gray-500 tracking-wide">
        Request
      </h1>
      <CustomTable />
    </div>
  );
};

export default Request;
