import React, { useState } from "react";
import { motion } from "framer-motion";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";

const Home = () => {
  const [isMenu, setIsMenu] = useState(false);
  const navList = [
    { id: 1, to: "", title: "home" },
    { id: 2, to: "", title: "courses" },
    { id: 2, to: "", title: "about" },
    { id: 2, to: "", title: "contact" },
    { id: 2, to: "", title: "login" },
  ];

  const menuVariants = {
    open: {
      opacity: 1,
      backgroundColor: "#ffffff",
      height: "100%",
      width: "100%",
      transition: {
        duration: 0.3,
        type: "linear",
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      width: 0,
      transition: {
        duration: 0.8,
        type: "linear",
      },
    },
  };

  const handleMenuClick = () => {
    setIsMenu((p) => !p);
  };

  return (
    <nav className="sticky bg-white top-0 font-poppins font-semibold flex h-[10vh] shadow-md px-2 z-40">
      <div className="md:w-3/5 p-2 flex items-center w-full">
        <h1 className="">Logo</h1>
        <span className={isMenu ? "hidden" : "fixed right-4 p-1 z-40"}>
          <MenuOutlined onClick={handleMenuClick} className={`md:hidden `} />
        </span>
      </div>
      <div
        className={`lg:w-2/5 capitalize w-full p-2 md:flex flex-col md:flex-row md:justify-between items-center hidden`}
      >
        {navList.map((each) => (
          <h1 key={each.id}>{each.title}</h1>
        ))}
      </div>
      <motion.div
        className={`flex fixed z-10 top-0 right-0 flex-col items-end md:hidden`}
        initial="closed"
        animate={isMenu ? "open" : "closed "}
        variants={menuVariants}
      >
        <h1 className={"flex items-center justify-between text-lg p-4 w-full"}>
          <span className="text-indigo-600">Menu</span>
          <CloseOutlined onClick={handleMenuClick} className="md:hidden" />
        </h1>
        <div className="flex gap-4 p-4 border-t flex-col w-full">
          {navList.map((each) => (
            <h1
              key={each.id}
              className={
                isMenu
                  ? "block capitalize py-2 tracking-wider w-full text-gray-700 bg-gray-50 rounded-lg"
                  : "hidden"
              }
            >
              {each.title}
            </h1>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Home;
