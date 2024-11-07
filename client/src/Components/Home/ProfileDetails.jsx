import React, { useEffect, useState } from "react";
import CustomInput from "../Common/CustomInput";
import { GET, POST } from "../ApiFunction/ApiFunction";
import CustomButton from "../Common/CustomButton";
import { Checkbox, Radio, Switch } from "antd";
import { useCustomMessage } from "../Common/CustomMessage";
import TextArea from "antd/es/input/TextArea";
import CustomProgressBar from "../Common/CustomProgressBar";
import axios from "axios";

const ProfileDetails = () => {
  const showMessage = useCustomMessage();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [checked, setChecked] = useState(true);
  const [isupdate, setIsupdate] = useState(true);
  const [checkBoxValue, setCheckBoxValue] = useState("male");
  const [address, setAddress] = useState("");
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
    setCheckBoxValue(value);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const token = sessionStorage.getItem("token");
      if (token) {
        const result = await axios.get("http://localhost:3000/getdata", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setData(result.data);
        if (result.data?.length > 0) {
          setCheckBoxValue(result.data[0].gender);
          setAddress(result.data[0].address);
        }
      } else {
        console.log("Token not found in sessionStorage.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const postData = async () => {
    setIsLoading(true);
    let convertedObject = data[0].title.reduce((acc, key) => {
      if (data[0].hasOwnProperty(key)) {
        acc[key] = data[0][key];
      }
      return acc;
    }, {});
    convertedObject.gender = checkBoxValue
    convertedObject.address = address
    try {
      const token = sessionStorage.getItem("token");
      const result = await axios.put(
        "http://localhost:3000/editdata",
          convertedObject,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (result.status === 200) {
        console.log(result.data);

        setIsLoading(false);
        showMessage("success", result.data.message);
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

  const handleButtonClick = () => {
    postData();
    setIsupdate(true);
    setChecked(true);
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
        className={`text-xs ${checked ? "" : ""}`}
      >
        Edit Details
      </Checkbox>
      <div
        className="grid grid-cols-1 mt-4 md:grid-cols-2
         lg:grid-cols-4 gap-4 items-center rounded-lg border p-4"
      >
        {data?.length > 0 ?
        data.map((each) =>
          each.title
            .filter((field) => !["gender"].includes(field))
            .map((field) => (
              <CustomInput
                key={field}
                disabled={isupdate}
                className="text-xs"
                containerClassName="mx-2"
                titleClassName="text-xs"
                title={field}
                type={field === "age" ? "number" : field}
                value={each[field] || ""}
                onChange={(e) => {
                  const newValue = e.target.value;
                  handleInputChange(field, newValue);
                }}
              />
            ))
        ): ""}
        <span className="mx-2">
          <p className="text-xs font-normal mb-4 capitalize text-gray-700">
            gender
          </p>
          <Radio.Group
            options={options}
            onChange={onChange1}
            value={checkBoxValue}
            className="h-fit"
            disabled={isupdate}
          />
        </span>
        <span className="mx-2">
          <p className="text-xs font-normal mb-4 capitalize text-gray-700">
            Address
          </p>
          <TextArea className="" disabled={isupdate} value={address} onChange={(e)=>setAddress(e.target.value)}/>
        </span>
      </div>
    </form>
  );
};

export default ProfileDetails;