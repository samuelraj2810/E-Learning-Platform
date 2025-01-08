import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Student/Home/Home";
import Signup from "./Components/Authentication/Signup";
import Login from "./Components/Authentication/Login";
import ResetPassword from "./Components/Authentication/ResetPass";
import ForgotPassword from "./Components/Authentication/Forgotpass";
import VericicationPage from "./Components/Authentication/VericicationPage";
import ProfileDetails from "./Components/Student/Home/ProfileDetails";
import MainLayout from "./Components/Student/Home/MainLayout"; 
import DashBoard from "./Components/Instructor/Dashboard"; 
import InstructorProfile from "./Components/Instructor/InstructorProfile";
import InstructorCourse from "./Components/Instructor/InstructorCourse";
import InstructorTable from "./Components/Instructor/InstructorTable";
import AddCourse from "./Components/Instructor/AddCourse";
import EditCourse from "./Components/Instructor/EditCourse";
import Course from "./Components/Student/Course/Course";
import CourseDetails from "./Components/Student/Course/CourseDetails";
import CoursePayment from "./Components/Student/Course/CoursePayment";
import AdminProfile from "./Components/Admin/AdminProfile";

const Routers = () => {
  return (
    <main className="font-Poppins">
      <Routes>
        {/* Main layout with nested routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} /> {/* Default route for / */}
          <Route path="/courses" element={<Course/>} />
          <Route path="/courses/coursedetails/:_id" element={<CourseDetails/>} />
          <Route path="/courses/coursepayment/:_id" element={<CoursePayment/>} />
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
          <Route path="/instructordashboard/instructorcourse/addCourse" element={<AddCourse/>} />
          <Route path="/instructordashboard/instructorcourse/editCourse" element={<EditCourse/>} />
        </Route>
        <Route path="/adminpanel" element={<DashBoard />}>
          <Route path="/adminpanel/profile" element={<AdminProfile/>} />
        </Route>
      </Routes>
    </main>
  );
};

export default Routers;
