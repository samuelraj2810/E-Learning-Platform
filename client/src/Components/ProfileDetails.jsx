import React, { useEffect, useState } from "react";
import CustomInput from "./Common/CustomInput";
import { GET } from "./ApiFunction/ApiFunction";

const ProfileDetails = () => {
  const [token, setToken] = useState(null);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(data);
  const fetchData = async () => {
    try {
      const result = await GET("http://localhost:3000/getData");
      const modifiedResult = result?.data?.map((each) => ({
        ...each,
        disable: false,
      }));
      setData(modifiedResult || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
    setToken(localStorage.getItem("token"));
  }, []);

  return (
    <div className="h-screen max-w-screen p-4">
      <h1 className="lg:text-2xl font-bold my-4">Profile details</h1>
      <form className="mt-10 border lg:w-4/5 lg:mx-auto flex flex-col md:gap-20 gap-10 md:flex-row rounded-lg p-2 md:p-4 lg:p-6">
        <div className="md:flex-1 grid gap-4">
          {data?.slice(0,1).map((user) =>
            Object.keys(user).map((key) => (
              <CustomInput
                key={user._id + key} // Ensure each key is unique
                className=""
                title={key} // Use the key as the title
                value={user[key]} // Use the value for the corresponding key
                // onChange={(value) => handleChange(user._id, key, value)} // Update function
              />
            ))
          )}
        </div>
        <div className="md:flex-1 grid gap-4">
        {data?.slice(1,2).map((user) =>
            Object.keys(user).map((key) => (
              <CustomInput
                key={user._id + key} // Ensure each key is unique
                className=""
                title={key} // Use the key as the title
                value={user[key]} // Use the value for the corresponding key
                // onChange={(value) => handleChange(user._id, key, value)} // Update function
              />
            ))
          )}
        </div>
      </form>
    </div>
  );
};

export default ProfileDetails;
