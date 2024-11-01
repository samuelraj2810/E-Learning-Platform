import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Signup from "./Components/Signup";
import Login from "./Components/Login";

const Routers = () => {
  return (
    <main className="font-Poppins">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={""}/>
          <Route path="" element={""}/>
          <Route path="" element={""}/>
          <Route path="" element={""}/>
        </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
};

export default Routers;
