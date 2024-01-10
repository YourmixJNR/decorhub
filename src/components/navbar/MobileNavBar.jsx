import React from "react";
import { Link } from "react-router-dom";
import { links } from "./links";

const MobileNavBar = () => {

  return (
    <div>
      {links.map(({ name, path }, index) => (
        <Link
          key={index}
          to={path}
          className="text-sm font-grotesk font-medium text-gray-500 active:text-black block py-4 border-b border-gray-200"
        >
          {name}
        </Link>
      ))}
    </div>
  );
};

export default MobileNavBar;
