import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { products } from "./data";
const CookerPage = () => {
  return (
    <section className="page-container mb-10 px-5">
      <h1 className="text-4xl font-semibold text-red-500 text-center mb-10 pt-5">
        BẾP ĐIỆN TỪ
      </h1>
      <div className="cookerpage relative">
        <div className="swiper-button-prev py-2 border border-gray-400 w-[30px] bg-gray-400 opacity-50 cursor-pointer absolute left-0 top-1/2 -translate-y-10 z-50 -translate-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <Swiper
          spaceBetween={40}
          slidesPerView={"auto"}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
        >
          {products.length > 0 &&
            products.map((item) => (
              <SwiperSlide key={item.id}>
                <Cooker products={item} />
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="swiper-button-next py-2 border border-gray-400 w-[30px] bg-gray-400 opacity-50 cursor-pointer absolute right-0 top-1/2 -translate-y-10 z-50 translate-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            class="size-6"
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
  return (
    <div className="border border-gray-300 h-full flex flex-col p-3 rounded-md">
      <img
        src={products.img}
        alt=""
        className="h-[300px] object-cover w-full cursor-pointer"
      />
      <div className="flex flex-col gap-y-2 py-3 cursor-pointer flex-1">
        <h3 className="text-xl font-normal leading-[35px]">{products.title}</h3>
        <div>
          <span className="text-red-600 font-medium text-xl">
            {products.price}
          </span>
          <span className="block text-xl text-green-500">Mua 1 tặng 1</span>
        </div>
        <button className="bg-[#edeff1] text-blue-500 w-full py-3 rounded-lg text-center flex items-center justify-center mt-auto">
          MUA HÀNG
        </button>
      </div>
    </div>
  );
}
export default CookerPage;
