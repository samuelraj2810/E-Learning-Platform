import React, { useEffect, useState } from "react";
import CustomInput from "../Common/CustomInput";
import { GET, PUT } from "../ApiFunction/ApiFunction";
import CustomButton from "../Common/CustomButton";
import { Checkbox, Radio, Switch } from "antd";
import { useCustomMessage } from "../Common/CustomMessage";
import TextArea from "antd/es/input/TextArea";
import CustomProgressBar from "../Common/CustomProgressBar";
import CustomSkeleton from "../Common/CustomSkeleton";

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

  const onChange1 = ({ target: { value } }) => {
    console.log("radio1 checked", value);
    setCheckBoxValue(value);
  };

  const fetchData = async () => {
    try {
      const result = await GET("http://localhost:3000/getdata");
      setData(result);
      if (result.data?.length > 0) {
        setCheckBoxValue(result.data[0].gender);
        setAddress(result.data[0].address);
      }
    } catch (error) {
     showMessage("error",error || "Failed to load data")
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

    convertedObject.gender = checkBoxValue;
    convertedObject.address = address;
    try {
      const result = await PUT(
        "http://localhost:3000/editdata",
        convertedObject
      );
      if (result.status === 200) {
        setIsLoading(false);
        showMessage("success", "Data added Successfully");
      }
    } catch (error) {
      showMessage("error", "Something went wrong");
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
        <h1 className="lg:text-2xl text-base border-l-8 border-PrimaryDark pl-2 font-semibold text-PrimaryDark my-4 tracking-widest">
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
          loading={isLoading}
        />
      </div>
      <Checkbox
        checked={checked}
        onChange={() => {
          setIsupdate(!isupdate);
          setChecked(!checked);
        }}
        className={`text-xs my-4 ${checked ? "" : ""}`}
      >
        Update
      </Checkbox>
      {data?.length > 0 ? (
        <div
          className="grid grid-cols-1 mt-4 md:grid-cols-2
         lg:grid-cols-4 gap-4 items-center rounded-lg border-2 p-8 bg-white"
        >
          {data.map((each) =>
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
          )}
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
            <TextArea
              className=""
              disabled={isupdate}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </span>
        </div>
      ) : (
        <CustomSkeleton active rows={4} />
      )}
    </form>
  );
};

export default ProfileDetails;
