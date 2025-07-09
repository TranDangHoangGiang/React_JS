import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import { supabase } from "../../supabase-app/supabase-config";
import { db } from "../../firebase-app/firebase-config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const ProductForm = ({ onPageChange }) => {
  const [product, setProduct] = useState({
    title: "",
    category: "Bếp từ",
    original_price: "",
    sale_price: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (file) => {
    setProduct((prev) => ({ ...prev, image: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !product.title.trim() ||
      !product.original_price.trim() ||
      !product.sale_price.trim() ||
      !product.image
    ) {
      alert("❌ Vui lòng nhập đầy đủ thông tin và chọn ảnh sản phẩm.");
      return;
    }
    setLoading(true);

    try {
      let imageUrl = "";

      // 1. Upload ảnh lên Supabase Storage
      if (product.image) {
        const ext = product.image.name.split(".").pop();
        const fileName = `images_${Date.now()}.${ext}`;

        const { data, error } = await supabase.storage
          .from("images")
          .upload(fileName, product.image);

        if (error) throw error;

        const { data: publicData } = supabase.storage
          .from("images")
          .getPublicUrl(fileName);

        imageUrl = publicData.publicUrl;
      }
      let collectionName = "";
      switch (product.category) {
        case "Bếp từ":
          collectionName = "cooker_product";
          break;
        case "Máy hút mùi":
          collectionName = "machine_product";
          break;
        case "Máy rửa bát":
          collectionName = "wash_product";
          break;
        default:
          collectionName = "other_product";
      }
      const productData = {
        title: product.title,
        category: product.category,
        original_price: parseFloat(product.original_price),
        sale_price: parseFloat(product.sale_price),
        image: imageUrl,
        createdAt: serverTimestamp(),
      };
      const detailDocRef = await addDoc(
        collection(db, collectionName),
        productData
      );
      const refId = detailDocRef.id; // Lưu lại ID chi tiết

      // Ghi thêm vào collection all_products
      await addDoc(collection(db, "all_products"), {
        ...productData,
        refId: refId,
        type: collectionName, // hoặc type: 'cooker_product' để tiện sửa/xóa
      });
      alert("✅ Thêm sản phẩm thành công!");
      onPageChange("products");
      setProduct({
        title: "",
        category: "Bếp từ",
        original_price: "",
        sale_price: "",
        image: null,
      });
    } catch (err) {
      console.error(err);
      alert("❌ Lỗi khi thêm sản phẩm hoặc upload ảnh.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block font-medium mb-1">Tên sản phẩm</label>
        <input
          type="text"
          name="title"
          value={product.title}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Nhập tên sản phẩm"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Loại sản phẩm</label>
        <select
          name="category"
          value={product.category}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <option>Bếp từ</option>
          <option>Máy hút mùi</option>
          <option>Máy rửa bát</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-medium mb-1">Giá gốc (₫)</label>
          <input
            type="number"
            name="original_price"
            value={product.original_price}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Giá khuyến mãi (₫)</label>
          <input
            type="number"
            name="sale_price"
            value={product.sale_price}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      </div>

      <ImageUpload onUpload={handleImageUpload} />

      <button
        type="submit"
        className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded shadow"
      >
        Thêm sản phẩm
      </button>
    </form>
  );
};

export default ProductForm;
