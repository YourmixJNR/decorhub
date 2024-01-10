import React from "react";
import Logo from "../logo/Logo";
import { links } from "../navbar/links";
import { Link } from "react-router-dom";
import FooterSocialIcons from "../ui/FooterSocialIcons";

const Footer = () => {
  return (
    <div className="bg-neutral-900 py-12 md:py-0 md:pt-20 md:pb-8">
      <div className="flex flex-col gap-10 md:flex-row text-white md:justify-between items-center mx-8 xl:mx-40">
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Logo />
          <span className="bg-slate-600 w-[0.0625rem] h-6 transform rotate-90 md:rotate-180"></span>
          <h5>Gift & Decoration Store</h5>
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {links.map(({ name, path }, index) => {
            return (
              <Link
                key={index}
                to={path}
                className="font-inter text-sm font-normal"
              >
                {name}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-10 border-t border-neutral-800 mx-8 xl:mx-40">
        <div className="mt-6 flex flex-col md:flex-row-reverse md:justify-between gap-8 items-center">
          <div className="flex">
            <FooterSocialIcons />
          </div>
          <div className="flex flex-wrap justify-center gap-7">
            <p className="font-poppins text-xs font-semibold text-white">
              Privacy Policy
            </p>
            <p className="font-poppins text-xs font-semibold text-white">
              Terms of Use
            </p>
            <p className="font-poppins text-xs font-normal text-white">
              Copyright © 2023 HomeDecor. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
