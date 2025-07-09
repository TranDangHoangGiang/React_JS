import React, { createContext, useContext, useState } from "react";
import Toast from "../components/UI/Toast";

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [currentSection, setCurrentSection] = useState("home");
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setCurrentSection(sectionId);
    }
  };

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
  };

  const hideToast = () => {
    setToast((prev) => ({ ...prev, show: false }));
  };

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        showToast(
          `Đã tăng số lượng "${product.title}" trong giỏ hàng!`,
          "success"
        );
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      showToast(`Đã thêm "${product.title}" vào giỏ hàng!`, "success");
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateCartQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  const value = {
    currentSection,
    setCurrentSection,
    searchTerm,
    setSearchTerm,
    cartItems,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    scrollToSection,
    showToast,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.show}
        onClose={hideToast}
      />
    </AppContext.Provider>
  );
};
