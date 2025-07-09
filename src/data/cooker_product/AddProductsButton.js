import React from "react";
import { AddCookerProducts } from "./AddCookerProducts";

export default function AddProductsButton() {
  return (
    <div>
      <button onClick={AddCookerProducts}>
        Thêm 20 sản phẩm bếp điện từ vào Firestore
      </button>
    </div>
  );
}
