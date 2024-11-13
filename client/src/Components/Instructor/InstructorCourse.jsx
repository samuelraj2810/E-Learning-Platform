import React, { useState } from "react";
import InstructorTable from "./InstructorTable";
import CustomButton from "../Common/CustomButton";
import { PlusOutlined } from "@ant-design/icons";
import { Drawer } from 'antd';
import CustomDrawer from "../Common/CustomDrawer";
import CustomInput from "../Common/CustomInput";

const InstructorCourse = () => {
    const [open, setOpen] = useState(false);
    const [courseData,setCourseData] = useState({courseName:"",price:"" ,})
    const showLargeDrawer = () => {
        setOpen(true);
      };
      const onClose = () => {
        setOpen(false);
      };
      const handleSubmit = () => {
        setOpen(false);
      }
      console.log(courseData);
      
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
      <div className="grid gap-4 md:gap-6 lg:gap-8">
          <CustomInput title="Course" placeholder="Enter course name" className="md:w-fit" containerClassName="p-2 bg-gray-50 flex items-center gap-4" onChange={(e)=>setCourseData({...courseData,courseName:e.target.value})}/>
          <CustomInput title="Price" placeholder="Enter price" className="md:w-fit" containerClassName="p-2 bg-gray-50 flex items-center gap-4" onChange={(e)=>setCourseData({...courseData,price:parseFloat(e.target.value)})}/>
        </div>
      </CustomDrawer>
    </div>
  );
};

export default InstructorCourse;
