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
      setData(result?.data || []);
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
            {data?.map((each)=><CustomInput className="" title={each.key} />)}
        </div>
        <div className="md:flex-1 grid gap-4">
          <CustomInput className="" />
        </div>
      </form>
    </div>
  );
};

export default ProfileDetails;
