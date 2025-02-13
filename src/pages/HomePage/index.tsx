import style from "./style.module.css";

function HomePage() {
  return (
    <>
      <section className={style.slider}>
        <div className={style.container}>
          <div className={style.slider_details}>
            <a href="">
              <img src="../../../img/slider1.jpg" alt="" />
            </a>
            <a href="">
              <img src="../../../img/slider2.jpg" alt="" />
            </a>
            <a href="">
              <img src="../../../img/slider3.jpg" alt="" />
            </a>
          </div>
          <div className={style.slider_bottom}>
            <div className={style.slider_bottom_logo}>
              <img src="../../../img/Facebook_Logo_(2019).jpg" alt="" />
              <span>
                Hàng chọn <br /> giá hời
              </span>
            </div>
            <div className={style.slider_bottom_logo}>
              <img src="../../../img/Facebook_Logo_(2019).jpg" alt="" />
              <span>Mã giảm giá</span>
            </div>
            <div className={style.slider_bottom_logo}>
              <img src="../../../img/Facebook_Logo_(2019).jpg" alt="" />
              <span>
                Miễn hết phí ship <br />
                cho mọi đơn
              </span>
            </div>
            <div className={style.slider_bottom_logo}>
              <img src="../../../img/Facebook_Logo_(2019).jpg" alt="" />
              <span>
                Shopee Style <br /> Voucher 30%
              </span>
            </div>
            <div className={style.slider_bottom_logo}>
              <img src="../../../img/Facebook_Logo_(2019).jpg" alt="" />
              <span>
                Voucher Giảm Đến 1 <br /> Triệu
              </span>
            </div>
            <div className={style.slider_bottom_logo}>
              <img src="../../../img/Facebook_Logo_(2019).jpg" alt="" />
              <span>
                Khung Giờ <br />
                Săn Sale
              </span>
            </div>
            <div className={style.slider_bottom_logo}>
              <img src="../../../img/Facebook_Logo_(2019).jpg" alt="" />
              <span>Hàng Quốc Tế</span>
            </div>
            <div className={style.slider_bottom_logo}>
              <img src="../../../img/Facebook_Logo_(2019).jpg" alt="" />
              <span>
                Nạp Thẻ, Dịch Vụ <br />& Vé Tàu Hỏa
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className={style.category}>
        <div className={style.container}>
          <h3 className={style.homepage_text}>DANH MỤC</h3>
          <div className={style.homepage_details}>
            <div className={style.homepage_details_slide}>
              <a href="">
                <img src="../../../img/clothes.jpg" alt="" />
              </a>
              <span>Thời trang nam</span>
            </div>
            <div className={style.homepage_details_slide}>
              <a href="">
                <img src="../../../img/smartphone.jpg" alt="" />
              </a>
              <span>Điện thoại & phụ kiện</span>
            </div>
            <div className={style.homepage_details_slide}>
              <a href="">
                <img src="../../../img/electric.jpg" alt="" />
              </a>
              <span>Thiết bị điện tử</span>
            </div>
            <div className={style.homepage_details_slide}>
              <a href="">
                <img src="../../../img/laptop.jpg" alt="" />
              </a>
              <span>Máy tính & Laptop</span>
            </div>
            <div className={style.homepage_details_slide}>
              <a href="">
                <img src="../../../img/camera.jpg" alt="" />
              </a>
              <span>Máy ảnh & Máy quay phim</span>
            </div>
            <div className={style.homepage_details_slide}>
              <a href="">
                <img src="../../../img/clock.jpg" alt="" />
              </a>
              <span>Đồng hồ</span>
            </div>
            <div className={style.homepage_details_slide}>
              <a href="">
                <img src="../../../img/shoes.jpg" alt="" />
              </a>
              <span>Giày dép nam</span>
            </div>
            <div className={style.homepage_details_slide}>
              <a href="">
                <img src="../../../img/house.jpg" alt="" />
              </a>
              <span>Thiết bị điện gia dụng</span>
            </div>
            <div className={style.homepage_details_slide}>
              <a href="">
                <img src="../../../img/sport.jpg" alt="" />
              </a>
              <span>Thể thao & du lịch</span>
            </div>
            <div className={style.homepage_details_slide}>
              <a href="">
                <img src="../../../img/car.jpg" alt="" />
              </a>
              <span>Ô tô & Xe máy & Xe đạp</span>
            </div>
            <div className={style.homepage_details_slide}>
              <a href="">
                <img src="../../../img/clothes_women.jpg" alt="" />
              </a>
              <span>Thời trang nữ</span>
            </div>
            <div className={style.homepage_details_slide}>
              <a href="">
                <img src="../../../img/mom.jpg" alt="" />
              </a>
              <span>Mẹ & Bé</span>
            </div>
            <div className={style.homepage_details_slide}>
              <a href="">
                <img src="../../../img/life.jpg" alt="" />
              </a>
              <span>Nhà cửa & Đời sống</span>
            </div>
            <div className={style.homepage_details_slide}>
              <a href="">
                <img src="../../../img/beauty.jpg" alt="" />
              </a>
              <span>Sắc đẹp</span>
            </div>
            <div className={style.homepage_details_slide}>
              <a href="">
                <img src="../../../img/health.jpg" alt="" />
              </a>
              <span>Sức khỏe</span>
            </div>
            <div className={style.homepage_details_slide}>
              <a href="">
                <img src="../../../img/shoes_women.jpg" alt="" />
              </a>
              <span>Giày dép nữ</span>
            </div>
            <div className={style.homepage_details_slide}>
              <a href="">
                <img src="../../../img/bag_women.jpg" alt="" />
              </a>
              <span>Túi xách nữ</span>
            </div>
            <div className={style.homepage_details_slide}>
              <a href="">
                <img src="../../../img/pk.jpg" alt="" />
              </a>
              <span>Phụ kiện & Trang sức nữ</span>
            </div>
            <div className={style.homepage_details_slide}>
              <a href="">
                <img src="../../../img/bachhoa.jpg" alt="" />
              </a>
              <span>Bách hóa online</span>
            </div>
            <div className={style.homepage_details_slide}>
              <a href="">
                <img src="../../../img/book.jpg" alt="" />
              </a>
              <span>Nhà sách online</span>
            </div>
          </div>
        </div>
      </section>
      <section className={style.sales}>
        <div className={style.container}>
          <div className={style.sales_text}>
            <h3>FLASH SALE</h3>
            <a href="">Xem tất cả {">"}</a>
          </div>
          <div className={style.sales_main}>
            <div className={style.sales_item}>
              <img src="../../../img/daaa.jpg" alt="" />
              <span>1.000.000đ</span>
              <span>Đã bán 20</span>
            </div>
            <div className={style.sales_item}>
              <img src="../../../img/daaa.jpg" alt="" />
              <span>1.000.000đ</span>
              <span>Đã bán 20</span>
            </div>
            <div className={style.sales_item}>
              <img src="../../../img/daaa.jpg" alt="" />
              <span>1.000.000đ</span>
              <span>Đã bán 20</span>
            </div>
            <div className={style.sales_item}>
              <img src="../../../img/daaa.jpg" alt="" />
              <span>1.000.000đ</span>
              <span>Đã bán 20</span>
            </div>
            <div className={style.sales_item}>
              <img src="../../../img/daaa.jpg" alt="" />
              <span>1.000.000đ</span>
              <span>Đã bán 20</span>
            </div>
            <div className={style.sales_item}>
              <img src="../../../img/daaa.jpg" alt="" />
              <span>1.000.000đ</span>
              <span>Đã bán 20</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
