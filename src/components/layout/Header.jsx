import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu-line-horizontal.svg";
import { ReactComponent as CloseMenu } from "../../assets/icons/Line.svg";
import { ReactComponent as CartIcon } from "../../assets/icons/shopping-bag.svg";
import { ReactComponent as SearchTwo } from "../../assets/icons/search-02.svg";
import { ReactComponent as UserCircle } from "../../assets/icons/user-circle.svg";
import Logo from "../logo/Logo";

const Header = () => {
  let links = [
    { name: "Home", path: "/" },
    { name: "Product", path: "#" },
    { name: "Shop", path: "#" },
    { name: "Contact Us", path: "#" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between bg-white px-8 py-4">
      {/* Left Section */}
      <div className="flex items-center">
        <div className="md:hidden" onClick={()=>setOpen(!open)}>
          {open ? <MenuIcon /> : <CloseMenu />}
        </div>{" "}
        <Logo />
      </div>

      {/* Menu Section */}
      <div className="hidden md:flex space-x-10">
        {links.map(({ name, path }, index) => (
          <Link
            className="text-gray-500 active:text-black"
            key={index}
            to={path}
          >
            {name}
          </Link>
        ))}
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-5">
        <SearchTwo className="hidden md:block" />
        <UserCircle className="hidden md:block" />
        <div className="flex items-center space-x-2">
          <CartIcon />
          <span className="text-base bg-black text-white px-1.5 py-0.2 rounded-full">
            2
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
