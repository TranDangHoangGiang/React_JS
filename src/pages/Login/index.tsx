import Header from "../../components/Header";
import style from "./style.module.css";
function Login() {
  return (
    <>
      <Header />
      <section className={style.login_acc}>
        <div className={style.login}>
          <div className={style.login_page}>
            <div className={style.login_left}>
              <img src="../../../img/logo.jpg" alt="logo-shopee2" />
              <h3>Shopee</h3>
              <span>Nền tảng thương mại điện tử</span>
              <span>yêu thích ở Đông Nam Á & Đài Loan</span>
            </div>
            <div className={style.login_right}>
              <form action="">
                <div className={style.login_right_text}>
                  <span>Đăng nhập</span>
                  <span>
                    Đăng nhập với mã <br /> QR
                  </span>
                  <a href="">
                    <img src="../../../img/qr.jpg" alt="" />
                  </a>
                </div>
                <div className={style.login_right_button}>
                  <input
                    type="text"
                    placeholder="Email/Số điện thoại/Tên đăng nhập"
                  />
                  <input type="password" placeholder="Mật khẩu" />
                  <button className={style.button_login}>ĐĂNG NHẬP</button>
                  <div className={style.login_right_button_text}>
                    <a href="">Quên mật khẩu</a>
                    <a href="">Đăng nhập với SMS</a>
                  </div>
                  <div className={style.line_text}>
                    <span>HOẶC</span>
                  </div>
                  <div className={style.login_right_button_socials}>
                    <button>
                      <a href="">
                        <img
                          src="../../../img/Facebook_Logo_(2019).jpg"
                          alt="fb"
                        />
                      </a>
                      <span>Facebook</span>
                    </button>
                    <button>
                      <a href="">
                        <img src="../../../img/Google__G__logo.jpg" alt="gg" />
                      </a>
                      <span>Google</span>
                    </button>
                  </div>
                </div>
                <div className={style.login_right_button_signup}>
                  <p>
                    Bạn mới biết đến Shopee? <span>Đăng ký</span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
