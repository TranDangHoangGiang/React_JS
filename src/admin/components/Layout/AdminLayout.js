import React, { useState } from "react";
import Sidebar from "./Sidebar";
import AdminHeader from "./AdminHeader";
import ProductList from "../../pages/ProductList";

const AdminLayout = ({ children, currentPage, onPageChange }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } transition-all duration-300 ease-in-out`}
      >
        <Sidebar
          isOpen={sidebarOpen}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
