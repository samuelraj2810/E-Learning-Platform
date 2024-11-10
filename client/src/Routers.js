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
import DashBoard from "./Components/Instructor/Dashboard"; 
import InstructorProfile from "./Components/Instructor/InstructorProfile";
import InstructorCourse from "./Components/Instructor/InstructorCourse";
import InstructorTable from "./Components/Instructor/InstructorTable";

const Routers = () => {
  return (
    <main className="font-Poppins">
      <Routes>
        {/* Main layout with nested routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} /> {/* Default route for / */}
          <Route path="/courses" element={<div>Courses Page</div>} />
          <Route path="/profiledetails" element={<ProfileDetails />} />
        </Route>

        {/* Authentication routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpass" element={<ForgotPassword />} />
        <Route path="/resetpass/:token" element={<ResetPassword />} />
        <Route path="/verify" element={<VericicationPage />} />

        {/* Instructor Dashboard */}
        <Route path="/instructordashboard" element={<DashBoard />}>
          {/* <Route index element={<InstructorTable/>} /> */}
          <Route path="/instructordashboard" element={<InstructorProfile/>} />
          <Route path="/instructordashboard/instructorcourse" element={<InstructorCourse/>} />
        </Route>
      </Routes>
    </main>
  );
};

export default Routers;
