import React from "react";
import Header from "../components/layout/Header";
import HomeHero from "../components/Hero/HomeHero";

const Homepage = () => {
  return (
    <>
      <Header />
      <HomeHero />
      <div className="flex flex-wrap space-y-4 mx-8 mt-8 lg:mx-40 md:flex-nowrap md:items-center">
        <h3 className="font-poppins text-[2.5rem] leading-[2.75rem] font-medium lg:text-7xl lg:leading-[4.75rem]">
          Simply Unique<span className="text-gray-500">/</span> Simply Better
          <span className="text-gray-500">.</span>
        </h3>
        <p className="font-inter text-sm font-normal text-gray-500 lg:text-base">
          <span className="font-inter text-sm font-semibold text-gray-900 lg:text-base lg:font-semibold">
            3legant
          </span>
          is a gift & decorations store based in HCMC, Vietnam. Est since 2019.
        </p>
      </div>
    </>
  );
};

export default Homepage;
