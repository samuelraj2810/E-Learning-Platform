import React, { useState } from "react";
import loginImg from "../Assets/Images/login.png";
import CustomInput from "./Common/CustomInput";
import LoginIcon from "../Assets/Icons/login.gif";
import CustomButton from "./Common/CustomButton";
import loginLeftImage from "../Assets/Images/loginbg.jpg"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { POST } from "./ApiFunction/ApiFunction";
const Login = () => {
  const navigate = useNavigate()
  const [loginData,setLoginData] = useState({
    email:null,
    password:null,
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({...prevData, [name]: value }));
  }
  const handleSubmit = async(e) =>{
    e.preventDefault()
   const result = await POST("http://localhost:3000/login",loginData)
   if(result.status === 200){
    navigate("/")
   }
  }
  return (
    <div className="font-Poppins flex h-screen tracking-wider ">
      <div className="h-full w-1/2 md:w-2/5 lg:w-1/2 bg-gray-400 hidden md:block">
        <img src={loginLeftImage} className=" object-cover h-full w-full"/>
      </div>
      <div className="text-3xl font-bold w-full md:w-4/5 lg:w-1/2 h-[100vh] flex items-center gap-4 justify-center relative">
        <img
          src={loginImg}
          alt="NoImage"
          className="absolute object-cover h-full rotate-180 w-full top-0"
        />
        <form className="md:h-[80vh] bg-gradient-to-b from-transparent to-white p-4 w-full md:w-4/5 flex flex-col gap-10 z-40  md:p-10" autoComplete={false}>
          <h1 className="lg:text-[60px] h-1/5 text-[40px] md:text-left p-4 md:p-0 relative w-full text-center">
            Login
          </h1>
          <CustomInput
            className="w-4/5 md:w-11/12 lg:w-4/5 mx-auto p-2"
            variant="filled"
            type="text"
            title="Email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            placeholder="Enter Email"
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
          />
          <div className="flex">
          <CustomButton title="forgot password" className={`py-1`} color="danger" variant="link" size="small"/>
          </div>
          <div className="mt-4 flex items-center">
          <CustomButton title="login" className="py-1" color="primary" size="large" onClick={handleSubmit}/>
          <small className="text-base ml-auto">Create Account</small>
          <Link to="/signup"><CustomButton title="signup" className="py-1 ml-4 text-Primary" variant="text" size="large"/></Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
