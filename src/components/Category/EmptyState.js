import React from "react";

const EmptyState = () => {
  return (
    <div className="text-center py-16">
      <div className="text-gray-400 text-6xl mb-4">🔍</div>
      <h3 className="text-xl font-semibold text-gray-700 mb-2">
        Không tìm thấy sản phẩm
      </h3>
      <p className="text-gray-500">
        Vui lòng thử thay đổi bộ lọc để xem thêm sản phẩm khác
      </p>
    </div>
  );
};

export default EmptyState;
