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
// import CourseDetails from "./Components/CourseDetails/CourseDetails";
// import CourseCatalog from "./Components/CourseCatalog/CourseCatolog";
// import Payment from "./Components/Payment"; // Payment Component
// import LearningProgress from "./Components/LearningProgress"; // Learning Progress Component

const Routers = () => {
  return (
    <main className="font-Poppins">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="courses" element={""} />
          <Route path="courses/:id" element={""} />
          <Route path="profiledetails" element={<ProfileDetails />} />
          <Route path="about" element={<About />} />
          {/* Add route for Learning Progress */}
          {/* <Route path="learning-progress" element={<LearningProgress />} /> */}
          {/* Add route for Payment */}
          {/* <Route path="payment" element={<Payment />} /> */}
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
