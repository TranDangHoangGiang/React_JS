import React from "react";

const FeaturedNews = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Bí quyết chọn mua bếp từ phù hợp với gia đình",
      excerpt:
        "Những tiêu chí quan trọng khi lựa chọn bếp từ để đảm bảo an toàn và tiết kiệm",
      image:
        "https://bizweb.dktcdn.net/100/301/093/articles/chau-rua-da-konox.jpg?v=1692331723050",
      date: "2024-01-15",
      category: "Hướng dẫn",
      readTime: "5 phút đọc",
    },
    {
      id: 2,
      title: "Xu hướng thiết kế bếp thông minh 2024",
      excerpt:
        "Khám phá những công nghệ mới nhất trong thiết kế và trang bị nhà bếp hiện đại",
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/301/093/articles/tong-hop-video-kinh-nghiem-lam-tu-bep.jpg?v=1619891975420",
      date: "2024-01-12",
      category: "Xu hướng",
      readTime: "7 phút đọc",
    },
    {
      id: 3,
      title: "Cách vệ sinh và bảo dưỡng máy hút mùi",
      excerpt:
        "Hướng dẫn chi tiết cách làm sạch và bảo dưỡng máy hút mùi để kéo dài tuổi thọ",
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/301/093/articles/tong-hop-video-kinh-nghiem-lam-tu-bep.jpg?v=1619891975420",
      date: "2024-01-10",
      category: "Bảo dưỡng",
      readTime: "4 phút đọc",
    },
    {
      id: 4,
      title: "So sánh máy rửa bát tích hợp và rời",
      excerpt: "Phân tích ưu nhược điểm của từng loại để lựa chọn phù hợp",
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/301/093/articles/tong-hop-video-kinh-nghiem-lam-tu-bep.jpg?v=1619891975420",
      date: "2024-01-08",
      category: "So sánh",
      readTime: "6 phút đọc",
    },
    {
      id: 5,
      title: "Tiết kiệm điện khi sử dụng thiết bị bếp",
      excerpt:
        "Những mẹo hay giúp giảm hóa đơn điện khi sử dụng các thiết bị nhà bếp",
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/301/093/articles/tong-hop-video-kinh-nghiem-lam-tu-bep.jpg?v=1619891975420",
      date: "2024-01-05",
      category: "Tiết kiệm",
      readTime: "5 phút đọc",
    },
    {
      id: 6,
      title: "An toàn khi sử dụng bếp gas và bếp từ",
      excerpt: "Những lưu ý quan trọng để đảm bảo an toàn cho gia đình",
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/301/093/articles/tong-hop-video-kinh-nghiem-lam-tu-bep.jpg?v=1619891975420",
      date: "2024-01-03",
      category: "An toàn",
      readTime: "4 phút đọc",
    },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      "Hướng dẫn": "bg-blue-100 text-blue-800",
      "Xu hướng": "bg-purple-100 text-purple-800",
      "Bảo dưỡng": "bg-green-100 text-green-800",
      "So sánh": "bg-yellow-100 text-yellow-800",
      "Tiết kiệm": "bg-orange-100 text-orange-800",
      "An toàn": "bg-red-100 text-red-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <section className="page-container mb-10 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-red-500 mb-3">
          TIN TỨC & KIẾN THỨC
        </h1>
        <p className="text-gray-600 text-lg">
          Cập nhật xu hướng và kiến thức hữu ích về thiết bị nhà bếp
        </p>
        <div className="w-24 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Featured Articles Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        {/* Main Featured Article */}
        <div className="lg:col-span-8">
          <article className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl bg-white">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={newsArticles[0].image}
                alt={newsArticles[0].title}
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="mb-4">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(
                    newsArticles[0].category
                  )} bg-opacity-90`}
                >
                  {newsArticles[0].category}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-red-300 transition-colors">
                {newsArticles[0].title}
              </h2>

              <p className="text-gray-200 mb-4 line-clamp-2">
                {newsArticles[0].excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-300">
                  <span>{newsArticles[0].date}</span>
                  <span>•</span>
                  <span>{newsArticles[0].readTime}</span>
                </div>

                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Đọc tiếp
                </button>
              </div>
            </div>
          </article>
        </div>

        {/* Side Articles */}
        <div className="lg:col-span-4 space-y-6">
          {newsArticles.slice(1, 4).map((article) => (
            <article key={article.id} className="group cursor-pointer">
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="flex">
                  <div className="w-24 h-24 flex-shrink-0">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex-1 p-4">
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs font-semibold mb-2 ${getCategoryColor(
                        article.category
                      )}`}
                    >
                      {article.category}
                    </span>

                    <h3 className="font-semibold text-gray-900 text-sm line-clamp-2 group-hover:text-red-600 transition-colors">
                      {article.title}
                    </h3>

                    <div className="flex items-center space-x-2 mt-2 text-xs text-gray-500">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* More Articles Grid */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Bài viết khác</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.slice(3).map((article) => (
            <article key={article.id} className="group cursor-pointer">
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-semibold mb-3 ${getCategoryColor(
                      article.category
                    )}`}
                  >
                    {article.category}
                  </span>

                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>

                    <button className="text-red-600 hover:text-red-800 text-sm font-medium">
                      Đọc tiếp →
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Service Features */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold text-center mb-8">
          Cam kết dịch vụ của chúng tôi
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center group">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
              <svg
                className="w-8 h-8"
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
            <h4 className="font-semibold mb-2">Vận chuyển miễn phí</h4>
            <p className="text-sm text-white/80">
              Áp dụng toàn quốc cho đơn hàng trên 2 triệu
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
              </svg>
            </div>
            <h4 className="font-semibold mb-2">Đổi trả miễn phí</h4>
            <p className="text-sm text-white/80">
              Trong vòng 30 ngày nếu không hài lòng
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5Z"
                />
              </svg>
            </div>
            <h4 className="font-semibold mb-2">Thanh toán đa dạng</h4>
            <p className="text-sm text-white/80">
              Hỗ trợ nhiều phương thức thanh toán tiện lợi
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 className="font-semibold mb-2">Hoàn tiền 100%</h4>
            <p className="text-sm text-white/80">
              Với sản phẩm bị lỗi từ nhà sản xuất
            </p>
          </div>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="mt-12 bg-gray-50 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Đăng ký nhận tin
        </h3>
        <p className="text-gray-600 mb-6">
          Nhận thông tin khuyến mãi và bài viết mới nhất từ Giangdz
        </p>

        <div className="max-w-md mx-auto flex">
          <input
            type="email"
            placeholder="Nhập email của bạn..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-r-lg font-medium transition-colors">
            Đăng ký
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNews;
