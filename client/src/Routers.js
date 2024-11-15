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
import About from "./Components/AboutUs";
import CoursesCatalog from "./Components/CoursesCatalog/Coursecatalog";
import CourseDetails from "./Components/CourseDetails/CourseDetails";
import DashBoard from "./Components/Instructor/Dashboard";
import InstructorProfile from "./Components/Instructor/InstructorProfile";
import InstructorCourse from "./Components/Instructor/InstructorCourse";
import AdminPanel from "./Components/AdminPanel/AdminPanel";

const Routers = () => {
  return (
    <main className="font-Poppins">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/courses" element={<CoursesCatalog />} />
          <Route path="/courses/:courseId" element={<CourseDetails />} />
          <Route path="/profiledetails" element={<ProfileDetails />} />
          <Route path="/about" element={<About />} />
        </Route>

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpass" element={<ForgotPassword />} />
        <Route path="/resetpass/:token" element={<ResetPassword />} />
        <Route path="/verify" element={<VericicationPage />} />

        <Route path="/instructordashboard" element={<DashBoard />}>
          <Route path="/instructordashboard" element={<InstructorProfile />} />
          <Route
            path="/instructordashboard/instructorcourse"
            element={<InstructorCourse />}
          />
        </Route>

        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </main>
  );
};

export default Routers;
