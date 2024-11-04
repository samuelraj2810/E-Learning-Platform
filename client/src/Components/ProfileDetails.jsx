import React, { useEffect, useState } from "react";
import CustomInput from "./Common/CustomInput";
import { GET } from "./ApiFunction/ApiFunction";
import CustomButton from "./Common/CustomButton";

const ProfileDetails = () => {
  const [token, setToken] = useState(null);
  const [data, setData] = useState([]);
  const titles = [
    "username",
    "email",
    "gender",
    "address",
    "number",
    "designation",
  ];
  const [isLoading, setIsLoading] = useState(true);
  const [isupdate, setIsupdate] = useState(true);
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
  const handleButtonClick = () => {
    setIsupdate((p) => !p);
  };
  return (
    <div className="h-fit bg-gray-100 max-w-screen p-4">
      <form className="my-10 shadow bg-white lg:mx-auto flex flex-col md:flex-row md:gap-20 gap-10 rounded-lg p-4 lg:p-6">
        <div className="flex gap-4 justify-between md:flex-col h-fit">
          <h1 className="lg:text-2xl font-bold">Profile details</h1>
          <CustomButton
            title={isupdate ? "update" : "Submit"}
            onClick={handleButtonClick}
            className={` text-xs ${
              isupdate && "bg-green-500"
            } capitalize tracking-wider`}
            color="solid"
          />
        </div>
        <div className="md:flex-1 flex flex-col gap-4">
          {titles.map((title) => (
            <CustomInput
              disabled={isupdate}
              className="text-xs lg:text-base"
              containerClassName="mx-2"
              titleClassName="text-xs lg:text-base"
              title={title}
              value={data.length > 0 ? data[0][title] : ''}
            />
          ))}
        </div>
        <div className="md:flex-1 flex flex-col gap-4">
          {titles.map((title) => (
            <CustomInput
              disabled={isupdate}
              className="text-xs lg:text-base"
              containerClassName="mx-2"
              titleClassName="text-xs lg:text-base"
              title={title}
              value={data.length > 0 ? data[1][title] : ''}
            />
          ))}
        </div>
      </form>
    </div>
  );
};

export default ProfileDetails;
