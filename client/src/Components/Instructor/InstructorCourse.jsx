import React, { useState } from "react";
import InstructorTable from "./InstructorTable";
import CustomButton from "../Common/CustomButton";
import { PlusOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import CustomDrawer from "../Common/CustomDrawer";
import CustomInput from "../Common/CustomInput";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const InstructorCourse = () => {
  const navigate = useNavigate();

  const handleaddcourse = () => {
    navigate("/instructordashboard/instructorcourse/addCourse");
  };

  return (
    <div className="grid gap-8 lg:gap-12">
      <div className="flex items-center justify-between">
        <h1 className="lg:text-lg font-semibold text-gray-700">All Courses</h1>
        <CustomButton
          title="Create new"
          onClick={handleaddcourse}
          icon={<PlusOutlined />}
          variant="default"
          className="bg-Primary py-5 font-bold tracking-wider text-white capitalize hover:bg-Primary/80"
        />
      </div>
      <InstructorTable />
    </div>
  );
};

export default InstructorCourse;
