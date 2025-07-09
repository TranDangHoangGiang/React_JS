import React, { useEffect, useState } from "react";
import { products } from "../cooker/data";
import { useAppContext } from "../../context/AppContext";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase-app/firebase-config";

const WashPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "wash_product"),
      (snapshot) => {
        const productList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productList);
      },
      (error) => {
        console.error("Lỗi khi lắng nghe realtime:", error);
      }
    );

    // Dọn dẹp listener khi component unmount
    return () => unsubscribe();
  }, []);
  return (
    <section className="page-container mb-10 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-red-500 mb-3">MÁY RỬA BÁT</h1>
        <p className="text-gray-600 text-lg">
          Tiết kiệm thời gian, bảo vệ đôi tay
        </p>
        <div className="w-24 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Featured Banner */}
      <div className="relative overflow-hidden rounded-2xl shadow-xl mb-10 group cursor-pointer">
        <img
          src="https://bizweb.dktcdn.net/100/301/093/themes/973373/assets/banner_index.jpg?1749454039804"
          alt="Máy rửa bát thông minh"
          className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="text-white px-8 max-w-lg">
            <h2 className="text-3xl font-bold mb-4">Máy Rửa Bát Thông Minh</h2>
            <p className="text-lg mb-6 opacity-90">
              Công nghệ rửa tự động, tiết kiệm nước và thời gian. Bảo vệ đôi tay
              khỏi hóa chất
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm font-medium">
                  💧 Tiết kiệm 50% nước
                </span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm font-medium">🍽️ 14 bộ bát đĩa</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm font-medium">🔥 Sấy khô tự động</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="absolute bottom-6 right-6">
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg">
            Xem chi tiết
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.length > 0 &&
          products
            .slice(0, 8)
            .map((item) => <Wash key={item.id} products={item} />)}
      </div>

      {/* Benefits Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Lợi ích khi sử dụng máy rửa bát
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Benefits List */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Tiết kiệm thời gian
                </h4>
                <p className="text-gray-600">
                  Không cần rửa tay, máy làm tất cả trong khi bạn nghỉ ngơi
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Vệ sinh tối ưu
                </h4>
                <p className="text-gray-600">
                  Nước nóng 70°C diệt khuẩn hiệu quả hơn rửa tay
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Bảo vệ đôi tay
                </h4>
                <p className="text-gray-600">
                  Không tiếp xúc với hóa chất tẩy rửa có hại
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-yellow-500"
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
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Tiết kiệm chi phí
                </h4>
                <p className="text-gray-600">
                  Sử dụng ít nước và điện hơn so với rửa tay
                </p>
              </div>
            </div>
          </div>

          {/* Comparison Chart */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6">
            <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
              So sánh hiệu quả
            </h4>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Thời gian rửa</span>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Rửa tay</div>
                    <div className="font-semibold text-red-500">30 phút</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Máy rửa</div>
                    <div className="font-semibold text-green-500">
                      5 phút setup
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-700">Lượng nước tiêu thụ</span>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="font-semibold text-red-500">40 lít</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-green-500">12 lít</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-700">Độ sạch</span>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="font-semibold text-yellow-500">Tốt</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-green-500">Xuất sắc</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function Wash({ products }) {
  const { addToCart } = useAppContext();

  const handleAddToCart = () => {
    addToCart({
      ...products,
      title: products.title,
    });
  };

  return (
    <div className="bg-white border border-gray-200 h-full flex flex-col p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={products.image}
          alt={products.title}
          className="h-[280px] w-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
        />

        {/* Overlay với quick actions */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex space-x-3">
            <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </button>
            <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors">
              <svg
                className="w-5 h-5 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Feature badge */}
        <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
          Tiết kiệm nước
        </div>

        {/* Sale badge */}
        <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
          -40%
        </div>
      </div>

      <div className="flex flex-col gap-y-3 flex-1">
        <h3 className="text-lg font-semibold leading-6 text-gray-900 line-clamp-2 cursor-pointer hover:text-red-600 transition-colors">
          {products.title}
        </h3>

        <div className="flex items-center space-x-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 text-yellow-400 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
          <span className="text-sm text-gray-500 ml-2">
            ({products?.evaluate + " đánh giá"})
          </span>
        </div>

        {/* Technical specs */}
        <div className="space-y-1 text-sm text-gray-600 mb-3">
          <div className="flex justify-between">
            <span>Sức chứa:</span>
            <span className="font-medium">{products.tankage}</span>
          </div>
          <div className="flex justify-between">
            <span>Tiêu thụ nước:</span>
            <span className="font-medium">
              {products.consume + " L/chu kỳ"}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Chương trình:</span>
            <span className="font-medium">
              {products.programme + " chế độ"}
            </span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-red-600">
              {Math.round(products?.sale_price).toLocaleString("vi-VN")}₫
            </span>
            <span className="text-sm text-gray-500 line-through">
              {Math.round(products?.original_price).toLocaleString("vi-VN")}₫
            </span>
          </div>
          <span className="inline-block text-sm text-green-600 font-medium bg-green-50 px-2 py-1 rounded-md mt-1">
            Tiết kiệm 40%
          </span>
        </div>

        <div className="mt-auto space-y-2">
          <button
            onClick={handleAddToCart}
            className="bg-red-500 hover:bg-red-600 text-white w-full py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
          >
            🛒 THÊM VÀO GIỎ
          </button>

          <button className="bg-green-500 hover:bg-green-600 text-white w-full py-2 rounded-lg font-medium transition-colors text-sm">
            📞 ĐẶT LỊCH LẮP ĐẶT
          </button>
        </div>
      </div>
    </div>
  );
}

export default WashPage;
