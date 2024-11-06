import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Signup from "./Components/Authentication/Signup";
import Login from "./Components/Authentication/Login";
import ResetPassword from "./Components/Authentication/ResetPass";
import ForgotPassword from "./Components/Authentication/Forgotpass";
import VericicationPage from "./Components/Authentication/VericicationPage";
import ProfileDetails from "./Components/Home/ProfileDetails";
import MainLayout from "./Components/Home/MainLayout";

const Routers = () => {
  return (
    <main className="font-Poppins">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home/>}/>
          <Route path="/courses" element={""}/>
          <Route path="/profiledetails" element={<ProfileDetails/>}/>
          <Route path="" element={""}/>
        </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpass" element={<ForgotPassword />} />
          <Route path="/resetpass/:token" element={<ResetPassword />} />
          <Route path="/verify" element={<VericicationPage/>} />
      </Routes>
    </main>
  );
};

export default Routers;
