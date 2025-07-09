import React from "react";
import ProductForm from "./ProductForm";

const AddProductPage = ({ onPageChange }) => {
  // const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-md">
        {/* Nút Quay Lại */}
        <button
          onClick={() => onPageChange("products")}
          className="mb-4 text-red-600 hover:underline flex items-center"
        >
          ← Quay lại
        </button>

        <h1 className="text-2xl font-semibold text-red-600 mb-6">
          Thêm Sản Phẩm
        </h1>

        <ProductForm onPageChange={onPageChange} />
      </div>
    </div>
  );
};

export default AddProductPage;
