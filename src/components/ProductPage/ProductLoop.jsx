import React from "react";
import productLoopImg1 from "../../assets/images/productLoopImg1.jpg";
import { ReactComponent as LeftArrow } from "../../assets/icons/arrow-left.svg";
import { ReactComponent as RightArrow } from "../../assets/icons/arrow-right.svg";

const ProductLoop = () => {
  return (
    <div className="mt-4 px-8 xl:px-40">
      <div className="flex flex-wrap gap-4">
        {productDetails.map((product) => {
          return (
            <div key={product.id} className="w-full">
              <div className="flex">
                <div
                  className="flex bg-cover bg-center relative w-full h-[25rem] md:w-[34rem] md:h-[45rem]"
                  style={{
                    backgroundImage: `url("${product.image}")`,
                  }}
                >
                  <div className="flex gap-2 flex-col absolute top-12 left-14 transform -translate-x-1/2 -translate-y-1/2">
                    <p className="py-1 px-[0.87rem] font-inter text-base font-bold bg-white text-black uppercase rounded-[0.25rem]">
                      {product.category}
                    </p>
                    <p className="py-1 px-[0.87rem] font-inter text-base font-bold bg-green-500 text-white uppercase rounded-[0.25rem]">
                      {product.discountPercent}
                    </p>
                  </div>
                  <div className="absolute  w-full top-1/2 flex justify-between px-6">
                    <span
                      //   onClick={handlePrevClick}
                      className="bg-white w-12 h-12 p-3 cursor-pointer flex justify-center items-center rounded-full"
                    >
                      <LeftArrow />
                    </span>
                    <span
                      //   onClick={handleNextClick}
                      className="bg-white w-12 h-12 p-3 cursor-pointer flex justify-center items-center rounded-full"
                    >
                      <RightArrow />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductLoop;

const productDetails = [
  {
    id: 1,
    name: "Loveseat Sofa",
    image: productLoopImg1,
    price: 100.0,
    discount: 50.0,
    discountPercent: "-50%",
    star: "★ ★ ★ ★ ★",
    category: "New",
  },
];
