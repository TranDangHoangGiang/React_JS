import React from "react";
import { useAppContext } from "../../context/AppContext";

const Header = () => {
  const { currentSection, scrollToSection } = useAppContext();

  const navItems = [
    {
      name: "Khuyến mãi mới",
      section: "promotions",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
          />
        </svg>
      ),
    },
    {
      name: "Bếp điện từ",
      section: "cooker-section",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      name: "Máy hút mùi",
      section: "machine-section",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    },
    {
      name: "Máy rửa bát",
      section: "wash-section",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1-1H8a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      ),
    },
    {
      name: "Phụ kiện bếp",
      section: "accessories",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-gradient-to-r from-red-500 to-red-600 shadow-lg mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Navigation Items */}
          <nav className="flex items-center space-x-1">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.section)}
                className={`
                  flex items-center space-x-2 px-4 py-2 rounded-lg text-white font-medium transition-all duration-200 transform hover:scale-105
                  ${
                    currentSection === item.section
                      ? "bg-white/20 shadow-md"
                      : "hover:bg-white/10 hover:shadow-md"
                  }
                `}
              >
                <span className="hidden sm:block">{item.icon}</span>
                <span className="text-sm">{item.name}</span>
              </button>
            ))}
          </nav>

          {/* Special Promotion Badge */}
          <div className="flex items-center space-x-3 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <svg
                  className="w-6 h-6 text-red-500 animate-pulse"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                  />
                </svg>
                {/* Sparkle effect */}
                <div className="absolute -top-1 -right-1 w-3 h-3">
                  <div className="w-full h-full bg-yellow-400 rounded-full animate-ping"></div>
                  <div className="absolute inset-0 w-full h-full bg-yellow-300 rounded-full"></div>
                </div>
              </div>

              <div>
                <span className="text-yellow-500 font-bold text-lg">
                  KHUYẾN MÃI LỚN
                </span>
                <div className="text-xs text-gray-600">Giảm đến 50%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden border-t border-red-400/30">
        <div className="px-4 py-2">
          <div className="flex space-x-1 overflow-x-auto scrollbar-hide">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.section)}
                className={`
                  flex-shrink-0 flex items-center space-x-1 px-3 py-2 rounded-lg text-white text-xs font-medium transition-all duration-200
                  ${
                    currentSection === item.section
                      ? "bg-white/20"
                      : "hover:bg-white/10"
                  }
                `}
              >
                <span>{item.icon}</span>
                <span className="whitespace-nowrap">{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
