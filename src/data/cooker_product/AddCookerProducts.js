// import các hàm cần thiết từ Firebase
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase-app/firebase-config";

const products = [
  {
    title: "Nồi chiên không dầu Lock&Lock 5.5L",
    evaluate: 245,
    sale_price: 2250000,
    original_price: 3500000,
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/301/093/products/1-combo-1-spelier-240c.jpg?v=1730134238897",
  },
  {
    title: "Nồi cơm điện tử Toshiba 1.8L",
    evaluate: 198,
    sale_price: 1890000,
    original_price: 2690000,
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/301/093/products/bep-tu-chefs-dih990-plus-990p-copy-3e062319-0639-4077-ae09-f7138fa8597c.jpg?v=1747492049300",
  },
  {
    title: "Bếp hồng ngoại Sunhouse SHD6015",
    evaluate: 320,
    sale_price: 890000,
    original_price: 1290000,
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/301/093/products/2-combo-2-spelier-240c.jpg?v=1730134283090",
  },
  {
    title: "Lò vi sóng Sharp 23L",
    evaluate: 412,
    sale_price: 1790000,
    original_price: 2590000,
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/301/093/products/may-hut-mui-canzy-cz-kc3870b-new.png?v=1742493692037",
  },
  {
    title: "Máy xay sinh tố Philips HR2223",
    evaluate: 278,
    sale_price: 1450000,
    original_price: 1990000,
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/301/093/products/4-combo-4-spelier-530s.jpg?v=1730857214007",
  },
  {
    title: "Ấm siêu tốc Kangaroo KG333",
    evaluate: 134,
    sale_price: 350000,
    original_price: 590000,
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/301/093/products/bep-tu-chefs-dih999.jpg?v=1747494861913",
  },
  {
    title: "Bếp ga đôi Rinnai RV-715",
    evaluate: 156,
    sale_price: 1450000,
    original_price: 1890000,
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/301/093/products/1-combo-1-spelier-240c.jpg?v=1730134238897",
  },
  {
    title: "Máy ép trái cây Panasonic MJ-L500",
    evaluate: 202,
    sale_price: 2550000,
    original_price: 3190000,
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/301/093/products/bep-tu-chefs-dih990-plus-990p-copy-3e062319-0639-4077-ae09-f7138fa8597c.jpg?v=1747492049300",
  },
  {
    title: "Lò nướng Sanaky 35L",
    evaluate: 119,
    sale_price: 1150000,
    original_price: 1650000,
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/301/093/products/2-combo-2-spelier-240c.jpg?v=1730134283090",
  },
  {
    title: "Nồi áp suất điện Bluestone 5L",
    evaluate: 273,
    sale_price: 1890000,
    original_price: 2650000,
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/301/093/products/may-hut-mui-canzy-cz-kc3870b-new.png?v=1742493692037",
  },
];

export async function AddCookerProducts() {
  try {
    for (const product of products) {
      const newDocRef = doc(collection(db, "cooker_product"));
      await setDoc(newDocRef, product);
    }
    console.log("Thêm dữ liệu thành công!");
  } catch (error) {
    console.error("Lỗi khi thêm dữ liệu: ", error);
  }
}
