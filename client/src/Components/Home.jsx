import React from "react";
import Banner from "./Banner";
import Course from "./Course";
import Subscriptions from "./Subscriptions";
import Mentors from "./Mentors";
import Testimonial from "./Testimonials";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
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
