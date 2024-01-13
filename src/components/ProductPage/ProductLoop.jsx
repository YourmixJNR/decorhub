import React, { useState } from "react";
import { ReactComponent as LeftArrow } from "../../assets/icons/arrow-left.svg";
import { ReactComponent as RightArrow } from "../../assets/icons/arrow-right.svg";
import productLoopImg1 from "../../assets/images/productLoopImg1.jpg";
import ImageColorSilver from "../../assets/images/imageColorSilver.jpg";
import ImageColorRed from "../../assets/images/imageColorRed.jpg";
import ImageColorFaded from "../../assets/images/imageColorFaded.jpg";

const ProductLoop = () => {
  const [currentColorIndex, setColorCurrentIndex] = useState(0);

  const handleClick = (index) => {
    // Set the currentColorIndex to the clicked index
    setColorCurrentIndex(index);
  };

  return (
    <div className="mt-4 px-8 xl:px-40">
      <div className="flex flex-wrap gap-4">
        {productDetails.map((product) => {
          return (
            <div key={product.id} className="w-full">
              <div className="flex flex-col gap-8">
                <div
                  className="flex bg-cover bg-center relative w-full h-[25rem] sm:h-[45rem]"
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
                  <div className="absolute w-full top-1/2 flex justify-between px-6">
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
                <div className="flex flex-col pb-6 border-b border-neutral-200 gap-4">
                  <div className="space-x-4">
                    <span className="text-base text-neutral-900 font-inter font-normal">
                      {product.star}
                    </span>
                    <span className="text-xs text-neutral-900 font-inter font-normal">
                      {product.reviews} Reviews
                    </span>
                  </div>
                  <h5 className="font-poppins text-[2.5rem] font-medium text-neutral-900">
                    {product.name}
                  </h5>
                  <p className="font-inter text-base font-normal text-neutral-500">
                    {product.description}
                  </p>
                  <div className="font-poppins font-medium space-x-3">
                    <span className="text-[1.75rem] text-neutral-950">
                      ${product.price}
                    </span>{" "}
                    <span className="text-xl text-neutral-600 line-through">
                      ${product.discount}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="space-y-2">
                    <p className="font-inter text-base font-semibold text-neutral-500">Measurement</p>
                    <p className="font-inter text-xl font-normal">{product.measurement}"</p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="space-y-2">
                      <p className="font-inter text-base font-semibold text-neutral-500">Choose Color {">"}</p>
                      <p className="font-inter text-xl font-normal">
                        {product.colors[currentColorIndex]?.name}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      {product.colors.map((color, index) => (
                        <img
                          key={index}
                          src={`${color.image}`}
                          onClick={() => handleClick(index)}
                          alt=""
                          className={`w-[72px] h-72px ${
                            currentColorIndex === index
                              ? "border border-neutral-700"
                              : ""
                          }`}
                        />
                      ))}
                    </div>
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
    name: "Tray Table",
    image: productLoopImg1,
    description:
      "Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.",
    price: 100.12,
    discount: 50.11,
    discountPercent: "-50%",
    star: "★ ★ ★ ★ ★",
    reviews: 11,
    category: "New",
    measurement: "17 1/2x20 5/8",
    colors: [
      { name: "Black", image: productLoopImg1 },
      { name: "Silver", image: ImageColorSilver },
      { name: "Red", image: ImageColorRed },
      { name: "Faded", image: ImageColorFaded },
    ],
  },
];
