import React from "react";
import { Link } from "react-router-dom";

const ProductBreadcrumb = () => {
  const links = [
    { name: "Home", icon: ">", path: "/" },
    { name: "Shop", icon: ">", path: "/" },
    { name: "Living Room", icon: ">", path: "/" },
    { name: "Product", icon: ">", path: "/" },
  ];
  return (
    <div className="px-8 xl:px-40">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {links.map(({ name, icon, path }, index) => {
            return (
              <Link
                key={index}
                to={path}
                className="font-inter text-sm font-normal text-black"
              >
                {name} {icon}
              </Link>
            );
          })}
        </div>
    </div>
  );
};

export default ProductBreadcrumb;
