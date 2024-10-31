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
      height: "100%",
      width: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 0,
      height: "auto",
      width: "fit-content",
    },
  };

  const handleMenuClick = () => {
    setIsMenu((p) => !p);
  };

  return (
    <nav className="sticky bg-white top-0 font-poppins font-semibold flex h-[10vh] shadow-md px-2 z-40">
      <div className="md:w-3/5 p-2 flex items-center w-full">
        <h1 className="">Logo</h1>
        <span className={isMenu ? "hidden" : "fixed right-4"}>
          <MenuOutlined
            onClick={handleMenuClick}
            className={`md:hidden ml-auto`}
          />
        </span>
      </div>
      <div
        className={`md:w-2/5 p-2 md:flex flex-col md:flex-row md:justify-between items-center hidden`}
      >
        {navList.map((each) => (
          <h1 key={each.id}>{each.title}</h1>
        ))}
      </div>
      <motion.div
        className={`flex fixed top-0 right-0 p-4 gap-4 flex-col items-end md:hidden`}
        initial="closed"
        animate={isMenu ? "open" : "closed "}
        variants={menuVariants}
      >
        <span className={isMenu ? "block" : "hidden"}>
          <CloseOutlined onClick={handleMenuClick} className="md:hidden" />
        </span>
        {navList.map((each) => (
          <h1 key={each.id} className={isMenu ? "block" : "hidden"}>
            {each.title}
          </h1>
        ))}
      </motion.div>
    </nav>
  );
};

export default Home;
