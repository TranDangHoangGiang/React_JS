import React, { useRef } from "react";

const ImageUpload = ({ onUpload }) => {
  const inputRef = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div>
      <label className="block font-medium mb-1">Ảnh sản phẩm</label>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-600"
      />
    </div>
  );
};

export default ImageUpload;
