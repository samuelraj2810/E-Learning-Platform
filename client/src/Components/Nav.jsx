import React, { useState } from "react";
import { motion } from "framer-motion";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import {Link} from "react-router-dom"

const Nav = ({signout}) => {
  const [isMenu, setIsMenu] = useState(false);
  const [signOut, setSignOut] = useState(signout || false);
  const navList = [
    { id: 1, to: "/", title: "Home" },
    { id: 2, to: "/courses", title: "Courses" },
    { id: 3, to: "/about", title: "About" },
    { id: 4, to: "/contact", title: "Contact" },
    signOut === true ?
    { id: 5, to: null, title: "profile" }
    :
    { id: 6, to: "/login", title: "Login" },
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
    <nav className="sticky lg:text-xl text-gray-700 bg-white top-0 font-poppins flex h-[10vh] shadow-md px-2 z-40">
      <div className="p-2 flex items-center w-full">
        <h1 className="">Logo</h1>
        <span className={isMenu ? "hidden" : "fixed right-4 p-1 z-40"}>
          <MenuOutlined onClick={handleMenuClick} className={`md:hidden `} />
        </span>
      </div>
      <div
        className={`capitalize tracking-wider w-full p-2 md:flex flex-col md:flex-row md:justify-between items-center hidden`}
      >
        {navList.map((each) => (
          <Link to={each.to} key={each.id} className="hover:text-black scale-100 transition-all hover:drop-shadow duration-500">{each.title}</Link>
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
            <Link to={each.to}
              key={each.id}
              className={
                isMenu
                  ? "block capitalize py-2 tracking-wider font-light w-full text-gray-700 bg-gray-50 rounded-lg"
                  : "hidden"
              }
            >
              {each.title}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Nav;
