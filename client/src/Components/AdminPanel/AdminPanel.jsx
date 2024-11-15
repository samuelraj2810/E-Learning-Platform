import React from "react";
import Sidebar from "./SideBar";
import Header from "./Header";

const AdminPanel = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar for navigation */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header />

        {/* Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="container mx-auto"></div>
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
