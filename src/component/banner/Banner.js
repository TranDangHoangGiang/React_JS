import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { sliderImages } from "./dataBanner";
const Banner = () => {
  return (
    <section className="page-container mb-10">
      <div className="flex h-[350px] gap-2">
        {/* <img
            src="https://bizweb.dktcdn.net/100/301/093/themes/973373/assets/slider_1.jpg?1749454039804"
            alt=""
            className="w-2/3 h-full object-cover rounded"
          /> */}
        <div className="w-2/3 overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
          >
            {sliderImages.length > 0 &&
              sliderImages.map((item) => (
                <SwiperSlide key={item.id}>
                  <img src={item.img} alt="" className="object-cover rounded" />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        <div className="flex flex-col w-1/3 gap-2">
          {sliderImages.map((item) => (
            <img
              key={item.id}
              src={item.img}
              alt=""
              className="w-full flex-1 object-cover rounded h-1/3"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
