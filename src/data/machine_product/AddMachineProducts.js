// import các hàm cần thiết từ Firebase
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase-app/firebase-config";

const products = [
  {
    title: "Máy hút mùi kính cong Spelier SP 882",
    evaluate: 344,
    sale_price: 2890000,
    original_price: 4090000,
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/301/093/products/1-combo-1-spelier-240c.jpg?v=1730134238897",
    capacity: 900,
    sound: 58,
  },
  {
    title: "Máy hút mùi âm tủ Electrolux EFT7516K",
    evaluate: 277,
    sale_price: 2390000,
    original_price: 3190000,
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/301/093/products/bep-tu-chefs-dih990-plus-990p-copy-3e062319-0639-4077-ae09-f7138fa8597c.jpg?v=1747492049300",
    capacity: 700,
    sound: 60,
  },
  {
    title: "Máy hút mùi kính phẳng Teka NC 980",
    evaluate: 168,
    sale_price: 1890000,
    original_price: 2350000,
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/301/093/products/2-combo-2-spelier-240c.jpg?v=1730134283090",
    capacity: 850,
    sound: 56,
  },
  {
    title: "Máy hút mùi đảo Hafele HH-IR90D",
    evaluate: 401,
    sale_price: 3590000,
    original_price: 5250000,
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/301/093/products/may-hut-mui-canzy-cz-kc3870b-new.png?v=1742493692037",
    capacity: 1100,
    sound: 59,
  },
  {
    title: "Máy hút mùi kính cong Malloca H107-W",
    evaluate: 198,
    sale_price: 1990000,
    original_price: 2850000,
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/301/093/products/4-combo-4-spelier-530s.jpg?v=1730857214007",
    capacity: 800,
    sound: 64,
  },
  {
    title: "Máy hút mùi âm tủ Chefs EH-R506E9",
    evaluate: 325,
    sale_price: 2890000,
    original_price: 3990000,
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/301/093/products/bep-tu-chefs-dih999.jpg?v=1747494861913",
    capacity: 950,
    sound: 67,
  },
  {
    title: "Máy hút mùi kính cong Sevilla SV-90",
    evaluate: 157,
    sale_price: 2590000,
    original_price: 3490000,
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/301/093/products/1-combo-1-spelier-240c.jpg?v=1730134238897",
    capacity: 1000,
    sound: 62,
  },
  {
    title: "Máy hút mùi kính cong Lorca TA 3005M",
    evaluate: 189,
    sale_price: 1990000,
    original_price: 2890000,
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/301/093/products/bep-tu-chefs-dih990-plus-990p-copy-3e062319-0639-4077-ae09-f7138fa8597c.jpg?v=1747492049300",
    capacity: 900,
    sound: 61,
  },
  {
    title: "Máy hút mùi âm tủ Faster FS 70H",
    evaluate: 213,
    sale_price: 1690000,
    original_price: 2290000,
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/301/093/products/2-combo-2-spelier-240c.jpg?v=1730134283090",
    capacity: 750,
    sound: 60,
  },
  {
    title: "Máy hút mùi kính cong Arber AB 700K",
    evaluate: 367,
    sale_price: 3190000,
    original_price: 4590000,
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/301/093/products/may-hut-mui-canzy-cz-kc3870b-new.png?v=1742493692037",
    capacity: 920,
    sound: 63,
  },
];

export async function AddMachineProducts() {
  try {
    for (const product of products) {
      const newDocRef = doc(collection(db, "machine_product"));
      await setDoc(newDocRef, product);
    }
    console.log("Thêm dữ liệu thành công!");
  } catch (error) {
    console.error("Lỗi khi thêm dữ liệu: ", error);
  }
}
