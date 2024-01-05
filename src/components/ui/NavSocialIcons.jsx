import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Youtube } from "../../assets/icons/youtube.svg";

const NavSocialIcons = () => {
  return (
    <>
      <Link to="#">
        <Instagram />
      </Link>
      <Link to="#">
        <Facebook />
      </Link>
      <Link to="#">
        <Youtube />
      </Link>
    </>
  );
};

export default NavSocialIcons;
