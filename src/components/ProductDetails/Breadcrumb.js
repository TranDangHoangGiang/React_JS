import React from "react";

const Breadcrumb = ({ productTitle }) => {
  return (
    <div className="bg-white border-b">
      <div className="container mx-auto px-4 py-3">
        <nav className="text-sm text-gray-600">
          <span>Trang chủ</span>
          <span className="mx-2">/</span>
          <span>Bếp từ</span>
          <span className="mx-2">/</span>
          <span className="text-red-600 font-medium">{productTitle}</span>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
