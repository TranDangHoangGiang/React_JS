import style from "./style.module.css";
function Header() {
  const generateRandomColor = () => {
    const hex = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return hex;
  };
  // return (
  //   <div
  //     className={style.header}
  //     style={{ backgroundColor: generateRandomColor() }}
  //   >
  //     Header
  //   </div>
  // );
  return (
    <header>
      <div className={style.header_logo}>
        <div className={style.header_logo_left}>
          <a href="">
            <img
              className={style.logo1}
              src="../../../img/Shopee-Logo-2015.jpg"
              alt="logo shopee"
            />
          </a>
          <span>Đăng nhập</span>
        </div>
        <div className={style.header_logo_right}>
          <a href="">Bạn cần giúp đỡ?</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
