import React from "react";

const ProductActions = ({
  quantity,
  onQuantityChange,
  onAddToCart,
  onBuyNow,
}) => {
  return (
    <div className="space-y-4 pt-6 border-t">
      <div className="flex items-center gap-4">
        <span className="font-medium">Số lượng:</span>
        <div className="flex items-center border border-gray-300 rounded-lg">
          <button
            onClick={() => onQuantityChange("decrease")}
            className="px-3 py-2 hover:bg-gray-100 transition-colors"
          >
            -
          </button>
          <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
          <button
            onClick={() => onQuantityChange("increase")}
            className="px-3 py-2 hover:bg-gray-100 transition-colors"
          >
            +
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={onAddToCart}
          className="bg-red-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
        >
          <span>🛒</span>
          Thêm vào giỏ
        </button>
        <button
          onClick={onBuyNow}
          className="bg-red-700 text-white py-3 px-6 rounded-lg font-medium hover:bg-red-800 transition-colors"
        >
          Mua ngay
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button className="border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
          <span>💬</span>
          Chat tư vấn
        </button>
        <button className="border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
          <span>📞</span>
          Gọi đặt hàng
        </button>
      </div>
    </div>
  );
};

export default ProductActions;
