import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useAppContext } from "../../context/AppContext";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase-app/firebase-config";
const CookerPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "cooker_product"),
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
    <section className="page-container mb-10 px-5">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-red-500 mb-3">BẾP ĐIỆN TỪ</h1>
        <p className="text-gray-600 text-lg">
          Sản phẩm chất lượng cao, công nghệ hiện đại
        </p>
        <div className="w-24 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="cookerpage relative">
        <div className="swiper-button-prev py-2 border border-gray-400 w-[40px] h-[40px] bg-white opacity-80 hover:opacity-100 cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 z-50 -translate-x-6 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:shadow-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={"auto"}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {products.length > 0 &&
            products.map((item) => (
              <SwiperSlide key={item.id}>
                <Cooker products={item} />
              </SwiperSlide>
            ))}
        </Swiper>

        <div className="swiper-button-next py-2 border border-gray-400 w-[40px] h-[40px] bg-white opacity-80 hover:opacity-100 cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 z-50 translate-x-6 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:shadow-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

function Cooker({ products }) {
  const { addToCart } = useAppContext();

  const handleAddToCart = () => {
    addToCart(products);
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

        {/* Sale badge */}
        <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
          Mua 1 tặng 1
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
            {products?.evaluate
              ? `(${products.evaluate} đánh giá)`
              : "(Chưa có đánh giá)"}
          </span>
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
            Tiết kiệm 30%
          </span>
        </div>

        <div className="mt-auto space-y-2">
          <button
            onClick={handleAddToCart}
            className="bg-red-500 hover:bg-red-600 text-white w-full py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
          >
            🛒 THÊM VÀO GIỎ
          </button>

          <button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded-lg font-medium transition-colors text-sm">
            📞 MUA NGAY
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookerPage;
