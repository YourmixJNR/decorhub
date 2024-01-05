import React from "react";
import { Link } from "react-router-dom";

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
        <Link key={index} to={path} className="text-gray-500 active:text-black">
          {name}
        </Link>
      ))}
    </>
  );
};

export default DesktopNavBar;
