import React from "react";

function Footer() {
  return (
    <footer className="w-full">
      <div className="flex flex-wrap pl-10 pt-5  ">
        <div className="md:max-w-[400px] flex flex-col gap-5">
          <img src=""></img>
          <p className="text-sm font-semibold">
            <a>elearning.com</a>
          </p>
          <span className="text-sm font-light opacity-70 flex flex-col gap-5">
            <p>No.1 and most visited website for Placements in India.</p>
            <p>
              We help students to prepare for placements with the best study
              material, online classes, Sectional Statistics for better focus
              and Success stories & tips by Toppers on Elearning.
            </p>
            <p>Elearnng Powered by Honeybee Private Limited</p>
            <p>© 2024 elearning</p>
            </span>
        </div>
      </div>
      <div className="flex w-full justify-center md:text-xl font-semibold bg-gray-800 text-zinc-300 h-10 items-center">
        <p>| Copyright © 2024 E-Learning </p>
      </div>
    </footer>
  );
}

export default Footer;
