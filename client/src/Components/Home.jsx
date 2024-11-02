import React from "react";
import Banner from "./Banner";
import Course from "./Course";
import Subscriptions from "./Subscriptions";
import Mentors from "./Mentors";
import Testimonial from "./Testimonials";
import Footer from "./Footer";
import Nav from "./Nav";
import { Outlet, useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation()

  return (
    <>
      <Nav signout={location.state} />
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
