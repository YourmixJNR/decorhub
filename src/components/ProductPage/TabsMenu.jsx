import React, { useState } from "react";
import AdditionalInfo from "./Tabs/AdditionalInfo";
import Questions from "./Tabs/Questions";
import Reviews from "./Tabs/Reviews";
import { ReactComponent as ChevronUp } from "../../assets/icons/chevron-up.svg";
import { ReactComponent as ChevronDown } from "../../assets/icons/chevron-down.svg";

const TabsMenu = () => {
  const [toggle, setToggle] = useState(null);

  const toggleTab = (index) => {
    if (toggle === index) {
      setToggle(null);
    } else {
      setToggle(index);
    }
  };

  return (
    <div className="px-8 md:pt-10 xl:px-40">
      <div className="space-y-10">

        <div className="flex flex-col gap-2 md:flex-row md:gap-20 md:border-b border-neutral-200">
          <div
            onClick={() => toggleTab(1)}
            className={`flex justify-between items-center cursor-pointer font-inter text-xl font-medium pb-2 border-b transition duration-200 ease-in-out ${
              toggle === 1
                ? "text-black border-black"
                : "text-neutral-500 border-neutral-200"
            }`}
          >
            <h5>Additional Info</h5>
            <span className="md:hidden">
              {toggle === 1 ? <ChevronUp /> : <ChevronDown />}
            </span>
          </div>
          <div
            onClick={() => toggleTab(2)}
            className={`flex justify-between items-center cursor-pointer font-inter text-xl font-medium pb-2 border-b transition duration-200 ease-in-out ${
              toggle === 2
                ? "text-black border-black"
                : "text-neutral-500 border-neutral-200"
            }`}
          >
            <h5>Questions</h5>
            <span className="md:hidden">
              {toggle === 2 ? <ChevronUp /> : <ChevronDown />}
            </span>
          </div>
          <div
            onClick={() => toggleTab(3)}
            className={`flex justify-between items-center cursor-pointer font-inter text-xl font-medium pb-2 border-b transition duration-200 ease-in-out ${
              toggle === 3
                ? "text-black border-black"
                : "text-neutral-500 border-neutral-200"
            }`}
          >
            <h5>Reviews (11)</h5>
            <span className="md:hidden">
              {toggle === 3 ? <ChevronUp /> : <ChevronDown />}
            </span>
          </div>
        </div>
        
        <div className="">
          <div className={toggle === 1 ? "flex" : "hidden"}>
            <AdditionalInfo />
          </div>
          <div className={toggle === 2 ? "flex" : "hidden"}>
            <Questions />
          </div>
          <div className={toggle === 3 ? "flex" : "hidden"}>
            <Reviews />
          </div>
        </div>

      </div>
    </div>
  );
};

export default TabsMenu;
