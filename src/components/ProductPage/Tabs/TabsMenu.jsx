import React, { useState } from "react";
import AdditionalInfo from "./AdditionalInfo";
import Questions from "./Questions";
import Reviews from "./Reviews";

const TabsMenu = () => {
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
    <div>
      {tabs.map(({ name, value }, index) => (
        <div key={index}>
          <div onClick={() => toggleTab(index)}>
            <h2>{name}</h2>
            <span>{selected === index ? "-" : "+"}</span>
          </div>
          <div className={selected === index ? "flex" : "hidden"}>{value}</div>
        </div>
      ))}
    </div>
  );
};

export default TabsMenu;
