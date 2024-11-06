import { Dropdown, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const CustomDropdown = ({ menus, onClick, title,className,placement="bottom" }) => {
  const styledMenus = menus.map(menu => ({
    key: menu.id,
    label: (
      <span className={`lg:text-xl lg:py-2 text-gray-700 font-Poppins ${menu.id === 6 && ("text-red-500")}`}>
        <Link to={menu.to} onClick={()=>menu.id === 6 && sessionStorage.removeItem("token")}>{menu.title}</Link>
      </span>
    ),
    onClick: menu.onClick,
  }));
  return (
    <>
      <Dropdown menu={{ items: styledMenus,selectable: true, }} placement={placement} className={`tracking-wider capitalize ${className}`}>
          <Space>{title}</Space>
      </Dropdown>
    </>
  );
};

export default CustomDropdown;
