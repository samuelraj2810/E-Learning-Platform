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
// import InstructorTable from "./Components/Instructor/InstructorTable";
import AddCourse from "./Components/Instructor/AddCourse";
import EditCourse from "./Components/Instructor/EditCourse";
import Course from "./Components/Student/Course/Course";
import CourseDetails from "./Components/Student/Course/CourseDetails";
import CoursePayment from "./Components/Student/Course/CoursePayment";

const Routers = () => {
  return (
    <main className="font-Poppins">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} /> {/* Default route for / */}
          <Route path="/courses" element={<Course/>} />
          <Route path="/courses/coursedetails/:_id" element={<CourseDetails/>} />
          <Route path="/courses/coursepayment/:_id" element={<CoursePayment/>} />
          <Route path="/profiledetails" element={<ProfileDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpass" element={<ForgotPassword />} />
        <Route path="/resetpass/:token" element={<ResetPassword />} />
        <Route path="/verify" element={<VericicationPage />} />

        <Route path="/instructordashboard" element={<DashBoard />}>
          {/* <Route index element={<InstructorTable/>} /> */}
          <Route path="/instructordashboard" element={<InstructorProfile />} />
          <Route
            path="/instructordashboard/instructorcourse"
            element={<InstructorCourse />}
          />
          <Route
            path="/instructordashboard/instructorcourse/addCourse"
            element={<AddCourse />}
          />
          <Route
            path="/instructordashboard/instructorcourse/editCourse"
            element={<EditCourse />}
          />
          <Route path="/instructordashboard" element={<InstructorProfile />} />
          
        </Route>

        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </main>
  );
};

export default Routers;
