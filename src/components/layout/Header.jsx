import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu-line-horizontal.svg";
import { ReactComponent as CloseMenu } from "../../assets/icons/Line.svg";
import { ReactComponent as CartIcon } from "../../assets/icons/shopping-bag.svg";
import { ReactComponent as SearchTwo } from "../../assets/icons/search-02.svg";
import { ReactComponent as UserCircle } from "../../assets/icons/user-circle.svg";
import { ReactComponent as WishList } from "../../assets/icons/Wishlist.svg";
import HeaderSocialIcons from "../ui/HeaderSocialIcons";
import SearchBar from "../ui/NavSearchBar";
import MobileNavBar from "../navbar/MobileNavBar";
import DesktopNavBar from "../navbar/DesktopNavBar";
import TopCTA from "../ui/NotificationBar";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TopCTA />
      <header className="flex items-center justify-between bg-white mx-8 py-4 xl:mx-40 z-100">
        {/* Desktop Starts */}
        <div className="flex items-center">
          <div className="md:hidden">
            <MenuIcon
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
          <Logo />
        </div>

        <div className="space-x-10 hidden md:block">
          <DesktopNavBar />
        </div>

        <div className="flex items-center space-x-5">
          <Link to="#">
            <SearchTwo className="hidden md:block" />
          </Link>
          <Link to="#">
            <UserCircle className="hidden md:block" />
          </Link>
          <Link to="#">
            <div className="flex items-center space-x-1">
              <CartIcon />
              <span className="text-xs font-inter font-bold bg-black text-white w-5 h-5 justify-center items-center flex rounded-full">
                2
              </span>
            </div>
          </Link>
        </div>
        {/* Desktop Ends */}

        {/* Mobile Starts */}
        <div
          className={`w-full h-full top-0 left-0 bg-gray-400 absolute transform origin-left transition-transform duration-300 ease-in-out ${
            open ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
          style={{ zIndex: 1000 }}
        >
          <div className="w-11/12 h-full bg-white px-6 py-6 flex flex-col justify-between">
            <div>
              <div className="flex justify-between mb-4">
                <Logo />
                <CloseMenu
                  className="cursor-pointer"
                  onClick={() => setOpen(!open)}
                />
              </div>
              <SearchBar />
              <MobileNavBar />
            </div>

            <div>
              <div className="flex justify-between border-b border-gray-200 pb-2 mb-4 ">
                <span className="text-gray-500">Cart</span>
                <div className="flex items-center space-x-1">
                  <CartIcon />
                  <span className="text-xs font-inter font-bold bg-black text-white w-5 h-5 justify-center items-center flex rounded-full">
                    2
                  </span>
                </div>
              </div>

              <div className="flex justify-between border-b pb-2 mb-4 border-gray-200">
                <span className="text-gray-500">Wishlist</span>
                <div className="flex items-center space-x-1">
                  <WishList />
                  <span className="text-xs font-inter font-bold bg-black text-white w-5 h-5 justify-center items-center flex rounded-full">
                    2
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="font-inter text-xl font-medium bg-black w-full flex justify-center text-white rounded-md p-2 mb-5"
              >
                Sign In
              </button>

              <div className="flex space-x-6">
                <HeaderSocialIcons />
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Ends */}
      </header>
    </>
  );
};

export default Header;
