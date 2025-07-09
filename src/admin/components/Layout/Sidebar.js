import React from "react";

const Sidebar = ({ isOpen, currentPage, onPageChange }) => {
  const menuItems = [
    {
      name: "Dashboard",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
          />
        </svg>
      ),
      page: "dashboard",
    },
    {
      name: "Sản phẩm",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
      page: "products",
    },
    {
      name: "Banner",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      page: "banners",
    },
    {
      name: "Tin tức",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
          />
        </svg>
      ),
      page: "news",
    },
    {
      name: "Danh mục",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      page: "categories",
    },
    {
      name: "Đơn hàng",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
      page: "orders",
    },
    {
      name: "Người dùng",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
          />
        </svg>
      ),
      page: "users",
    },
    {
      name: "Cài đặt",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      page: "settings",
    },
  ];

  return (
    <div className="h-full bg-gray-900 text-white">
      {/* Logo */}
      <div className="flex items-center justify-center h-16 bg-gray-800">
        {isOpen ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-500">Giangdz</h2>
            <p className="text-xs text-gray-400">Admin Panel</p>
          </div>
        ) : (
          <div className="text-2xl font-bold text-red-500">G</div>
        )}
      </div>

      {/* Navigation */}
      <nav className="mt-8">
        <div className="px-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => onPageChange(item.page)}
              className={`${
                currentPage === item.page
                  ? "bg-red-600 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              } group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors duration-200 w-full text-left`}
            >
              <span className="mr-3 flex-shrink-0">{item.icon}</span>
              {isOpen && <span className="truncate">{item.name}</span>}
            </button>
          ))}
        </div>
      </nav>

      {/* User Info */}
      {isOpen && (
        <div className="absolute bottom-0 w-64 p-4 bg-gray-800">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-white">A</span>
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-white">Admin</p>
              <p className="text-xs text-gray-400">admin@giangdz.com</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
