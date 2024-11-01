import React from "react";
import Banner from "./Banner";
import Course from "./Course";
import Subscriptions from "./Subscriptions";
import Mentors from "./Mentors";
import Testimonial from "./Testimonials";
import Footer from "./Footer";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Nav/>
      <Outlet/>
      <Banner />
      <Course />
      <Subscriptions />
      <Mentors />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
