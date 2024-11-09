import {
    ContainerOutlined,
    DashboardOutlined,
    UserOutlined,
  } from "@ant-design/icons";
  import { motion } from "framer-motion";
  import React, { useState } from "react";
  
  const Dashboard = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    // Animation variants for the sidebar
    const menuVariants = {
      open: {
        opacity: 1,
        width: "",
        height:"",  // Adjusted for mobile sidebar width
        transition: {
          duration: 0.2,
          type: "linear",
        },
      },
      closed: {
        opacity: 0,
        width: 0,
        height:0,
        transition: {
          duration: 0.2,
          type: "linear",
        },
      },
    };
  
    const handleMenuClick = () => {
      setIsMenuOpen((prev) => !prev);
    };
  
    return (
      <div className={`flex flex-col lg:flex-row h-screen w-screen ${isMenuOpen && "overflow-hidden"}`}>

        <div className=" lg:flex flex-col items-start lg:bg-Primary ">
            <h1 className="font-bold tracking-widest lg-text-lg p-4 bg-Primary flex text-white items-center lg:w-full">
              <DashboardOutlined className="mr-2 bg-white text-PrimaryDark rounded-full p-2" onClick={handleMenuClick}/>
              Dashboard
            </h1>
        <motion.div
          className={"fixed lg:sticky z-50 top-18 left-0 h-full shadow-lg bg-gray-50 w-full md:w-80"}
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          variants={menuVariants}
          style={{ overflow: "hidden" }}
        >
            <ul className="capitalize ">
              <li className="p-2 bg-gray-100 text-nowrap rounded-md m-2 border hover:border-Primary hover:text-Primary transition-all duration-500">
                <UserOutlined className="mr-2" />
                Instructor Profile
              </li>
              <li className="p-2 bg-gray-100 text-nowrap rounded-md m-2 border hover:border-Primary hover:text-Primary transition-all duration-500">
                <ContainerOutlined className="mr-2" />
                Courses
              </li>
            </ul>
        </motion.div>
        </div>
        <div className="w-full h-full grid grid-rows-[7%_93%] bg-gray-100">
            <div className="bg-white border flex items-center p-4">content</div>
            <div className="bg-white m-3 rounded-lg ">main</div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;
  