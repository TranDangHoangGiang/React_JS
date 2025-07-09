import React from "react";

const ShippingInfo = () => {
  return (
    <div className="p-4 bg-green-50 rounded-lg">
      <h3 className="font-semibold text-green-800 mb-2">
        Chính sách giao hàng:
      </h3>
      <ul className="text-sm text-green-700 space-y-1">
        <li>• Miễn phí giao hàng toàn quốc cho đơn hàng trên 2 triệu</li>
        <li>• Giao hàng nhanh trong 24h tại TP.HCM và Hà Nội</li>
        <li>• Bảo hành chính hãng 24 tháng</li>
        <li>• Đổi trả trong 7 ngày nếu không hài lòng</li>
      </ul>
    </div>
  );
};

export default ShippingInfo;
