import React from "react";
import Banner from "../component/banner/Banner";
import CookerPage from "../component/cooker/CookerPage";
import MachinePage from "../component/machine/MachinePage";
import WashPage from "../component/Wash/WashPage";
import FeaturedNews from "../component/news/FeaturedNews";
import Layout from "../component/layout/Layout";

const HomePage = () => {
  return (
    <div>
      <Layout>
        {/* Home Section */}
        <section id="home">
          <Banner />
        </section>

        {/* Cooker Section */}
        <section id="cooker-section">
          <CookerPage />
        </section>

        {/* Machine Section */}
        <section id="machine-section">
          <MachinePage />
        </section>

        {/* Wash Section */}
        <section id="wash-section">
          <WashPage />
        </section>

        {/* News Section */}
        <section id="news-section">
          <FeaturedNews />
        </section>

        {/* Placeholder sections for other navigation items */}
        <section
          id="promotions"
          className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-50 to-orange-50"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold text-red-600 mb-4">
              🎉 KHUYẾN MÃI ĐẶC BIỆT 🎉
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Giảm giá lên đến 50% cho tất cả sản phẩm
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-red-500 mb-2">
                  Giảm 30%
                </h3>
                <p className="text-gray-600">Bếp điện từ cao cấp</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-red-500 mb-2">
                  Giảm 40%
                </h3>
                <p className="text-gray-600">Máy hút mùi nhập khẩu</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-red-500 mb-2">
                  Giảm 50%
                </h3>
                <p className="text-gray-600">Máy rửa bát thông minh</p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="accessories"
          className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">
              🔧 PHỤ KIỆN BẾP 🔧
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Đầy đủ phụ kiện cho căn bếp hoàn hảo
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                "Chảo chống dính",
                "Nồi áp suất",
                "Dao bếp",
                "Thớt gỗ",
                "Khăn bếp",
                "Hộp đựng",
                "Dụng cụ",
                "Gia vị",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <p className="font-medium text-gray-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default HomePage;
