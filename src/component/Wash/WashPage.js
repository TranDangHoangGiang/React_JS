import React from "react";
import { products } from "../cooker/data";

const WashPage = () => {
  return (
    <section className="page-container mb-10 px-5">
      <h1 className="text-4xl font-semibold text-red-500 text-center mb-5 pt-5">
        MÁY RỬA BÁT
      </h1>
      <div className="cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-gray-400 rounded-md mb-5">
        <img
          src="https://bizweb.dktcdn.net/100/301/093/themes/973373/assets/banner_index.jpg?1749454039804"
          alt=""
          className="w-full h-auto object-cover rounded-md"
        />
      </div>
      <div className="cookerpage grid grid-cols-4 gap-5">
        {products.length > 0 &&
          products
            .slice(0, 8)
            .map((item) => <Wash key={item.id} products={item}></Wash>)}
      </div>
    </section>
  );
};
function Wash({ products }) {
  return (
    <div className="border border-gray-300 h-full flex flex-col p-3 rounded-md">
      <img
        src={products.img}
        alt=""
        className="h-[300px] object-cover w-full cursor-pointer"
      />
      <div className="flex flex-col gap-y-2 py-3 cursor-pointer flex-1">
        <h3 className="text-xl font-normal leading-[35px]">{products.title}</h3>
        <div>
          <span className="text-red-600 font-medium text-xl">
            {products.price}
          </span>
          <span className="block text-xl text-green-500">Mua 1 tặng 1</span>
        </div>
        <button className="bg-[#edeff1] text-blue-500 w-full py-3 rounded-lg text-center flex items-center justify-center mt-auto">
          MUA HÀNG
        </button>
      </div>
    </div>
  );
}
export default WashPage;
