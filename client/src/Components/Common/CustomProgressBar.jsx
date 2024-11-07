import { Progress } from "antd";
import React from "react";

const CustomProgressBar = ({
  percent,
  type = "circle",
  className,
  percentPosition,
  size = 30,
  strokeLinecap,
  totalField,
}) => {
  const colors = {
    "0%": "#c0a6f2",
    "10%": "#b58ee5",
    "20%": "#a574d9",
    "30%": "#995bcf",
    "40%": "#8d4bc7",
    "50%": "#7f4bbf",
    "60%": "#6db885",
    "70%": "#64b76e",
    "80%": "#5abf61",
    "90%": "#50b656",
    "100%": "#a4d68c",
  };
  console.log(totalField);
  // const totalFields = 5; // We have 5 fields: username, number, email, password, designation
  // let completedFields = 0;

  // if (userData.username) completedFields++;
  // if (userData.number) completedFields++;
  // if (userData.email) completedFields++;
  // if (userData.password) completedFields++;
  // if (userData.designation) completedFields++;

  // // Add 1 more point if the user is verified
  // if (userData.isVerified) completedFields++;

  // // Calculate percentage
  // const percentage = (completedFields / (totalFields + 1)) * 100;
  return (
    <Progress
      percent={percent}
      //   strokeColor={colors}
      //   status="active"
      type={type}
      percentPosition={percentPosition}
      strokeLinecap={strokeLinecap}
      size={size}
      className={`${className}`}
    />
  );
};

export default CustomProgressBar;
