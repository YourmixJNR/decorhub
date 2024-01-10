import React from "react";
import { ReactComponent as EmailIcon } from "../../assets/icons/email.svg";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="mt-20">
      <div className="bg-md-image flex flex-wrap sm:flex-col items-center justify-center bg-slate-100 py-24 gap-10 text-center md:bg-cover md:bg-center">
        <div className="flex flex-col gap-2 mx-8 xl:mx-40">
          <h4 className="font-poppins text-[1.75rem] font-medium ">
            Join Our Newsletter
          </h4>
          <p className="font-inter text-sm font-normal text-slate-900">
            Sign up for deals, new products, and promotions
          </p>
        </div>

        <div className="flex pb-2 justify-center items-center text-center border-b border-slate-400">
          <EmailIcon className="" />
          <input
            type="text"
            placeholder="Email address"
            className=" bg-slate-100 placeholder-slate-400 font-inter text-base font-medium px-2 focus:outline-none"
          />
          <span className="text-slate-400 font-inter text-base font-medium cursor-pointer">
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
