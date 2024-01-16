import React, { useState } from "react";
import { ReactComponent as SendArrow } from "../../../assets/icons/white-right-arrow.svg";

const Reviews = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="w-full">
      <div className="flex flex-col gap-8">
        <div className="space-y-6">
          <h3 className="text-xl font-poppins font-medium text-gray-900">
            Customer Reviews
          </h3>
          {productReview.map((product, index) => {
            return (
              <div key={index}>
                <div className="space-x-2">
                  <span className="text-base text-neutral-900 font-inter font-normal">
                    {product.star}
                  </span>
                  <span className="text-xs text-neutral-900 font-inter font-normal">
                    {product.reviews} Reviews
                  </span>
                </div>
                <span className="font-inter text-sm font-semibold pl-28">
                  {product.name}
                </span>
              </div>
            );
          })}
        </div>
        <div>
          <div className="flex relative items-center">
            <div className="absolute p-1 bg-neutral-950 rounded-full mr-2.5 right-0">
              <SendArrow />
            </div>
            <input
              value={value}
              onChange={handleChange}
              type="text"
              placeholder="Share your thoughts"
              className="h-11 w-full font-inter text- font-medium rounded-md border border-slate-500 pl-4 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

const productReview = [
  {
    id: 1,
    name: "Tray Table",
    description:
      "Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.",
    star: "★ ★ ★ ★ ★",
    reviews: 11,
  },
];
