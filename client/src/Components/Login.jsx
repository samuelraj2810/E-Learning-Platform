import React, { useState } from "react";
import loginImg from "../Assets/Images/login.png";
import CustomInput from "./Common/CustomInput";
import LoginIcon from "../Assets/Icons/login.gif";
import CustomButton from "./Common/CustomButton";
const Login = () => {
  const [loginData,setLoginData] = useState({
    username:"",
    password:""
  })
  const handleReset = () => {
    setLoginData({username:"",password:""})
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ [name]: value }));
  }
  console.log(loginData)
  return (
    <div className="font-Poppins flex h-screen tracking-wider ">
      <div className="h-full w-1/2 md:w-2/5 lg:w-1/2 bg-gray-400 hidden md:block">
        1
      </div>
      <div className="text-3xl font-bold w-full md:w-4/5 lg:w-1/2 h-[100vh] flex items-center gap-4 justify-center relative">
        <img
          src={loginImg}
          alt="NoImage"
          className="absolute object-cover h-full w-full top-0"
        />
        <form className="md:h-[80vh] p-4 w-full md:w-4/5 flex flex-col gap-10 border z-40 bg-gradient-to-t from-white to-gray-50 md:p-10">
          <h1 className="lg:text-[60px] h-1/5 text-[40px] md:text-left p-4 md:p-0 relative w-full text-center">
            Login
            <img src={LoginIcon} className="hidden md:block md:h-20 absolute top-0 right-0" />
          </h1>
          <CustomInput
            className="w-4/5 md:w-11/12 lg:w-4/5 mx-auto p-2"
            variant="filled"
            type="text"
            title="username/Email"
            name="username"
            value={loginData.username}
            onChange={handleChange}
            placeholder="Enter Email or Username"
            required={true}
          />
          <CustomInput
            className="w-4/5 md:w-11/12 lg:w-4/5 mx-auto p-2"
            variant="filled"
            type="password"
            title="password"
            onChange={handleChange}
            name="password"
            value={loginData.password}
            placeholder="Enter Password"
            required={true}
          />
          <div className="flex justify-between">
          <CustomButton title="forgot password" className="py-1" color="danger" variant="link" size="small"/>
          <CustomButton title="reset" onClick={handleReset} className="py-1 ml-auto" color="solid" variant="outlined" size="small"/>
          </div>
          <div className="mt-4">
          <CustomButton title="login" className="py-1" color="primary" size="large"/>
          <CustomButton title="signup" className="py-1 ml-4" variant="filled" size="large"/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
