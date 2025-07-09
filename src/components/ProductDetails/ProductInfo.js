import React from "react";
import StarRating from "./StarRating";

const ProductInfo = ({ product }) => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {product.title}
        </h1>

        {/* Rating */}
        <div className="flex items-center gap-4 mb-4">
          <StarRating rating={product.rating} showNumber />
          <span className="text-sm text-gray-600">
            {product.reviewCount} đánh giá
          </span>
          <span className="text-sm text-green-600 font-medium">✓ Còn hàng</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-4xl font-bold text-red-600">
            {product.price}
          </span>
          <div className="flex flex-col">
            <span className="text-lg text-gray-500 line-through">
              {product.originalPrice}
            </span>
            <span className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded">
              Giảm {product.discount}
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="p-4 bg-blue-50 rounded-lg">
        <p className="text-gray-700 leading-relaxed">{product.description}</p>
      </div>

      {/* Key Features */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Tính năng nổi bật:</h3>
        <ul className="space-y-2">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductInfo;
