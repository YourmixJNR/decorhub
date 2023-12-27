import React from "react";
import { Link } from "react-router-dom";

const MobileNavBar = () => {
  let links = [
    { name: "Home", path: "/" },
    { name: "Product", path: "#" },
    { name: "Shop", path: "#" },
    { name: "Contact Us", path: "#" },
  ];

  return (
    <div>
      {links.map(({ name, path }, index) => (
        <Link
          key={index}
          to={path}
          className="text-gray-500 active:text-black block py-4 border-b border-gray-200"
        >
          {name}
        </Link>
      ))}
    </div>
  );
};

export default MobileNavBar;
