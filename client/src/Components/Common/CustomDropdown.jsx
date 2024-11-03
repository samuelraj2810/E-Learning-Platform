import { Dropdown, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const CustomDropdown = ({ menus, onClick, title,className,placement="bottom" }) => {
  const styledMenus = menus.map(menu => ({
    key: menu.id,
    label: (
      <span className={`lg:text-xl lg:py-2 text-gray-700 font-Poppins ${menu.title === "signout" && ("text-red-500")}`}>
        <Link to={menu.to}>{menu.title}</Link>
      </span>
    ),
    onClick: menu.onClick,
  }));
  return (
    <>
      <Dropdown menu={{ items: styledMenus }} placement={placement} className={`tracking-wider capitalize ${className}`}>
        <a onClick={onClick} className="">
          <Space>{title}</Space>
        </a>
      </Dropdown>
    </>
  );
};

export default CustomDropdown;
