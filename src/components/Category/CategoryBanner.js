import React from "react";

const CategoryBanner = ({ productCount }) => {
  return (
    <div className="relative bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="relative container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Danh Mục Sản Phẩm
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Khám phá bộ sưu tập thiết bị nhà bếp cao cấp với công nghệ hiện đại
          </p>
          <div className="mt-8 flex justify-center">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-sm font-medium">
                {productCount} sản phẩm được tìm thấy
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white bg-opacity-5 rounded-full animate-pulse delay-1000"></div>
    </div>
  );
};

export default CategoryBanner;
