import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import ResetPassword from "./Components/ResetPass";
import ForgotPassword from "./Components/Forgotpass";

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
          <Route path="/forgotpass" element={<ForgotPassword />} />
          <Route path="/resetpass/:token" element={<ResetPassword />} />
      </Routes>
    </main>
  );
};

export default Routers;
