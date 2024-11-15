import React from "react";
import { NavLink } from "react-router-dom";
import { HomeIcon, UserIcon, CogIcon } from "@heroicons/react/outline"; // Example icons from Heroicons

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-800 text-white hidden md:flex flex-col">
      <div className="p-4 text-xl font-bold border-b border-blue-700">
        Admin Panel
      </div>
      <nav className="flex-1 p-4 space-y-4">
        <NavLink
          to="/admin/dashboard"
          className="flex items-center p-2 rounded hover:bg-blue-700"
        >
          <HomeIcon className="w-6 h-6 mr-2" />
          Dashboard
        </NavLink>
        <NavLink
          to="/admin/users"
          className="flex items-center p-2 rounded hover:bg-blue-700"
        >
          <UserIcon className="w-6 h-6 mr-2" />
          Users
        </NavLink>
        <NavLink
          to="/admin/settings"
          className="flex items-center p-2 rounded hover:bg-blue-700"
        >
          <CogIcon className="w-6 h-6 mr-2" />
          Settings
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
