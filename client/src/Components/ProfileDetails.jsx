import React, { useEffect, useState } from "react";
import CustomInput from "./Common/CustomInput";
import { GET } from "./ApiFunction/ApiFunction";
import CustomButton from "./Common/CustomButton";
import { Radio } from 'antd';
import { useCustomMessage } from "./Common/CustomMessage";
const options = [
  {
    label: 'Apple',
    value: 'Apple',
  },
  {
    label: 'Pear',
    value: 'Pear',
  },
  {
    label: 'Orange',
    value: 'Orange',
    title: 'Orange',
  },
];
const ProfileDetails = () => {
  const showMessage = useCustomMessage();
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
  const [value1, setValue1] = useState('Apple');
  console.log(data);
  const onChange1 = ({ target: { value } }) => {
    console.log('radio1 checked', value);
    setValue1(value);
  };
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
    showMessage("success","clicked")
  };
  return (
    // <div className="h-[100vh] bg-gray-100 max-w-screen p-4">
      <form className="overflow-hidden bg-white lg:mx-auto flex flex-col rounded-lg p-4 lg:p-6">
        <div className="flex gap-4 justify-between h-fit">
          <h1 className="lg:text-2xl text-xl font-bold">Profile details</h1>
          <CustomButton
            title={isupdate ? "update" : "Submit"}
            onClick={handleButtonClick}
            className={` text-xs ${
              isupdate && "bg-green-500"
            } capitalize tracking-wider`}
            color="solid"
          />
        </div>
        <div className="md:flex-1 flex flex-col gap-4 mt-10">
          <span>
          <Radio.Group options={options} onChange={onChange1} value={value1} className="border h-fit w-fit mx-2"/>
          </span>
          {titles.filter((title) => title !== 'gender').map((title) => (
            <CustomInput
              disabled={isupdate}
              className="text-xs lg:text-base"
              containerClassName="mx-2"
              titleClassName="text-xs lg:text-base"
              title={title}
              value={data.length > 0 ? [...data.values()][0][title] : ''}
              // onChange={(e)}
            />
          ))}
          {titles.map((title) => (
            <CustomInput
              disabled={isupdate}
              className="text-xs lg:text-base"
              containerClassName="mx-2"
              titleClassName="text-xs lg:text-base"
              title={title}
              value={data.length > 0 ? [...data.values()][0][title] : ''}
              // onChange={(e)}
            />
          ))}
        </div>
        {/* <div className="md:flex-1 flex flex-col gap-4">
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
        </div> */}
      </form>
    // </div>
  );
};

export default ProfileDetails;
