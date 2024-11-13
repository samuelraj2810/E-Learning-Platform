import React, { useState } from "react";
import InstructorTable from "./InstructorTable";
import CustomButton from "../Common/CustomButton";
import { PlusOutlined } from "@ant-design/icons";
import { Drawer } from 'antd';
import CustomDrawer from "../Common/CustomDrawer";

const InstructorCourse = () => {
    const [open, setOpen] = useState(false);
    const showLargeDrawer = () => {
        setOpen(true);
      };
      const onClose = () => {
        setOpen(false);
      };
      const handleSubmit = () => {
        setOpen(false);
      }
  return (
    <div className="grid gap-8 lg:gap-12">
      <div className="flex items-center justify-between">
        <h1 className="lg:text-lg font-semibold text-gray-700">All Courses</h1>
        <CustomButton
          title="Create new"
          onClick={showLargeDrawer}
          icon={<PlusOutlined />}
          variant="default"
          className="bg-Primary py-5 font-bold tracking-wider text-white capitalize hover:bg-Primary/80"
        />
      </div>
      <InstructorTable />
      <CustomDrawer open={open} onClose={onClose} onSubmit={handleSubmit} title="Create New Course">
      <div className="grid gap-4">
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </div>
      </CustomDrawer>
    </div>
  );
};

export default InstructorCourse;
