import React from "react";
import StarRating from "./StarRating";
import ReviewItem from "./ReviewItem";

const ProductTabs = ({ activeTab, setActiveTab, product, reviews }) => {
  const tabs = [
    { id: "description", label: "Mô tả chi tiết" },
    { id: "specifications", label: "Thông số kỹ thuật" },
    { id: "reviews", label: "Đánh giá" },
  ];

  const specLabels = {
    brand: "Thương hiệu",
    model: "Model",
    power: "Công suất",
    voltage: "Điện áp",
    material: "Chất liệu",
    dimensions: "Kích thước",
    weight: "Trọng lượng",
    warranty: "Bảo hành",
    origin: "Xuất xứ",
  };

  return (
    <div className="bg-white rounded-xl shadow-lg mb-12">
      <div className="border-b">
        <div className="flex space-x-8 px-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-2 border-b-2 font-medium transition-colors ${
                activeTab === tab.id
                  ? "border-red-600 text-red-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6">
        {activeTab === "description" && (
          <div className="prose max-w-none">
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              {product.detailedDescription}
            </div>
          </div>
        )}

        {activeTab === "specifications" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div
                key={key}
                className="flex justify-between py-2 border-b border-gray-100"
              >
                <span className="font-medium text-gray-600">
                  {specLabels[key] || key}
                </span>
                <span className="text-gray-900">{value}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="space-y-6">
            <div className="flex items-center gap-8 p-4 bg-gray-50 rounded-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">
                  {product.rating}
                </div>
                <div className="flex justify-center mb-1">
                  <StarRating rating={product.rating} />
                </div>
                <div className="text-sm text-gray-600">
                  {product.reviewCount} đánh giá
                </div>
              </div>
              <div className="flex-1">
                <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
                  Viết đánh giá
                </button>
              </div>
            </div>

            <div className="space-y-6">
              {reviews.map((review) => (
                <ReviewItem key={review.id} review={review} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
