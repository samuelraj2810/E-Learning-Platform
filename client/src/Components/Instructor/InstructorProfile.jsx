import React, { useState } from 'react'
import CustomDropdown from '../Common/CustomDropdown'
import TextArea from 'antd/es/input/TextArea'
import { Radio } from 'antd'
import { EditFilled } from '@ant-design/icons'
import CustomButton from '../Common/CustomButton'
import CustomSkeleton from '../Common/CustomSkeleton'

const InstructorProfile = () => {
  const [data, setData] = useState([]);
  const [isupdate, setIsupdate] = useState(true);
  const [checkBoxValue, setCheckBoxValue] = useState("male");
  const [address, setAddress] = useState("");
  const [designation, setDesignation] = useState("");
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
  const designationLists = [
    {
      value: "Admin",
      label: "Admin",
    },
    {
      value: "Student",
      label: "Student",
    },
    {
      value: "Employee",
      label: "Employee",
    },
  ];
  const expertiseLists = [
    {
      value: "Technology",
      label: "Technology",
    },
    {
      value: "Business",
      label: "Business",
    },
    {
      value: "Programming",
      label: "Programming",
    },
    {
      value: "Design",
      label: "Design",
    },
    {
      value: "Personal",
      label: "Personal",
    },
    {
      value: "Development",
      label: "Development",
    },
  ];
  const onChange1 = ({ target: { value } }) => {
    console.log("radio1 checked", value);
    setCheckBoxValue(value);
  };
  return (
    <div>
      <div className='pb-2 border-b flex items-center justify-between transition-all'>
        <h1 className='font-semibold tracking-wider lg:text-lg'>Details</h1>
        <span className='flex items-center'>
      <span className='mr-2 hidden lg:block text-gray-400'>Edit</span>
      <EditFilled onClick={()=>setIsupdate(!isupdate)} className='shadow duration-500 scale-100 hover:bg-Primary/10 hover:text-Primary p-2 rounded-full'/>
        </span>
      </div>
        {data ?
         <form className="grid grid-cols-1 mt-4 md:grid-cols-2
         lg:grid-cols-4 gap-4 rounded-lg shadow border p-8 bg-white">
        {/* <CustomInput
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
              /> */}
        <span className="lg:mx-2">
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
          <span className="lg:mx-2">
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
          <span className="lg:mx-2">
            <p className="text-xs font-normal mb-4 capitalize text-gray-700">
              Designation
            </p>
            <CustomDropdown type="select" className="w-full" defaultValue={designation} disabled={isupdate} menus={designationLists}/>
          </span>
          <span className="mx-2">
            <p className="text-xs font-normal mb-4 capitalize text-gray-700">
              Expertise
            </p>
            <CustomDropdown type="select" className="w-full" defaultValue={designation} disabled={isupdate} menus={expertiseLists}/>
          </span>
        </form>
        :<CustomSkeleton active rows={4} />}
        {!isupdate &&
        <CustomButton
          title={"submit"}
          // onClick={handleButtonClick}
          className={`absolute bottom-6 right-6 text-xs ${
            !isupdate && "bg-Primary"
          } capitalize tracking-wider`}
          color="solid"
          // loading={isLoading}
        />
}
    </div>
  )
}

export default InstructorProfile