import React, { useEffect, useState } from "react";
import { products } from "../cooker/data";
import { useAppContext } from "../../context/AppContext";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase-app/firebase-config";

const MachinePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "machine_product"),
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
        <h1 className="text-4xl font-bold text-red-500 mb-3">MÁY HÚT MÙI</h1>
        <p className="text-gray-600 text-lg">
          Khử mùi hiệu quả, thiết kế hiện đại
        </p>
        <div className="w-24 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Featured Banner */}
      <div className="relative overflow-hidden rounded-2xl shadow-xl mb-10 group cursor-pointer">
        <img
          src="https://bizweb.dktcdn.net/100/301/093/themes/973373/assets/women_product_img.jpg?1749454039804"
          alt="Máy hút mùi cao cấp"
          className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="text-white px-8 max-w-lg">
            <h2 className="text-3xl font-bold mb-4">Máy Hút Mùi Cao Cấp</h2>
            <p className="text-lg mb-6 opacity-90">
              Công nghệ khử mùi tiên tiến, thiết kế sang trọng phù hợp mọi không
              gian bếp
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm font-medium">✨ Khử mùi 99.9%</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm font-medium">🔇 Siêu êm ái</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm font-medium">💎 Thiết kế cao cấp</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="absolute bottom-6 right-6">
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg">
            Khám phá ngay
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.length > 0 &&
          products
            .slice(0, 8)
            .map((item) => <Machine key={item.id} products={item} />)}
      </div>

      {/* Why Choose Section */}
      <div className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Tại sao chọn máy hút mùi của chúng tôi?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-blue-500"
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
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Công suất mạnh mẽ
            </h4>
            <p className="text-gray-600">
              Khử mùi hiệu quả với công suất hút từ 600-1200m³/h
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Tiết kiệm điện
            </h4>
            <p className="text-gray-600">
              Công nghệ LED tiết kiệm điện năng đến 60%
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1.5A1.5 1.5 0 0115.5 0h-7A1.5 1.5 0 007 1.5V4m0 0v16a2 2 0 002 2h6a2 2 0 002-2V4M9 8h6m-6 4h6m-6 4h6"
                />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Dễ dàng vệ sinh
            </h4>
            <p className="text-gray-600">
              Thiết kế tháo lắp đơn giản, bảo trì dễ dàng
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

function Machine({ products }) {
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
        <div className="absolute top-3 left-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
          Siêu êm ái
        </div>

        {/* Sale badge */}
        <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
          -35%
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
            <span>Công suất hút:</span>
            <span className="font-medium">
              {products?.capacity ? `${products?.capacity}` : "..."}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Độ ồn:</span>
            <span className="font-medium">≤ {products.sound}</span>
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
            Tiết kiệm 35%
          </span>
        </div>

        <div className="mt-auto space-y-2">
          <button
            onClick={handleAddToCart}
            className="bg-red-500 hover:bg-red-600 text-white w-full py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
          >
            🛒 THÊM VÀO GIỎ
          </button>

          <button className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded-lg font-medium transition-colors text-sm">
            📞 TƯ VẤN MIỄN PHÍ
          </button>
        </div>
      </div>
    </div>
  );
}

export default MachinePage;
