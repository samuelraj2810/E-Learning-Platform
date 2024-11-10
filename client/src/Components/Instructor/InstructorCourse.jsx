import React, { useState } from "react";
import InstructorTable from "./InstructorTable";
import CustomButton from "../Common/CustomButton";
import { PlusOutlined } from "@ant-design/icons";
import { Drawer } from 'antd';

const InstructorCourse = () => {
    const [open, setOpen] = useState(false);
    const showLargeDrawer = () => {
        setOpen(true);
      };
      const onClose = () => {
        setOpen(false);
      };
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
      <Drawer
        title={
          <h1 className="capitalize text-xl text-PrimaryDark rounded-lg py-2">
            Create new course
          </h1>
        }
        placement="left"
        closable={false}
        width={"100%"}
        onClose={onClose}
        open={open}
        footer={
          <div className="flex p-2 gap-4 justify-end">
            <CustomButton
              title="cancel"
              size="large"
              variant="outlined"
              onClick={onClose}
            />
            <CustomButton
              title="submit"
              size="large"
              className="bg-Primary text-white"
              variant="default"
              onClick={onClose}
            />
          </div>
        }
      >
        <div className="grid gap-4">
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </div>
      </Drawer>
    </div>
  );
};

export default InstructorCourse;
