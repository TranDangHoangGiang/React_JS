import React from "react";

const RelatedProducts = ({ products, onProductClick }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Sản phẩm liên quan</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => onProductClick && onProductClick(item)}
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                {item.title}
              </h3>
              <div className="text-red-600 font-bold text-lg">{item.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
