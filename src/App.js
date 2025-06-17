import Header from "./component/header/Header";
import Tittle from "./component/Tittle/Tittle";
import logo from "./logo.svg";
import { Fragment } from "react/jsx-runtime";
import "swiper/scss";
import Banner from "./component/banner/Banner";
import { products } from "./component/cooker/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import CookerPage from "./component/cooker/CookerPage";
import MachinePage from "./component/machine/MachinePage";
import WashPage from "./component/Wash/WashPage";
function App() {
  return (
    <Fragment>
      <Tittle></Tittle>
      <Header></Header>
      <Banner></Banner>
      <CookerPage></CookerPage>
      <MachinePage></MachinePage>
      <WashPage></WashPage>
      <section className="page-container mb-10 px-5">
        <h1 className="text-4xl font-semibold text-red-500 text-center mb-5 pt-5">
          TIN NỔI BẬT
        </h1>
        <div className="grid grid-cols-3 gap-5 mb-10">
          <img
            src="https://bizweb.dktcdn.net/100/301/093/articles/chau-rua-da-konox.jpg?v=1692331723050"
            alt=""
            className="h-[250px] w-full cursor-pointer"
          />
          <div className="grid grid-cols-3 grid-rows-2 col-span-2 h-[250px] gap-5">
            {products.length > 0 &&
              products.slice(0, 6).map((item) => (
                <div className="relative w-full cursor-pointer">
                  <div class="absolute inset-0 bg-white/20 backdrop-brightness-75"></div>
                  <img
                    src="https://bizweb.dktcdn.net/thumb/large/100/301/093/articles/tong-hop-video-kinh-nghiem-lam-tu-bep.jpg?v=1619891975420"
                    alt=""
                    key={item.id}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute left-0 bottom-0 text-sm text-white p-1 font-normal">
                    Tổng hợp video kinh nghiệm làm tủ bếp
                  </span>
                </div>
              ))}
          </div>
        </div>
        <div className="flex items-center text-white gap-5 mb-10 pb-10">
          <div className="flex bg-[#A60303] items-center justify-center gap-3 px-3 py-2 cursor-pointer flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
              />
            </svg>
            <span>VẬN CHUYỂN MIỄN PHÍ ÁP DỤNG TOÀN QUỐC</span>
          </div>
          <div className="flex bg-[#A60303] items-center justify-center gap-3 px-3 py-2 cursor-pointer flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg>

            <span>ĐỔI TRẢ MIỄN PHÍ TRONG VÒNG 30 NGÀY</span>
          </div>
          <div className="flex bg-[#A60303] items-center justify-center gap-3 px-3 py-2 cursor-pointer flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
              />
            </svg>

            <span>TIẾN HÀNH THANH TOÁN VỚI NHIỀU PHƯƠNG THỨC</span>
          </div>
          <div className="flex bg-[#A60303] items-center justify-center gap-3 px-3 py-2 cursor-pointer flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <span>100% HOÀN TIỀN VỚI SẢN PHẨM LỖI</span>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
export default App;
