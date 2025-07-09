import React from "react";

const FilterSidebar = ({
  filters,
  onFilterChange,
  categories,
  brands,
  types,
  isSidebarOpen,
  onToggleSidebar,
}) => {
  const priceRanges = [
    { value: "all", label: "Tất cả" },
    { value: "under3m", label: "Dưới 3 triệu" },
    { value: "3m-5m", label: "3 - 5 triệu" },
    { value: "5m-8m", label: "5 - 8 triệu" },
    { value: "over8m", label: "Trên 8 triệu" },
  ];

  const handleClearFilters = () => {
    onFilterChange({
      category: "all",
      brand: "all",
      priceRange: "all",
      type: "all",
    });
  };

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden">
        <button
          onClick={onToggleSidebar}
          className="w-full bg-red-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-red-600 transition-colors"
        >
          {isSidebarOpen ? "Ẩn bộ lọc" : "Hiển thị bộ lọc"}
        </button>
      </div>

      {/* Sidebar Filters */}
      <div
        className={`lg:w-1/4 ${isSidebarOpen ? "block" : "hidden lg:block"}`}
      >
        <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
          <h3 className="text-xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-3">
            Bộ Lọc Sản Phẩm
          </h3>

          {/* Category Filter */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-700 mb-3">Loại sản phẩm</h4>
            <div className="space-y-2">
              {categories.map((category) => (
                <label
                  key={category}
                  className="flex items-center cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    checked={filters.category === category}
                    onChange={(e) =>
                      onFilterChange({ ...filters, category: e.target.value })
                    }
                    className="text-red-500 focus:ring-red-500 focus:ring-2"
                  />
                  <span className="ml-2 text-gray-600 group-hover:text-red-500 transition-colors">
                    {category === "all" ? "Tất cả" : category}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Brand Filter */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-700 mb-3">Thương hiệu</h4>
            <select
              value={filters.brand}
              onChange={(e) =>
                onFilterChange({ ...filters, brand: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
            >
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand === "all" ? "Tất cả thương hiệu" : brand}
                </option>
              ))}
            </select>
          </div>

          {/* Type Filter */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-700 mb-3">Loại bếp</h4>
            <div className="space-y-2">
              {types.map((type) => (
                <label
                  key={type}
                  className="flex items-center cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="type"
                    value={type}
                    checked={filters.type === type}
                    onChange={(e) =>
                      onFilterChange({ ...filters, type: e.target.value })
                    }
                    className="text-red-500 focus:ring-red-500 focus:ring-2"
                  />
                  <span className="ml-2 text-gray-600 group-hover:text-red-500 transition-colors">
                    {type === "all" ? "Tất cả" : type}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-700 mb-3">Khoảng giá</h4>
            <div className="space-y-2">
              {priceRanges.map((range) => (
                <label
                  key={range.value}
                  className="flex items-center cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="priceRange"
                    value={range.value}
                    checked={filters.priceRange === range.value}
                    onChange={(e) =>
                      onFilterChange({ ...filters, priceRange: e.target.value })
                    }
                    className="text-red-500 focus:ring-red-500 focus:ring-2"
                  />
                  <span className="ml-2 text-gray-600 group-hover:text-red-500 transition-colors">
                    {range.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          <button
            onClick={handleClearFilters}
            className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Xóa bộ lọc
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;
