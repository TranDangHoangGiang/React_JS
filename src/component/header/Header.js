import React from "react";

const Header = () => {
  return (
    <section className="bg-red-500 mb-8">
      <div className="max-width: 1280px mx-auto text-white p-2">
        <ul className="capitalize flex items-center justify-between">
          <li>Khuyến mãi mới</li>
          <li>Bếp điện từ </li>
          <li>Máy hút mùi</li>
          <li>Máy rửa bát</li>
          <li>Phụ kiện bếp</li>
          <li className="flex items-center gap-x-2 bg-white p-2 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
              />
            </svg>

            <span className="text-yellow-400 font-semibold text-xl">
              KHUYẾN MÃI LỚN
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
