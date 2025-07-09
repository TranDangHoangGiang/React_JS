import React, { useState } from "react";
import { useAppContext } from "../../context/AppContext";

const Title = () => {
  const { searchTerm, setSearchTerm, cartItems, scrollToSection } =
    useAppContext();
  const [showCart, setShowCart] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Scroll to products section when searching
      scrollToSection("cooker-section");
    }
  };

  const totalCartItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  const totalCartValue = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price);
    return sum + price * item.quantity;
  }, 0);

  return (
    <section className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <h2 className="text-red-600 text-3xl font-bold">Giangdz</h2>
            <span className="block text-gray-600 text-sm italic">
              Chuyên phụ kiện bếp
            </span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Tìm kiếm sản phẩm..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </form>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            {/* Hotline */}
            <div className="hidden md:block text-center">
              <span className="text-gray-600 text-sm">Hotline:</span>
              <div className="text-red-500 font-semibold text-lg">
                0978123881
              </div>
            </div>

            {/* User Account */}
            <button className="p-2 border border-red-600 rounded-full hover:bg-red-50 transition-colors duration-200 group">
              <svg
                className="w-6 h-6 text-red-600 group-hover:text-red-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>

            {/* Shopping Cart */}
            <div className="relative">
              <button
                onClick={() => setShowCart(!showCart)}
                className="p-2 border border-red-600 rounded-full hover:bg-red-50 transition-colors duration-200 group relative"
              >
                <svg
                  className="w-6 h-6 text-red-600 group-hover:text-red-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                  />
                </svg>

                {/* Cart Badge */}
                {totalCartItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {totalCartItems}
                  </span>
                )}
              </button>

              {/* Cart Dropdown */}
              {showCart && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                  <div className="p-4 border-b border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Giỏ hàng
                    </h3>
                  </div>

                  <div className="max-h-64 overflow-y-auto">
                    {cartItems.length === 0 ? (
                      <div className="p-4 text-center text-gray-500">
                        <svg
                          className="w-12 h-12 mx-auto mb-2 text-gray-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17"
                          />
                        </svg>
                        <p>Giỏ hàng trống</p>
                      </div>
                    ) : (
                      cartItems.map((item) => (
                        <div
                          key={item.id}
                          className="p-3 border-b border-gray-100 flex items-center space-x-3"
                        >
                          <img
                            src={item.img}
                            alt={item.title}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {item.title}
                            </p>
                            <p className="text-sm text-red-600">{item.price}</p>
                          </div>
                          <div className="text-sm text-gray-500">
                            x{item.quantity}
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  {cartItems.length > 0 && (
                    <div className="p-4 border-t border-gray-100">
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-semibold text-gray-900">
                          Tổng cộng:
                        </span>
                        <span className="font-bold text-red-600">
                          {totalCartValue.toLocaleString()}₫
                        </span>
                      </div>
                      <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-200">
                        Xem giỏ hàng
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Title;
