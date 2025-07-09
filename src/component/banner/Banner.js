import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { sliderImages } from "./dataBanner";

const Banner = () => {
  return (
    <section className="page-container mb-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row h-auto lg:h-[400px] gap-4">
        {/* Main Banner Slider */}
        <div className="w-full lg:w-2/3 h-[300px] lg:h-full overflow-hidden rounded-xl shadow-lg">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            loop={true}
            className="banner h-full"
          >
            {sliderImages.length > 0 &&
              sliderImages.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="relative h-full group cursor-pointer">
                    <img
                      src={item.img}
                      alt={`Banner ${item.id}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>

                    {/* Content overlay */}
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">
                        Sản phẩm chất lượng cao
                      </h3>
                      <p className="text-sm opacity-90">
                        Công nghệ hiện đại, giá cả hợp lý
                      </p>
                      <button className="mt-3 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium">
                        Khám phá ngay
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        {/* Side Images */}
        <div className="w-full lg:w-1/3 flex lg:flex-col gap-4">
          {sliderImages.slice(0, 3).map((item, index) => (
            <div
              key={item.id}
              className="flex-1 relative overflow-hidden rounded-xl shadow-md group cursor-pointer"
            >
              <img
                src={item.img}
                alt={`Thumbnail ${item.id}`}
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <h4 className="font-semibold mb-1">Khuyến mãi</h4>
                  <p className="text-sm">Giảm {30 + index * 10}%</p>
                </div>
              </div>

              {/* Sale badge */}
              <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                -{30 + index * 10}%
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center group">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
            <svg
              className="w-8 h-8 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Miễn phí vận chuyển
          </h3>
          <p className="text-gray-600 text-sm">
            Giao hàng miễn phí cho đơn hàng trên 2 triệu
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center group">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
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
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Bảo hành chính hãng
          </h3>
          <p className="text-gray-600 text-sm">
            Bảo hành 2 năm, hỗ trợ kỹ thuật 24/7
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center group">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
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
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Hài lòng 100%
          </h3>
          <p className="text-gray-600 text-sm">
            Đổi trả trong 30 ngày nếu không hài lòng
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
