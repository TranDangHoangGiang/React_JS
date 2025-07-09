import React from "react";

const StarRating = ({ rating, showNumber = false, size = "text-base" }) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <span key={i} className="text-yellow-400">
            ★
          </span>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <span key={i} className="text-yellow-400">
            ☆
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-300">
            ★
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <div className={`flex items-center gap-1 ${size}`}>
      {renderStars()}
      {showNumber && (
        <span className="ml-1 text-sm text-gray-600">({rating})</span>
      )}
    </div>
  );
};

export default StarRating;
