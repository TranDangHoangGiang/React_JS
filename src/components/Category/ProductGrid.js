import React from "react";
import ProductCard from "./ProductCard";
import EmptyState from "./EmptyState";

const ProductGrid = ({ products, onAddToCart, formatPrice }) => {
  if (products.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          formatPrice={formatPrice}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
