import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../../assets/images/BannerImage.jpg";
import { ReactComponent as RightArrow } from "../../assets/icons/arrow-right.svg";

const Banner = () => {
  return (
    <div className=" mt-8 bg-slate-100">
      <div className="flex flex-wrap lg:flex-nowrap xl:gap-16">
        <img
          src={BannerImage}
          alt=""
          className="lg:w-[35rem] xl:w-[45rem] md:w-full md:h-[33rem]"
        />
        <div className="flex flex-col gap-6 py-14 mx-8 lg:py-32 xl:mx-0 xl:pr-9 xl:mr-40">
          <div className="flex flex-col gap-4">
            <h1 className="text-blue-500 font-inter text-base font-bold ">
              SALE UP TO 35% OFF
            </h1>
            <h5 className="font-poppins text-[2.1rem] leading-9 font-medium text-gray-900">
              HUNDREDS of New lower prices!
            </h5>
            <p className="font-inter text-base font-normal text-gray-900">
              It’s more affordable than ever to give every room in your home a
              stylish makeover
            </p>
          </div>
          <div className="w-full">
            <Link
              to="#"
              className="flex items-center space-x-1 border-b w-[7.4rem] border-neutral-900"
            >
              <span>Shop Now</span>
              <RightArrow />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
