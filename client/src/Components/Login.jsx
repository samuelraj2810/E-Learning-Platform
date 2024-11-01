import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, } from "react-router-dom";
function Login() {
  const [loginemail, setLoginemail] = useState("");
  const [loginpassword, setLoginpassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3000/login", {
        email:loginemail,
        password:loginpassword
      })
      .then((result) => {
        console.log(result.data.message);
        if (result.data.message === "Success") {
          navigate("/home");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="flex justify-center mt-20">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-10 w-[300px]"
        >
          <input
            className="border 2"
            type="email"
            placeholder="enter your mail"
            onChange={(e) => setLoginemail(e.target.value)}
          />
          <input
            className="border 2"
            type="password"
            placeholder="enter your password"
            onChange={(e) => setLoginpassword(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
