import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";

const ProductImageGallery = ({ images, title }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-square bg-white rounded-xl shadow-lg overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Thumbs]}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          pagination={{ clickable: true }}
          navigation
          className="h-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`${title} - ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Thumbnail Images */}
      <div className="h-20">
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          watchSlidesProgress
          className="h-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="cursor-pointer">
              <div className="h-full bg-white rounded-lg overflow-hidden border-2 border-transparent hover:border-red-500 transition-colors">
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductImageGallery;
