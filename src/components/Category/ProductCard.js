import React from "react";

const ProductCard = ({ product, onAddToCart, formatPrice }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
      <div className="relative overflow-hidden">
        <img
          src={product.img}
          alt={product.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
            Mới
          </span>
        )}
        {product.discount > 0 && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
            -{Math.round(product.discount)}%
          </span>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-red-500 transition-colors">
          {product.title}
        </h3>

        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400 text-sm">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={i < Math.floor(product.rating) ? "★" : "☆"}
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-gray-500 text-sm ml-2">
            ({product.rating.toFixed(1)})
          </span>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-xl font-bold text-red-600">
              {product.price}
            </span>
            {product.discount > 0 && (
              <span className="text-sm text-gray-500 line-through ml-2">
                {formatPrice(product.priceValue / (1 - product.discount / 100))}
              </span>
            )}
          </div>
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
            {product.type}
          </span>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onAddToCart(product)}
            className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors font-medium text-sm"
          >
            Thêm vào giỏ
          </button>
          <button className="bg-gray-100 text-gray-600 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm">
            Chi tiết
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
