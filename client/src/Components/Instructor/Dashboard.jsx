import {
  ContainerOutlined,
  DashboardOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import InstructorProfile from "./InstructorProfile";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { GET } from "../ApiFunction/ApiFunction";

const Dashboard = () => {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuId, setMenuId] = useState(1);
  const [instructorName, setInstructorName] = useState("- - -");
  const fetchData = async() => {
    const result = await GET("http://localhost:3000/getinsdata")
    setInstructorName(result[0].name)
  }
  useEffect(()=>{
    fetchData()
  },[])
  console.log(instructorName)
  const navList = [
    { id: 1, to: "/instructordashboard", title: "Instructor Profile",icon:<UserOutlined className="mr-2" />},
    { id: 2, to: "/instructordashboard/instructorcourse", title: "Courses" ,icon:<ContainerOutlined className="mr-2" />},
  ];

  // Animation variants for the sidebar
  const menuVariants = {
    open: {
      opacity: 1,
      width: "", // Adjusted for mobile sidebar width
      backgroundColor: "white",
      transition: {
        duration: 0.2,
        type: "linear",
      },
    },
    closed: {
      opacity: 1,
      width: 0,
      backgroundColor: "white",
      transition: {
        duration: 0.2,
        type: "linear",
      },
    },
  };

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const handleSignOut = () => {
    sessionStorage.clear()
    navigate("/login")
  }
  return (
    <div
      className={`flex flex-col lg:flex-row h-screen w-screen ${
        isMenuOpen && "overflow-hidden"
      }`}
    >
      <div className=" lg:flex items-start lg:bg-Primary ">
        <h1 className="font-bold tracking-widest lg-text-lg p-4 bg-Primary flex text-white lg:w-fit items-center w-full">
          <DashboardOutlined
            className="mr-2 bg-white text-PrimaryDark rounded-full p-2"
            onClick={handleMenuClick}
          />
          <span className={` lg:hidden`}>Dashboard</span>
          <LogoutOutlined  className="text-white ml-auto lg:hidden bg-red-500 p-2 rounded-full" onClick={handleSignOut}/>
        </h1>
        <motion.div
          className={
            "fixed lg:sticky z-50 top-18 left-0 h-full shadow-lg w-full md:w-fit"
          }
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          variants={menuVariants}
          style={{ overflow: "hidden" }}
        >
          <h1 className="hidden lg:flex justify-center border-b-2 p-4 lg:mt-1 tracking-widest text-lg font-bold ">
            Dashboard
          </h1>
          <ul className="capitalize flex flex-col m-4">
            {navList.map((each)=>
            <Link to={each.to} key={each.id} onClick={()=>setMenuId(each.id)}>
            <li className={`p-2 text-nowrap rounded-md m-2 border ${menuId === each.id ? "text-Primary bg-Primary/5" : "bg-gray-100/10"} hover:border-Primary hover:text-Primary transition-all duration-500`}>
              {each.icon}
              {each.title}
            </li>
            </Link>)}
          </ul>
        </motion.div>
      </div>
      <div className="w-full shadow-lg h-full grid grid-rows-[7%_93%] bg-Primary/5 overflow-hidden">
        <div className="bg-white border-b-2 flex items-center justify-end gap-2 p-4 sticky top-0 ">
          <h1 className="mr-auto">{instructorName}</h1>
          <LogoutOutlined  className="text-white hidden lg:block bg-red-500 p-2 rounded-full" onClick={handleSignOut}/>
        </div>
        <div className="bg-white m-3 mr-0 shadow-lg rounded-lg p-4 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
