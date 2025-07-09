import React, { useState, useEffect } from "react";
import Layout from "../component/layout/Layout";
import { products } from "../component/cooker/data";
import { useAppContext } from "../context/AppContext";
import {
  CategoryBanner,
  FilterSidebar,
  SortHeader,
  ProductGrid,
  ProductPagination,
} from "../components/Category";

const CategoryPage = () => {
  const { addToCart, showToast } = useAppContext();

  // Enhanced product data with additional properties for filtering
  const enhancedProducts = products.map((product, index) => ({
    ...product,
    category: product.title.includes("Máy hút mùi")
      ? "Máy hút mùi"
      : product.title.includes("Máy rửa bát")
      ? "Máy rửa bát"
      : "Bếp điện từ",
    brand:
      product.title.split(" ")[product.title.includes("Bếp từ") ? 2 : 1] ||
      "Khác",
    type: product.title.includes("đôi") ? "Đôi" : "Đơn",
    priceValue: parseInt(product.price.replace(/[^0-9]/g, "")),
    rating: 4 + Math.random() * 1, // Random rating 4-5
    isNew: index < 5, // First 5 products are new
    discount: index % 3 === 0 ? 10 + Math.random() * 20 : 0, // Random discount for some products
  }));

  const [filteredProducts, setFilteredProducts] = useState(enhancedProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    category: "all",
    brand: "all",
    priceRange: "all",
    type: "all",
  });
  const [sortBy, setSortBy] = useState("default");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const productsPerPage = 12;
  const categories = [
    "all",
    ...new Set(enhancedProducts.map((p) => p.category)),
  ];
  const brands = ["all", ...new Set(enhancedProducts.map((p) => p.brand))];
  const types = ["all", "Đơn", "Đôi"];

  // Filter and sort products
  useEffect(() => {
    let filtered = enhancedProducts.filter((product) => {
      const categoryMatch =
        filters.category === "all" || product.category === filters.category;
      const brandMatch =
        filters.brand === "all" || product.brand === filters.brand;
      const typeMatch = filters.type === "all" || product.type === filters.type;

      let priceMatch = true;
      if (filters.priceRange !== "all") {
        const price = product.priceValue;
        switch (filters.priceRange) {
          case "under3m":
            priceMatch = price < 3000000;
            break;
          case "3m-5m":
            priceMatch = price >= 3000000 && price <= 5000000;
            break;
          case "5m-8m":
            priceMatch = price > 5000000 && price <= 8000000;
            break;
          case "over8m":
            priceMatch = price > 8000000;
            break;
          default:
            priceMatch = true;
        }
      }

      return categoryMatch && brandMatch && typeMatch && priceMatch;
    });

    // Sort products
    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.priceValue - b.priceValue);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.priceValue - a.priceValue);
        break;
      case "popular":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        filtered.sort((a, b) => b.isNew - a.isNew);
        break;
      default:
        // Keep original order
        break;
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [filters, sortBy, enhancedProducts]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    showToast(`Đã thêm ${product.title} vào giỏ hàng!`, "success");
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  return (
    <Layout>
      <CategoryBanner productCount={filteredProducts.length} />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <FilterSidebar
            filters={filters}
            onFilterChange={handleFilterChange}
            categories={categories}
            brands={brands}
            types={types}
            isSidebarOpen={isSidebarOpen}
            onToggleSidebar={handleToggleSidebar}
          />

          <div className="lg:w-3/4">
            <SortHeader
              productCount={filteredProducts.length}
              currentPage={currentPage}
              totalPages={totalPages}
              sortBy={sortBy}
              onSortChange={handleSortChange}
            />

            <ProductGrid
              products={currentProducts}
              onAddToCart={handleAddToCart}
              formatPrice={formatPrice}
            />

            <ProductPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
