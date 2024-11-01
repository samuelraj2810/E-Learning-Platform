import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Signup from "./Components/Signup";
import Login from "./Components/Login";

const Routers = () => {
  const routeList = [//{ path: "/", element: <Home /> , menuId:1 },
    { path: "/signup", element: <Signup/> , menuId:1 }
  ];
  return (
    <main className="font-Poppins">
      <Nav />
      <Routes>
        {/* {routeList.map((each) => (
          <Route path={each.path} element={each.element} />
        ))} */}
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </main>
  );
};

export default Routers;
