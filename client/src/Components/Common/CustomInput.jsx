import { Input } from "antd";
import React from "react";

const CustomInput = ({
  type="text",
  className = "",
  placeholder = "",
  status = "",
  prefix,
  title,
  variant,
  disabled,
  required,
  onChange,
}) => {
  return (
    <div>
      <p className={"text-base font-normal capitalize mb-4 text-gray-700"}>
        {title}
        {required && (
            <span className="text-red-500 mx-1 text-xs bg-red-50 rounded-md p-1">required</span>
        )}
      </p>
      {type === "text" || type === "number"?
      <Input
        type={type}
        className={`${className}`}
        variant={variant}
        placeholder={placeholder}
        status={status}
        prefix={prefix}
        disabled={disabled}
        onChange={onChange}
      />
      :
      <Input.Password
      className={`${className}`}
      variant={variant}
      placeholder={placeholder}
      status={status}
      prefix={prefix}
      disabled={disabled}
      onChange={onChange}
    />}
    </div>
  );
};

export default CustomInput;
