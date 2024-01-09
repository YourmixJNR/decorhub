import React from "react";
import { ReactComponent as FastDelivery } from "../../assets/icons/fast-delivery.svg";
import { ReactComponent as Money } from "../../assets/icons/money.svg";
import { ReactComponent as Lock } from "../../assets/icons/lock-01.svg";
import { ReactComponent as Call } from "../../assets/icons/call.svg";

const Values = () => {
  return (
    <>
      <div className="flex flex-wrap mt-10 gap-4 mx-8 xl:mx-40">
        <div className="flex flex-col flex-1 flex-grow-0 flex-shrink-0 basis-[47.3%] sm:flex-grow sm:flex-shrink sm:basis-0 py-8 px-4 items-start gap-4 bg-gray-100">
          <FastDelivery />
          <div className="flex flex-col gap-1">
            <h3 className="font-inter font-semibold text-sm">Free Shipping</h3>
            <p className="font-inter font-normal text-sm text-gray-500">Order above $200</p>
          </div>
        </div>
        <div className="flex flex-col flex-1 flex-grow-0 flex-shrink-0 basis-[47.3%] sm:flex-grow sm:flex-shrink sm:basis-0 py-8 px-4 items-start gap-4 bg-gray-100">
          <Money />
          <div className="flex flex-col gap-1">
            <h3 className="font-inter font-semibold text-sm">Money-back</h3>
            <p className="font-inter font-normal text-sm text-gray-500">30 days guarantee</p>
          </div>
        </div>
        <div className="flex flex-col flex-1 flex-grow-0 flex-shrink-0 basis-[47.3%] sm:flex-grow sm:flex-shrink sm:basis-0 py-8 px-4 items-start gap-4 bg-gray-100">
          <Lock />
          <div className="flex flex-col gap-1">
            <h3 className="font-inter font-semibold text-sm">Secure Payments</h3>
            <p className="font-inter font-normal text-sm text-gray-500">Secured by Stripe</p>
          </div>
        </div>
        <div className="flex flex-col flex-1 flex-grow-0 flex-shrink-0 basis-[47.3%] sm:flex-grow sm:flex-shrink sm:basis-0 py-8 px-4 items-start gap-4 bg-gray-100">
          <Call />
          <div className="flex flex-col gap-1">
            <h3 className="font-inter font-semibold text-sm">24/7 Support</h3>
            <p className="font-inter font-normal text-sm text-gray-500">Phone and Email support</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Values;
