import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CloseMenu } from "../../../assets/icons/Line.svg";
import FlyoutImage1 from "../../../assets/images/flyoutImage1.jpg";
import FlyoutImage2 from "../../../assets/images/flyoutImage2.jpg";
import FlyoutImage3 from "../../../assets/images/flyoutImage3.jpg";
import { ReactComponent as Add } from "../../../assets/icons/Add.svg";
import { ReactComponent as Minus } from "../../../assets/icons/Minus.svg";
import "./FlyoutCart.css";

const FlyoutCart = ({setOpenFlyout, openFlyout }) => {
  return (
    <>
      <div>
        <div className="flex justify-between">
          <h5 className="font-poppins text-[1.75rem] font-medium">Cart</h5>
          <CloseMenu
            className="cursor-pointer"
            onClick={() => setOpenFlyout(!openFlyout)}
          />
        </div>
        {flyoutStuffs.map((flyout) => {
          return (
            <div
              className="flex justify-between py-6 mb-6 border-b border-slate-300"
              key={flyout.id}
            >
              <div className="flex gap-4">
                <img src={`${flyout.image}`} alt="" />
                <div className="flex flex-col gap-2">
                  <h4 className="font-inter text-sm font-semibold">
                    {flyout.name}
                  </h4>
                  <p className="font-inter text-xs font-normal text-neutral-700">
                    {" "}
                    Color: {flyout.color}
                  </p>
                  <div className="w-20 flex py-1 px-1 justify-center items-center border rounded border-slate-500 ">
                    <Add />
                    <input
                      value={flyout.quantity}
                      type="number"
                      inputMode="numeric"
                      className="w-5 text-center mx-2"
                    />
                    <Minus />
                  </div>
                </div>
              </div>
              <div className="flex gap-2 flex-col">
                <p className="font-inter text-sm font-semibold">
                  ${flyout.price}
                </p>
                <CloseMenu />
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <div className="flex justify-between border-b border-gray-200 py-[0.81rem]">
          <span className="font-inter text-base text-neutral-900">
            Subtotal
          </span>
          <p className="font-inter text-base font-semibold text-neutral-900">
            $99.00
          </p>
        </div>

        <div className="flex justify-between py-[0.81rem] mb-4">
          <span className="font-poppins text-xl font-medium text-neutral-900">
            Total
          </span>
          <p className="font-poppins text-xl font-semibold text-neutral-900">
            $234.00
          </p>
        </div>

        <button
          type="submit"
          className="font-inter text-lg font-medium bg-black w-full flex justify-center text-white rounded-md p-2 mb-4"
        >
          Checkout
        </button>
        <Link
          to="#"
          className="font-inter text-sm font-semibold space-x-1 border-b border-neutral-900"
        >
          View Cart
        </Link>
      </div>
    </>
  );
};

export default FlyoutCart;

const flyoutStuffs = [
  {
    id: 1,
    name: "Tray Table",
    image: FlyoutImage1,
    price: 19.11,
    color: "Black",
    quantity: 5,
  },
  {
    id: 2,
    name: "Tray Table",
    image: FlyoutImage2,
    price: 19.19,
    color: "Red",
    quantity: 1,
  },
  {
    id: 3,
    name: "Tray Table",
    image: FlyoutImage3,
    price: 39.0,
    color: "Gold",
    quantity: 1,
  },
];
