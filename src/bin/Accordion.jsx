import React, { useState } from "react";
import AdditionalInfo from "./Tabs/AdditionalInfo";
import Questions from "./Tabs/Questions";
import Reviews from "./Tabs/Reviews";
import { ReactComponent as ChevronUp } from "../assets/icons/chevron-up.svg";
import { ReactComponent as ChevronDown } from "../assets/icons/chevron-down.svg";

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const toggleTab = (index) => {
    if (selected === index) {
      setSelected(null);
    } else {
      setSelected(index);
    }
  };

  const tabs = [
    { name: "Additional Info", value: <AdditionalInfo /> },
    { name: "Questions", value: <Questions /> },
    { name: "Reviews", value: <Reviews /> },
  ];

  return (
    <div className="px-8 xl:px-40">
      <div className="flex flex-col gap-2 lg:flex-row lg:gap-20">
        {tabs.map(({ name, value }, index) => (
          <div key={index} className="flex flex-col gap-10">
            <div
              className={`flex justify-between items-center cursor-pointer font-inter text-xl font-medium pb-2 border-b ${
                selected === index
                  ? "text-black border-black"
                  : "text-neutral-500 border-neutral-200"
              }`}
              onClick={() => toggleTab(index)}
            >
              <h2 className="">{name}</h2>
              <span className="">
                {selected === index ? <ChevronUp /> : <ChevronDown />}
              </span>
            </div>
            <div className={`${selected === index ? "flex" : "hidden"} w-full`}>
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
