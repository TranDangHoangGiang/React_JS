import { useEffect } from "react";
import { getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase-app/firebase-config";

const SyncToAllProducts = () => {
  useEffect(() => {
    const sync = async () => {
      const sourceCollections = [
        { name: "cooker_product", category: "Bếp từ" },
        { name: "machine_product", category: "Máy hút mùi" },
        { name: "wash_product", category: "Máy rửa bát" },
      ];

      // 1. Lấy toàn bộ ID gốc đã có trong all_products
      const allProductsSnap = await getDocs(collection(db, "all_products"));
      const existingOriginIds = new Set(
        allProductsSnap.docs.map((doc) => doc.data().origin_id)
      );

      // 2. Duyệt từng collection gốc
      for (let col of sourceCollections) {
        const snapshot = await getDocs(collection(db, col.name));
        for (let doc of snapshot.docs) {
          const data = doc.data();
          const originId = doc.id;

          if (!existingOriginIds.has(originId)) {
            const newData = {
              ...data,
              origin_id: originId,
              source_collection: col.name,
              category: col.category,
              syncedAt: new Date().toISOString(),
            };

            await addDoc(collection(db, "all_products"), newData);
            console.log(`✅ Đã thêm: ${newData.title} từ ${col.name}`);
          } else {
            console.log(`⏭️ Bỏ qua trùng ID: ${originId}`);
          }
        }
      }

      alert("🎉 Đã đồng bộ sản phẩm chưa có vào all_products!");
    };

    sync();
  }, []);

  return <div className="p-4">Đang đồng bộ dữ liệu sang all_products...</div>;
};

export default SyncToAllProducts;
