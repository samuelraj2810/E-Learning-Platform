import React, { useEffect, useState } from "react";
import CustomInput from "./Common/CustomInput";
import { GET, POST } from "./ApiFunction/ApiFunction";
import CustomButton from "./Common/CustomButton";
import { Checkbox, Radio, Switch } from "antd";
import { useCustomMessage } from "./Common/CustomMessage";
import TextArea from "antd/es/input/TextArea";
import CustomProgressBar from "./Common/CustomProgressBar";
import axios from "axios";

const ProfileDetails = () => {
  const showMessage = useCustomMessage();
  const [token, setToken] = useState(null);
  const [data, setData] = useState([
    {
      _id: "7daba129-1a18-4a38-b370-0fef402abee1",
      name: "sai",
      phonenumber: 123456789,
      email: "saidhasun0407@gmail.com",
      designation: "student",
      title: ["name", "phonenumber", "age", "sex", "email", "designation"],
      userId: "05526fc2-5265-4dfe-9030-87c428fa7773",
      createdAt: {
        $date: "2024-11-05T14:51:27.863Z",
      },
      updatedAt: {
        $date: "2024-11-05T14:51:27.863Z",
      },
      __v: 0,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [checked, setChecked] = useState(true);
  const [isupdate, setIsupdate] = useState(true);
  const [value1, setValue1] = useState("male");
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
  console.log(data, "dddd");
  const onChange1 = ({ target: { value } }) => {
    console.log("radio1 checked", value);
    setValue1(value);
  };
  // const fetchData = async () => {
  //   setIsLoading(true);
  //   try {
  //     setToken(sessionStorage.getItem("token"));
  //     const result = await axios.get("http://localhost:3000/getData", {
  //       headers: { Authorization: `Bearer ${token}` },
  //     });
  //     const modifiedResult = result?.data?.map((each) => ({
  //       ...each,
  //       disable: false,
  //     }));
  //     setData(modifiedResult || []);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const postData = async () => {
    setIsLoading(true);
    try {
      const result = await POST("http://localhost:3000/editdata", data,{ // write a new function for put method
        headers:{
          Authorization:`Bearer ${token}`
        }
      });
      if (result.status === 200) {
        setIsLoading(false);
        // Optionally re-fetch data if necessary
        showMessage("success", "Data updated successfully");
      }
    } catch (error) {
      console.error("Error updating data:", error);
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

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const handleButtonClick = () => {
    postData()
    setIsupdate(true);
    setChecked(true)
  };

  return (
    <form className=" lg:mx-auto rounded-lg p-4 lg:p-6">
      <div className="flex items-center gap-4 h-fit ">
        <h1 className="lg:text-2xl text-base font-semibold my-4 tracking-widest">
          Profile details
        </h1>
        {/* <CustomProgressBar totalfield={titles} percent={titles} className="" /> */}
        <CustomButton
          title={"submit"}
          onClick={handleButtonClick}
          className={`ml-auto text-xs ${
            isupdate && "bg-green-500"
          } capitalize tracking-wider`}
          color="solid"
          disabled={isupdate}
        />
      </div>
        <Checkbox
          checked={checked}
          onChange={() => {
            setIsupdate(!isupdate);
            setChecked(!checked);
          }}
          className={`text-xs ${checked ?  "" : ""}`}
        >
          Edit Details
        </Checkbox>
      <div
        className="grid grid-cols-1 mt-4 md:grid-cols-2
         lg:grid-cols-4 gap-4 items-center rounded-lg border p-4"
      >
{data.map((each) => 
   each.title.filter((field) => ![, "sex"].includes(field))
    .map((field) => ( 
      <CustomInput
        key={field}
        disabled={isupdate}
        className="text-xs"
        containerClassName="mx-2" 
        titleClassName="text-xs"
        title={field}
        type={field === "age" ?  "number" : field}
        value={each[field] || ""} 
        onChange={(e) => {
          const newValue =e.target.value;
          handleInputChange(field, newValue);
        }}
      />
    ))
  )}

        <span className="mx-2">
          <p className="text-xs font-normal mb-4 capitalize text-gray-700">
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
          <p className="text-xs font-normal mb-4 capitalize text-gray-700">
            Address
          </p>
          <TextArea className="" disabled={isupdate} />
        </span>
      </div>
    </form>
  );
};

export default ProfileDetails;
