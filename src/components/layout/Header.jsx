import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu-line-horizontal.svg";
import { ReactComponent as CloseMenu } from "../../assets/icons/Line.svg";
import { ReactComponent as CartIcon } from "../../assets/icons/shopping-bag.svg";
import { ReactComponent as SearchTwo } from "../../assets/icons/search-02.svg";
import { ReactComponent as UserCircle } from "../../assets/icons/user-circle.svg";
import { ReactComponent as WishList } from "../../assets/icons/Wishlist.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Youtube } from "../../assets/icons/youtube.svg";
import Logo from "../logo/Logo";
import SearchBar from "../ui/SearchBar";
import MobileNavBar from "../navbar/MobileNavBar";
import DesktopNavBar from "../navbar/DesktopNavBar";
import TopCTA from "../ui/TopCTA";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TopCTA />
      <header className="flex items-center justify-between bg-white px-8 py-4 lg:px-40">
        {/* Desktop Starts */}
        <div className="flex items-center">
          <div className="md:hidden">
            <MenuIcon
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>{" "}
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
            <div className="flex items-center space-x-2">
              <CartIcon />
              <span className="text-base bg-black text-white px-2 py-0.5 rounded-full">
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
                <div className="flex items-center space-x-2">
                  <CartIcon />
                  <span className="text-base bg-black text-white px-2 py-0.5 rounded-full">
                    2
                  </span>
                </div>
              </div>

              <div className="flex justify-between border-b pb-2 mb-4 border-gray-200">
                <span className="text-gray-500">Wishlist</span>
                <div className="flex items-center space-x-2">
                  <WishList />
                  <span className="text-base bg-black text-white px-2 py-0.5 rounded-full">
                    2
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="bg-black w-full flex justify-center text-white rounded-md p-2 mb-5"
              >
                Sign In
              </button>

              <div className="flex space-x-6">
                <Link to="#">
                  <Instagram />
                </Link>
                <Link to="#">
                  <Facebook />
                </Link>
                <Link to="#">
                  <Youtube />
                </Link>
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
