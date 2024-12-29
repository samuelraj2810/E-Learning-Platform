import React, { useState } from "react";
import CustomInput from "../../Common/CustomInput";
import CustomButton from "../../Common/CustomButton";
import { FilterOutlined } from "@ant-design/icons";
import CustomDrawer from "../../Common/CustomDrawer";

const Filter = ({onChange=()=>{}}) => {
    const [openDrawer,setOpenDrawer] = useState(false)
    const handleDrawerClose = () => {
        setOpenDrawer(false)
    }
    const handleDrawerSubmit = () => {
        handleDrawerClose()
    }
  return (
    <div className="grid grid-flow-col md:grid-flow-row justify-between md:items-start px-2 py-4 w-full md:w-fit md:px-4 lg:px-8 bg-white md:h-full h-fit">
      <CustomInput
        placeholder="Filter by course title"
        className="p-2 h-full w-full"
        title="Filter"
        onChange={onChange}
      />
      <CustomButton
        title="Filter"
        className="md:hidden h-full w-fit border-black"
        variant="outlined"
        icon={<FilterOutlined />}
        onClick={()=>setOpenDrawer(true)}
      />
      <CustomDrawer open={openDrawer} onClose={handleDrawerClose} onSubmit={handleDrawerSubmit}/> 
    </div>
  );
};

export default Filter;
