import React from "react";

const SortHeader = ({
  productCount,
  currentPage,
  totalPages,
  sortBy,
  onSortChange,
}) => {
  const sortOptions = [
    { value: "default", label: "Mặc định" },
    { value: "price-asc", label: "Giá: Thấp → Cao" },
    { value: "price-desc", label: "Giá: Cao → Thấp" },
    { value: "popular", label: "Phổ biến" },
    { value: "newest", label: "Mới nhất" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Sản phẩm ({productCount})
          </h2>
          <p className="text-gray-600 text-sm">
            Trang {currentPage} / {totalPages}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-600 text-sm">Sắp xếp theo:</span>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-500 focus:border-red-500"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SortHeader;
