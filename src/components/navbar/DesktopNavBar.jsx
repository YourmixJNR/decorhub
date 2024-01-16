import React from "react";
import { NavLink } from "react-router-dom";

const DesktopNavBar = () => {
  let links = [
    { name: "Home", path: "/" },
    { name: "Product", path: "#" },
    { name: "Shop", path: "#" },
    { name: "Contact Us", path: "#" },
  ];

  return (
    <>
      {links.map(({ name, path }, index) => (
        <NavLink
          key={index}
          to={path}
          className="text-sm font-grotesk font-medium text-gray-500 active:text-black link:text-black"
        >
          {name}
        </NavLink>
      ))}
    </>
  );
};

export default DesktopNavBar;
