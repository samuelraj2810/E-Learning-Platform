import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");
  const [password, setPassword] = useState("");
  const [cnfpassword, setCnfpassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (number.length !== 10) {
      return alert("enter 10 digits");
    }
    if (password !== cnfpassword) {
      alert("password do not match");
      return;
    }

    await axios
      .post("http://localhost:3000/register", {
        name,
        number,
        email,
        password,
        designation,
      })
      .then((result) => {
        console.log(result.data.message);
        if (result.data.message === "Successfull") {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-center mt-20">
      <form onSubmit={handleSubmit} className="flex flex-col gap-10 w-[300px]">
        <input
          className="border 2"
          type="text"
          placeholder="enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border 2"
          type="number"
          placeholder="enter your number"
          onChange={(e) => setNumber(e.target.value)}
        />
        <input
          className="border 2"
          type="email"
          placeholder="enter your mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border 2"
          type="password"
          placeholder="enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="border 2"
          type="password"
          placeholder="Confirm password"
          onChange={(e) => setCnfpassword(e.target.value)}
        />
        <input
          className="border 2"
          type="text"
          placeholder="desg - srudent,professiional,fresher"
          onChange={(e) => setDesignation(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Signup;
