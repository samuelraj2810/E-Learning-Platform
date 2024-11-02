import { Input, InputNumber } from "antd";
import React, { useState } from "react";

const CustomInput = ({
  type="text",
  className = "",
  placeholder = "",
  status = "",
  prefix,
  title,
  name,
  value,
  variant,
  disabled,
  required,
  onChange,
}) => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (inputValue) => {
    onChange(inputValue);
  };

  return (
    <span>
      <p className={"text-base font-normal capitalize mb-4 text-gray-700"}>
        {title}
        {required && (
            <span className="text-red-500 mx-1 text-xs bg-red-50 rounded-md p-1">required</span>
        )}
      </p>
      {type === "text" || type === "email"?
      <Input
        type={type}
        className={`${className}`}
        variant={variant}
        placeholder={placeholder}
        status={status}
        name={name}
        value={value}
        prefix={prefix}
        disabled={disabled}
        onChange={handleChange}
      />
      :type === "number" ?
      <Input
      type={type}
      className={`${className}`}
      variant={variant}
      placeholder={placeholder}
      status={status}
      name={name}
      value={value}
      prefix={prefix}
      disabled={disabled}
      onChange={handleChange}
    />:
      <Input.Password
      className={`${className}`}
      variant={variant}
      placeholder={placeholder}
      status={status}
      name={name}
      value={value}
      prefix={prefix}
      disabled={disabled}
      onChange={handleChange}
    />}
    </span>
  );
};

export default CustomInput;
