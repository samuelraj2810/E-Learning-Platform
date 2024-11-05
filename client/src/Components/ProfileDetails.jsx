import React, { useEffect, useState } from "react";
import CustomInput from "./Common/CustomInput";
import { GET, POST } from "./ApiFunction/ApiFunction";
import CustomButton from "./Common/CustomButton";
import { Radio, Switch } from "antd";
import { useCustomMessage } from "./Common/CustomMessage";
import TextArea from "antd/es/input/TextArea";

const ProfileDetails = () => {
  const showMessage = useCustomMessage();
  const [token, setToken] = useState(null);
  const [data, setData] = useState([]);
  const options = [
    {
      label: "male",
      value: "male",
    },
    {
      label: "female",
      value: "female",
    },
    {
      label: "other",
      value: "other",
    },
  ];
  const titles = [
    "username",
    "email",
    "gender",
    "address",
    "number",
    "designation",
  ];
  const [isLoading, setIsLoading] = useState(false);
  const [isupdate, setIsupdate] = useState(true);
  const [value1, setValue1] = useState("Apple");
  console.log(data);
  const onChange1 = ({ target: { value } }) => {
    console.log("radio1 checked", value);
    setValue1(value);
  };
  const fetchData = async () => {
    setIsLoading(true);
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
  const postData = async () => {
    setIsLoading(true);
    try {
      const result = await POST("http://localhost:3000/register", data);
      if (result.status === 200) {
        setIsLoading(false);
        fetchData();
        showMessage("success", "Data added successfully");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleInputChange = (title, value) => {
    setData((prevData) => {
      const updatedData = [...prevData];
      updatedData[0] = {
        ...updatedData[0],
        [title]: value,
      };
      return updatedData;
    });
  };

  useEffect(() => {
    fetchData();
    setToken(sessionStorage.getItem("token"));
  }, []);

  const handleButtonClick = () => {
    postData();
  };
  return (
    <form className="overflow-hidden bg-white lg:mx-auto flex flex-col rounded-lg p-4 lg:p-6">
      <div className="flex gap-4 justify-between h-fit">
        <h1 className="lg:text-2xl text-xl font-bold">Profile details</h1>
        <span className="ml-auto">
          <span>Update</span>
        <Switch disabled={!isupdate} className="ml-2 bg-Primary" onClick={()=>setIsupdate(false)}/>
        </span>
        <CustomButton
          title={"submit"}
          onClick={handleButtonClick}
          className={` text-xs ${
            isupdate && "bg-green-500"
          } capitalize tracking-wider`}
          color="solid"
          disabled={isupdate}
        />
      </div>
      <div
        className="md:flex-1 grid grid-cols-1 md:grid-cols-2
         lg:grid-cols-3 gap-4 mt-10 border-b py-8"
      >
        {titles
          .filter((title) => title !== "gender" && title !== "address")
          .map((title) => (
            <CustomInput
              disabled={isupdate}
              className="text-xs lg:text-base"
              containerClassName="mx-2 md:w-80"
              titleClassName="text-xs lg:text-base"
              title={title}
              value={data.length > 0 ? data[0][title] : ""}
              onChange={(e) => {
                const newValue = e.target.value;
                handleInputChange(title, newValue);
              }}
            />
          ))}
        <span className="mx-2">
          <p className="text-xs lg:text-base font-normal mb-4 capitalize text-gray-700">
            gender
          </p>
          <Radio.Group
            options={options}
            onChange={onChange1}
            value={value1}
            className="h-fit"
            disabled={isupdate}
          />
        </span>
        <span className="mx-2">
          <p className="text-xs lg:text-base font-normal mb-4 capitalize text-gray-700">
            Address
          </p>
          <TextArea className="md:w-80" disabled={isupdate} />
        </span>
      </div>
    </form>
  );
};

export default ProfileDetails;
