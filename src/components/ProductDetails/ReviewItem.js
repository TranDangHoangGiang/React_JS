import React from "react";
import StarRating from "./StarRating";

const ReviewItem = ({ review }) => {
  return (
    <div className="border-b border-gray-100 pb-6">
      <div className="flex items-center gap-4 mb-2">
        <span className="font-medium">{review.name}</span>
        <StarRating rating={review.rating} />
        <span className="text-sm text-gray-500">{review.date}</span>
      </div>
      <p className="text-gray-700">{review.comment}</p>
    </div>
  );
};

export default ReviewItem;
