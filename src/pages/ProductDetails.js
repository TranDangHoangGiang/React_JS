import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import Layout from "../component/layout/Layout";
import {
  Breadcrumb,
  ProductImageGallery,
  ProductInfo,
  ProductActions,
  ShippingInfo,
  ProductTabs,
  RelatedProducts,
} from "../components/ProductDetails";

const ProductDetails = () => {
  const { addToCart, showToast } = useAppContext();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  // Sample product data - mô phỏng dữ liệu chi tiết sản phẩm
  const product = {
    id: 1,
    title: "Bếp từ đôi Sunhouse SHB9102",
    price: "7.200.000₫",
    originalPrice: "8.500.000₫",
    discount: "15%",
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
    description:
      "Bếp từ đôi Sunhouse SHB9102 với công nghệ hiện đại, thiết kế sang trọng và tiết kiệm điện năng tối ưu. Phù hợp cho mọi gia đình hiện đại.",

    images: [
      "https://bizweb.dktcdn.net/thumb/large/100/301/093/products/bep-tu-chefs-dih990-plus-990p-copy-3e062319-0639-4077-ae09-f7138fa8597c.jpg?v=1747492049300",
      "https://bizweb.dktcdn.net/thumb/large/100/301/093/products/1-combo-1-spelier-240c.jpg?v=1730134238897",
      "https://bizweb.dktcdn.net/thumb/large/100/301/093/products/2-combo-2-spelier-240c.jpg?v=1730134283090",
      "https://bizweb.dktcdn.net/thumb/large/100/301/093/products/4-combo-4-spelier-530s.jpg?v=1730857214007",
    ],

    specifications: {
      brand: "Sunhouse",
      model: "SHB9102",
      power: "4000W",
      voltage: "220V",
      material: "Kính cường lực Schott Ceran",
      dimensions: "59 x 52 x 6.5 cm",
      weight: "8.5 kg",
      warranty: "24 tháng",
      origin: "Việt Nam",
    },

    features: [
      "Công nghệ cảm ứng thông minh",
      "9 mức công suất điều chỉnh",
      "Tính năng hẹn giờ và bảo vệ an toàn",
      "Mặt kính cường lực chống trầy xước",
      "Thiết kế hiện đại, sang trọng",
      "Tiết kiệm điện năng tối ưu",
    ],

    detailedDescription: `Bếp từ đôi Sunhouse SHB9102 là sản phẩm cao cấp được thiết kế dành cho các gia đình hiện đại. 
Với công nghệ cảm ứng tiên tiến và mặt kính cường lực Schott Ceran cao cấp, sản phẩm mang đến trải nghiệm nấu nướng tuyệt vời.

Đặc biệt, bếp được trang bị hệ thống an toàn đa lớp với tính năng tự động ngắt khi không có nồi hoặc quá nhiệt, đảm bảo an toàn tuyệt đối cho người sử dụng.

Thiết kế tinh tế với đường nét hiện đại sẽ làm cho không gian bếp của bạn trở nên sang trọng và đẳng cấp hơn.`,
  };

  // Sample reviews
  const reviews = [
    {
      id: 1,
      name: "Nguyễn Thị Lan",
      rating: 5,
      date: "15/01/2024",
      comment:
        "Bếp rất tốt, nấu nướng nhanh và tiết kiệm điện. Thiết kế đẹp, phù hợp với không gian bếp hiện đại.",
    },
    {
      id: 2,
      name: "Trần Văn Nam",
      rating: 4,
      date: "10/01/2024",
      comment:
        "Chất lượng ổn, giao hàng nhanh. Bếp hoạt động tốt, chỉ có điều hướng dẫn sử dụng hơi ít.",
    },
    {
      id: 3,
      name: "Lê Thị Hoa",
      rating: 5,
      date: "05/01/2024",
      comment:
        "Cực kì hài lòng với sản phẩm này. Bếp đẹp, nấu nướng nhanh, dễ vệ sinh. Recommend!",
    },
  ];

  // Sample related products
  const relatedProducts = [
    {
      id: 2,
      img: "https://bizweb.dktcdn.net/thumb/large/100/301/093/products/1-combo-1-spelier-240c.jpg?v=1730134238897",
      title: "Bếp từ đơn Kangaroo KG351",
      price: "2.500.000₫",
    },
    {
      id: 3,
      img: "https://bizweb.dktcdn.net/thumb/large/100/301/093/products/2-combo-2-spelier-240c.jpg?v=1730134283090",
      title: "Bếp từ đôi Midea MI-T2117DG",
      price: "3.650.000₫",
    },
    {
      id: 4,
      img: "https://bizweb.dktcdn.net/thumb/large/100/301/093/products/may-hut-mui-canzy-cz-kc3870b-new.png?v=1742493692037",
      title: "Bếp từ đôi Electrolux EHI7320BA",
      price: "8.900.000₫",
    },
    {
      id: 5,
      img: "https://bizweb.dktcdn.net/thumb/large/100/301/093/products/4-combo-4-spelier-530s.jpg?v=1730857214007",
      title: "Bếp từ Bosch PUC631BB2E",
      price: "9.600.000₫",
    },
  ];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    showToast(`Đã thêm ${quantity} sản phẩm vào giỏ hàng!`, "success");
  };

  const handleBuyNow = () => {
    handleAddToCart();
    showToast("Đang chuyển đến trang thanh toán...", "info");
    // Logic chuyển đến trang thanh toán
  };

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleRelatedProductClick = (relatedProduct) => {
    console.log("Clicked related product:", relatedProduct);
    // Logic để navigate đến trang chi tiết sản phẩm liên quan
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <Breadcrumb productTitle={product.title} />

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Product Images */}
            <ProductImageGallery
              images={product.images}
              title={product.title}
            />

            {/* Product Info */}
            <div className="space-y-6">
              <ProductInfo product={product} />

              <ProductActions
                quantity={quantity}
                onQuantityChange={handleQuantityChange}
                onAddToCart={handleAddToCart}
                onBuyNow={handleBuyNow}
              />

              <ShippingInfo />
            </div>
          </div>

          {/* Detailed Information Tabs */}
          <ProductTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            product={product}
            reviews={reviews}
          />

          {/* Related Products */}
          <RelatedProducts
            products={relatedProducts}
            onProductClick={handleRelatedProductClick}
          />
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
