import { FacebookFilled, InstagramFilled, TwitterCircleFilled } from "@ant-design/icons";
import React from "react";

function Footer() {
  return (
    <footer className="w-full">
      <div className="flex flex-wrap pl-10 pt-5 pr-5">
        <div className="w-[350px] md:[500px] flex flex-col gap-5">
          <img src="" alt=""></img>
          <p className="text-sm font-semibold">
            <a href="/">elearning.com</a>
          </p>
          <span className=" font-light text-xs opacity-70 flex flex-col md:text-sm gap-5">
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
        <div className="w-[250px] mb-5 flex flex-col gap-5 md:ml-auto mt-5 md:items-center">
          <p className="text-sm md:text-xl font-semibold">
            Follow us on
          </p>
          <div className="flex gap-5 md:text-xl">
          <FacebookFilled/>
          <TwitterCircleFilled/>
          <InstagramFilled />
          </div>
          

        </div>
      </div>
      <div className="flex w-full justify-center text-sm md:text-xl font-semibold bg-gray-800 text-zinc-300 h-10 items-center">
        <p>| Copyright © 2024 E-Learning </p>
      </div>
    </footer>
  );
}

export default Footer;
