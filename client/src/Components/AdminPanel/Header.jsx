import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
          Add New
        </button>
        <button className="px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700">
          Log Out
        </button>
      </div>
    </header>
  );
};

export default Header;
