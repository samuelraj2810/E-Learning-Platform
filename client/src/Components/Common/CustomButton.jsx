import { Button } from "antd";
import React from "react";

const CustomButton = ({
  type = "default",
  color = "default",
  variant = "solid",
  disabled,
  size = "default",
  icon,
  shape="",
  title="",
  onClick,
  className="",
}) => {
  return (
      <Button
      className={`capitalize w-fit ${className}`}
        type={type}
        color={color}
        variant={variant}
        disabled={disabled}
        size={size}
        icon={icon}
        shape={shape}
        onClick={onClick}
      >
        {title}
      </Button>
  );
};

export default CustomButton;
