import React, { useState, useEffect } from "react";

const FloatingActionButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Open Facebook page
  const openFacebook = () => {
    window.open("https://www.facebook.com/giang.hoang.373382/", "_blank");
  };

  // Open Zalo
  const openZalo = () => {
    window.open("https://zalo.me/0978123881", "_blank");
  };

  return (
    <div className="fixed right-3 bottom-4 md:right-6 md:bottom-6 z-50 flex flex-col items-center space-y-4">
      {/* Hotline Button */}
      <div className="relative animate-float-gentle">
        <button
          onClick={openZalo}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="floating-btn group w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center relative overflow-hidden"
          aria-label="Gọi Zalo"
        >
          <img
            src="/hotline.png"
            alt="Hotline"
            className="w-9 h-9 transition-transform duration-300 group-hover:rotate-12 relative z-10"
          />

          {/* Ripple effect */}
          <div className="absolute inset-0 rounded-full bg-green-300 opacity-40 animate-ping"></div>

          {/* Shine effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        </button>

        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-4 py-3 rounded-xl text-sm whitespace-nowrap shadow-2xl animate-fade-in border border-gray-700">
            <div className="relative flex items-center space-x-2">
              <span className="text-green-400">📞</span>
              <span className="font-medium">Hotline: 0978123881</span>
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
            </div>
          </div>
        )}
      </div>

      {/* Facebook Button */}
      <button
        onClick={openFacebook}
        className="floating-btn group w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center relative overflow-hidden"
        aria-label="Theo dõi Facebook"
      >
        <img
          src="/fb.png"
          alt="Facebook"
          className="w-9 h-9 transition-transform duration-300 group-hover:rotate-12 relative z-10"
        />

        {/* Hover effect */}
        <div className="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>

        {/* Shine effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      </button>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="floating-btn group w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center animate-bounce-in relative overflow-hidden"
          aria-label="Lên đầu trang"
        >
          <img
            src="/top.png"
            alt="Back to top"
            className="w-9 h-9 transition-transform duration-300 group-hover:-translate-y-1 relative z-10"
          />

          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-red-400 opacity-0 group-hover:opacity-40 transition-opacity duration-300 animate-pulse"></div>

          {/* Shine effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        </button>
      )}

      {/* Background decoration */}
      <div className="absolute -inset-6 bg-gradient-to-t from-black/5 to-transparent rounded-full blur-xl pointer-events-none"></div>

      {/* Floating particles effect */}
      <div className="absolute -inset-8 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 w-1 h-1 bg-white/30 rounded-full animate-ping"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-1 h-1 bg-white/20 rounded-full animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-0 w-1 h-1 bg-white/25 rounded-full animate-ping"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
    </div>
  );
};

export default FloatingActionButtons;
