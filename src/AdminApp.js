import React, { useState } from "react";
import AdminLayout from "./admin/components/Layout/AdminLayout";
import Dashboard from "./admin/pages/Dashboard";
import ProductList from "./admin/pages/ProductList";
import AddProductPage from "./module/products/AddProductPage";
import ProductForm from "./module/products/ProductForm";

function AdminApp() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />;
      case "products":
        return <ProductList onPageChange={setCurrentPage} />;
      case "add_products":
        return <AddProductPage onPageChange={setCurrentPage} />;
      case "banners":
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h1 className="text-2xl font-bold">Quản lý Banner</h1>
            <p>Trang này đang phát triển...</p>
          </div>
        );
      case "news":
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h1 className="text-2xl font-bold">Quản lý Tin tức</h1>
            <p>Trang này đang phát triển...</p>
          </div>
        );
      case "categories":
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h1 className="text-2xl font-bold">Quản lý Danh mục</h1>
            <p>Trang này đang phát triển...</p>
          </div>
        );
      case "orders":
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h1 className="text-2xl font-bold">Quản lý Đơn hàng</h1>
            <p>Trang này đang phát triển...</p>
          </div>
        );
      case "users":
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h1 className="text-2xl font-bold">Quản lý Người dùng</h1>
            <p>Trang này đang phát triển...</p>
          </div>
        );
      case "settings":
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h1 className="text-2xl font-bold">Cài đặt</h1>
            <p>Trang này đang phát triển...</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };
  // console.log(currentPage);
  return (
    <AdminLayout currentPage={currentPage} onPageChange={setCurrentPage}>
      {renderPage()}
    </AdminLayout>
  );
}

export default AdminApp;
