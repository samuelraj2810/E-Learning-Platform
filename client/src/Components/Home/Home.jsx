import React, { useEffect } from "react";
import Banner from "./Banner";
import Course from "./Course";
import Subscriptions from "./Subscriptions";
import Mentors from "./Mentors";
import Testimonial from "./Testimonials";

const Home = () => {
    useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Banner />
      <Course />
      <Subscriptions />
      <Mentors />
      <Testimonial />
    </>
  );
};

export default Home;
