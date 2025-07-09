import "swiper/scss";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import CategoryPage from "./pages/CategoryPage";
import AdminApp from "./AdminApp";
import { Fragment, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProductPage from "./module/products/AddProductPage";
import AddProductsButton from "./data/wash_product/AddProductsButton";
import SyncToAllProducts from "./data/all_products/SyncToAllProducts";
// import AddProductsButton from "./data/machine_product/AddProductsButton";
function App() {
  return (
    <Fragment>
      {/* Render content based on mode */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details" element={<ProductDetails />} />
        <Route path="/category-page" element={<CategoryPage />} />
        <Route path="/data" element={<AddProductsButton />} />
        {/* <Route path="/add" element={<SyncToAllProducts />} /> */}
      </Routes>
      <Routes>
        <Route path="/admin" element={<AdminApp />} />
        {/* <Route
          path="/admin/add_products"
          element={<AddProductPage onPageChange={onPageChange} />}
        /> */}
      </Routes>
    </Fragment>
  );
}
export default App;
