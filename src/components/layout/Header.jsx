import React from "react";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu-line-horizontal.svg";
import { ReactComponent as CartIcon } from "../../assets/icons/shopping-bag.svg";
import Logo from "../logo/Logo";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white px-8 py-4">
      {/* Left Section */}
      <div className="flex items-center">
        <MenuIcon /> <Logo />
      </div>

      {/* Right Section */}
      <div className="flex items-center">
        <CartIcon />
        <span className="text-base bg-black text-white px-1.5 py-0.3 rounded-full">
          2
        </span>
      </div>
    </header>
  );
};

export default Header;
