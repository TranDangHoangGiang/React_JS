import React from "react";

const ProductPagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center">
      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
        >
          Trước
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => onPageChange(index + 1)}
            className={`px-3 py-2 border rounded-lg transition-colors ${
              currentPage === index + 1
                ? "bg-red-500 text-white border-red-500"
                : "border-gray-300 hover:bg-gray-50"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
        >
          Sau
        </button>
      </div>
    </div>
  );
};

export default ProductPagination;
