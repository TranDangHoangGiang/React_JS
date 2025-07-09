// import các hàm cần thiết từ Firebase
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase-app/firebase-config";

const products = [
  {
    title: "Máy rửa bát Bosch SMS68UI02E Serie 6",
    evaluate: 342,
    sale_price: 8990000,
    original_price: 12300000,
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/301/093/products/1-combo-1-spelier-240c.jpg?v=1730134238897",
    tankage: 12,
    consume: 10,
    programme: 6,
  },
  {
    title: "Máy rửa bát Electrolux ESF6010BW",
    evaluate: 198,
    sale_price: 7650000,
    original_price: 9990000,
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/301/093/products/bep-tu-chefs-dih990-plus-990p-copy-3e062319-0639-4077-ae09-f7138fa8597c.jpg?v=1747492049300",
    tankage: 8,
    consume: 9,
    programme: 5,
  },
  {
    title: "Máy rửa bát Hafele HDW-T50B",
    evaluate: 412,
    sale_price: 10200000,
    original_price: 13400000,
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/301/093/products/2-combo-2-spelier-240c.jpg?v=1730134283090",
    tankage: 13,
    consume: 11,
    programme: 7,
  },
  {
    title: "Máy rửa bát Toshiba DWS-22AVN",
    evaluate: 276,
    sale_price: 8150000,
    original_price: 11200000,
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/301/093/products/may-hut-mui-canzy-cz-kc3870b-new.png?v=1742493692037",
    tankage: 10,
    consume: 8,
    programme: 4,
  },
  {
    title: "Máy rửa bát Malloca WQP12-5203",
    evaluate: 321,
    sale_price: 10900000,
    original_price: 14800000,
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/301/093/products/4-combo-4-spelier-530s.jpg?v=1730857214007",
    tankage: 14,
    consume: 12,
    programme: 8,
  },
  {
    title: "Máy rửa bát Canzy CZ-DW15E",
    evaluate: 156,
    sale_price: 7450000,
    original_price: 10400000,
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/301/093/products/bep-tu-chefs-dih999.jpg?v=1747494861913",
    tankage: 11,
    consume: 9,
    programme: 6,
  },
  {
    title: "Máy rửa bát Panasonic NP-TH1-W",
    evaluate: 388,
    sale_price: 9750000,
    original_price: 12900000,
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/301/093/products/1-combo-1-spelier-240c.jpg?v=1730134238897",
    tankage: 10,
    consume: 7,
    programme: 5,
  },
  {
    title: "Máy rửa bát Galanz W60F",
    evaluate: 265,
    sale_price: 8850000,
    original_price: 12300000,
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/301/093/products/bep-tu-chefs-dih990-plus-990p-copy-3e062319-0639-4077-ae09-f7138fa8597c.jpg?v=1747492049300",
    tankage: 12,
    consume: 11,
    programme: 6,
  },
  {
    title: "Máy rửa bát Kocher KDEU-8835",
    evaluate: 193,
    sale_price: 9350000,
    original_price: 12600000,
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/301/093/products/2-combo-2-spelier-240c.jpg?v=1730134283090",
    tankage: 13,
    consume: 10,
    programme: 7,
  },
  {
    title: "Máy rửa bát độc lập Texgio TG-DW668S",
    evaluate: 301,
    sale_price: 11500000,
    original_price: 15700000,
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/301/093/products/may-hut-mui-canzy-cz-kc3870b-new.png?v=1742493692037",
    tankage: 15,
    consume: 12,
    programme: 9,
  },
];

export async function AddWashProducts() {
  try {
    for (const product of products) {
      const newDocRef = doc(collection(db, "wash_product"));
      await setDoc(newDocRef, product);
    }
    console.log("Thêm dữ liệu thành công!");
  } catch (error) {
    console.error("Lỗi khi thêm dữ liệu: ", error);
  }
}
