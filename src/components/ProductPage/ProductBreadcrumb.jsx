import React from "react";
import { Link } from "react-router-dom";

const ProductBreadcrumb = () => {
  const links = [
    { name: "Home", icon: ">", path: "#" },
    { name: "Shop", icon: ">", path: "#" },
    { name: "Living Room", icon: ">", path: "#" },
    { name: "Product", icon: "", path: "/" },
  ];
  return (
    <div className="pt-6 px-8 xl:px-40">
      <div className="flex gap-4 items-center">
        {links.map(({ name, icon, path }, index) => {
          return (
            <Link
              key={index}
              to={path}
              className="flex gap-2 font-inter text-xs font-normal sm:text-sm sm:font-medium text-neutral-700"
            >
              <span>{name}</span>
              <span>{icon}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductBreadcrumb;
