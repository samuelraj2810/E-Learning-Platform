import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "./Common/CustomInput";
import { useMessageContext } from "./Common/CustomMessage";
import CustomButton from "./Common/CustomButton";
import signUpImg from "../Assets/Images/signup.png";
import signUpLogo from "../Assets/Icons/signupLogo.gif";
function Signup() {
  const showMessage = useMessageContext();
  const [registerData, setRegisterData] = useState({
    username: "",
    number: "",
    email: "",
    designation: "",
    password: "",
    cnfpassword: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.cnfpassword) {
      alert("password do not match");
      return;
    }
    if (registerData.number.length < 10) {
      return showMessage("warning", result.message);
    }
    const result = await axios.post(
      "http://localhost:3000/register",
      registerData
    );
    try {
      if (result.status === 200) {
        showMessage("success", result.data.message);
        navigate("/login")
      } else if (result.status === 409) {
        showMessage("warning", result.data.message);
      }
    } catch (e) {
      showMessage("error", result.data.message);
    }
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-end h-screen relative w-full md:p-10">
      <img
        src={signUpImg}
        className="object-cover absolute bg-gradient-to-r from-gray-200 to-white h-full md:w-1/2 lg:w-9/12 top-0 left-0"
      />
      <form
        className="flex flex-col gap-10 z-40 bg-[#ffffffe3] md:w-1/2 lg:w-3/12  w-full p-4"
      >
        <h1 className="text-center font-extrabold tracking-wider md:text-left md:text-3xl text-xl">
          <span className="text-3xl md:text-[50px] text-Primary">s</span>ign up
        </h1>
        <CustomInput
          className="p-2"
          title="Name"
          required={true}
          type="text"
          placeholder="enter your name"
          onChange={(e) =>
            setRegisterData((p) => ({ ...p, username: e.target.value }))
          }
        />
        <CustomInput
          className="p-2"
          title="Phone number"
          required={true}
          type="number"
          placeholder="enter your number"
          onChange={(e) =>
            setRegisterData((p) => ({ ...p, number: parseInt(e.target.value) }))
          }
        />
        <CustomInput
          className="p-2"
          title="Email"
          required={true}
          type="email"
          placeholder="enter your mail"
          onChange={(e) =>
            setRegisterData((p) => ({ ...p, email: e.target.value }))
          }
        />
        <CustomInput
          className="p-2"
          title="Create password"
          required={true}
          type="password"
          placeholder="enter your password"
          onChange={(e) =>
            setRegisterData((p) => ({ ...p, password: e.target.value }))
          }
        />
        <CustomInput
          className="p-2"
          title="Confirm password"
          required={true}
          type="password"
          placeholder="Confirm password"
          onChange={(e) =>
            setRegisterData((p) => ({ ...p, cnfpassword: e.target.value }))
          }
        />
        <CustomInput
          className="p-2"
          title="Designation"
          required={true}
          type="text"
          placeholder="desg - srudent,professiional,fresher"
          onChange={(e) =>
            setRegisterData((p) => ({ ...p, designation: e.target.value }))
          }
        />
        <div>
          <CustomButton title="submit" color="solid" onClick={handleSubmit}/>
          <Link to="/login"><CustomButton title="Back" className="mx-4 text-Primary tracking-wider" variant="link" color="solid" /></Link>
        </div>
      </form>
    </div>
  );
}
export default Signup;
