import React from "react";
import { AddWashProducts } from "./AddWashProducts";

export default function AddProductsButton() {
  return (
    <div>
      <button
        onClick={AddWashProducts}
        className="border border-blue-400 bg-blue-500 text-white p-4 rounded-xl m-3 max-w-56"
      >
        Thêm 20 sản phẩm máy rửa bát vào Firestore
      </button>
    </div>
  );
}
