import React from "react";

const Dashboard = () => {
  const stats = [
    {
      name: "Tổng sản phẩm",
      value: "245",
      change: "+12%",
      changeType: "increase",
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
    },
    {
      name: "Đơn hàng hôm nay",
      value: "32",
      change: "+5%",
      changeType: "increase",
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
    },
    {
      name: "Doanh thu",
      value: "₫89.2M",
      change: "+18%",
      changeType: "increase",
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
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
          />
        </svg>
      ),
    },
    {
      name: "Người dùng mới",
      value: "156",
      change: "-2%",
      changeType: "decrease",
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
  ];

  const recentOrders = [
    {
      id: "#001",
      customer: "Nguyễn Văn A",
      product: "Bếp từ đơn Kangaroo",
      amount: "₫2.500.000",
      status: "Hoàn thành",
    },
    {
      id: "#002",
      customer: "Trần Thị B",
      product: "Máy hút mùi Canzy",
      amount: "₫7.200.000",
      status: "Đang xử lý",
    },
    {
      id: "#003",
      customer: "Lê Văn C",
      product: "Máy rửa bát Bosch",
      amount: "₫3.650.000",
      status: "Chờ thanh toán",
    },
    {
      id: "#004",
      customer: "Phạm Thị D",
      product: "Bếp từ đôi Sunhouse",
      amount: "₫8.900.000",
      status: "Hoàn thành",
    },
    {
      id: "#005",
      customer: "Hoàng Văn E",
      product: "Bếp từ Bosch",
      amount: "₫9.600.000",
      status: "Đang giao",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">
          Xin chào! Đây là tổng quan về hoạt động của shop.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-red-500 rounded-md flex items-center justify-center text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {stat.name}
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {stat.value}
                      </div>
                      <div
                        className={`ml-2 flex items-baseline text-sm font-semibold ${
                          stat.changeType === "increase"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {stat.changeType === "increase" ? (
                          <svg
                            className="self-center flex-shrink-0 h-5 w-5 text-green-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="self-center flex-shrink-0 h-5 w-5 text-red-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                        <span className="sr-only">
                          {stat.changeType === "increase"
                            ? "Increased"
                            : "Decreased"}{" "}
                          by
                        </span>
                        {stat.change}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts and Recent Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart placeholder */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Doanh thu 7 ngày qua
          </h3>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <svg
                className="w-12 h-12 text-gray-400 mx-auto mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              <p className="text-gray-500">Biểu đồ doanh thu</p>
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">
              Đơn hàng gần đây
            </h3>
            <a
              href="/admin/orders"
              className="text-red-600 hover:text-red-800 text-sm font-medium"
            >
              Xem tất cả
            </a>
          </div>
          <div className="space-y-3">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">
                      {order.id}
                    </span>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        order.status === "Hoàn thành"
                          ? "bg-green-100 text-green-800"
                          : order.status === "Đang xử lý"
                          ? "bg-yellow-100 text-yellow-800"
                          : order.status === "Đang giao"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{order.customer}</p>
                  <p className="text-xs text-gray-500 truncate">
                    {order.product}
                  </p>
                </div>
                <div className="ml-4 text-right">
                  <span className="text-sm font-medium text-gray-900">
                    {order.amount}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Thao tác nhanh
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="/admin/products/new"
            className="flex items-center p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
          >
            <div className="w-8 h-8 bg-red-500 rounded-md flex items-center justify-center text-white mr-3">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <div>
              <p className="font-medium text-gray-900">Thêm sản phẩm</p>
              <p className="text-sm text-gray-600">Tạo sản phẩm mới</p>
            </div>
          </a>

          <a
            href="/admin/orders"
            className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center text-white mr-3">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <div>
              <p className="font-medium text-gray-900">Xem đơn hàng</p>
              <p className="text-sm text-gray-600">Quản lý đơn hàng</p>
            </div>
          </a>

          <a
            href="/admin/banners"
            className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
          >
            <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center text-white mr-3">
              <svg
                className="w-5 h-5"
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
            </div>
            <div>
              <p className="font-medium text-gray-900">Quản lý banner</p>
              <p className="text-sm text-gray-600">Cập nhật hình ảnh</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
