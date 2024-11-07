import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import ResetPassword from "./Components/ResetPass";
import ForgotPassword from "./Components/Forgotpass";
import VericicationPage from "./Components/VericicationPage";
import ProfileDetails from "./Components/ProfileDetails";
import MainLayout from "./Components/MainLayout";
import About from "./Components/AboutUs";
// import Courses from "./Components/CourseCatolog";
// import CourseDetails from "./Components/CourseDetails";
// import CourseCatalog from "./Components/CourseCatalog/CourseCatalog";

const Routers = () => {
  return (
    <main className="font-Poppins">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="courses" element={""} />
          {/* <Route path="courses/:id" element={<CourseDetails />} /> */}
          <Route path="profiledetails" element={<ProfileDetails />} />
          <Route path="about" element={<About />} />
        </Route>

        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="forgotpass" element={<ForgotPassword />} />
        <Route path="resetpass/:token" element={<ResetPassword />} />
        <Route path="verify" element={<VericicationPage />} />
      </Routes>
    </main>
  );
};

export default Routers;
