import React, { useState } from "react";
import { ReactComponent as LeftArrow } from "../../assets/icons/arrow-left.svg";
import { ReactComponent as RightArrow } from "../../assets/icons/arrow-right.svg";
import productLoopImg1 from "../../assets/images/productLoopImg1.jpg";
import ImageColorSilver from "../../assets/images/imageColorSilver.jpg";
import ImageColorRed from "../../assets/images/imageColorRed.jpg";
import ImageColorFaded from "../../assets/images/imageColorFaded.jpg";
import { ReactComponent as Add } from "../../assets/icons/Add.svg";
import { ReactComponent as Minus } from "../../assets/icons/Minus.svg";
import { ReactComponent as WishList } from "../../assets/icons/Wishlist.svg";

const ProductLoop = () => {
  const [currentColorIndex, setColorCurrentIndex] = useState(0);

  const handleClick = (index) => {
    // Set the currentColorIndex to the clicked index
    setColorCurrentIndex(index);
  };

  const [flyout, setFlyout] = useState({ quantity: 0 });

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setFlyout({ ...flyout, quantity: newQuantity });
  };

  return (
    <div className="mt-4 px-8 xl:px-40">
      <div className="flex flex-wrap gap-4">
        {productDetails.map((product) => {
          return (
            <div key={product.id} className="w-full">
              <div className="flex flex-wrap lg:flex-nowrap lg:gap-[3.94rem]">
                <div className="w-full">
                  <div
                    className="flex bg-cover bg-center relative w-full h-[25rem] sm:h-[45rem] lg:w-[34.25rem]"
                    style={{
                      backgroundImage: `url("${product.image}")`,
                    }}
                  >
                    <div className="flex gap-2 flex-col absolute top-12 left-14 transform -translate-x-1/2 -translate-y-1/2">
                      <p className="py-1 px-[0.87rem] font-inter text-base font-bold bg-white text-black uppercase rounded-[0.25rem]">
                        {product.status}
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
                </div>

                <div>
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

                  <div className="flex py-6 flex-col gap-6">
                    <div className="space-y-2">
                      <p className="font-inter text-base font-semibold text-neutral-500">
                        Measurement
                      </p>
                      <p className="font-inter text-xl font-normal">
                        {product.measurement}"
                      </p>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="space-y-2">
                        <p className="font-inter text-base font-semibold text-neutral-500">
                          Choose Color {">"}
                        </p>
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

                  <div className="flex py-6 gap-4 sm:gap-6 flex-col">
                    <div className="flex gap-2 justify-between items-center">
                      <div className="w-[5rem] h-[2.6rem] sm:w-[7rem] flex py-3 px-2 justify-center items-center bg-neutral-100 border rounded border-slate-500 ">
                        <Add className="cursor-pointer" />
                        <input
                          value={flyout.quantity}
                          type="number"
                          inputMode="numeric"
                          onChange={handleQuantityChange}
                          className="w-5 text-center bg-neutral-100 mx-2 focus:outline-none"
                        />
                        <Minus className="cursor-pointer" />
                      </div>
                      <button
                        type="submit"
                        className="text-black font-inter text-sm font-medium border border-black w-full flex gap-2 justify-center rounded-md p-2"
                      >
                        <WishList className="w-4" /> Wishlist
                      </button>
                    </div>
                    <button
                      type="submit"
                      className="font-inter text-lg font-medium bg-black w-full flex justify-center text-white rounded-md p-2 mb-4"
                    >
                      Add to Cart
                    </button>
                  </div>

                  <div className="space-y-2 font-inter text-xs font-normal text-neutral-500">
                    <div className="flex gap-[6.12rem]">
                      <p>SKU</p> <span className="text-black">{product.stockKeepingUnit}</span>
                    </div>
                    <div className="flex gap-[3.62rem]">
                      <p>CATEGORY</p> <span className="text-black">{product.category}</span>
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
    status: "New",
    category: "Living Room, Bedroom",
    stockKeepingUnit: 1117,
    measurement: "17 1/2x20 5/8",
    colors: [
      { name: "Black", image: productLoopImg1 },
      { name: "Silver", image: ImageColorSilver },
      { name: "Red", image: ImageColorRed },
      { name: "Faded", image: ImageColorFaded },
    ],
  },
];
