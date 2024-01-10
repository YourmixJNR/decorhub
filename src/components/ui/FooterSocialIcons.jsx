import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Facebook } from "../../assets/icons/facebookf.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagramf.svg";
import { ReactComponent as Youtube } from "../../assets/icons/youtubef.svg";

const FooterSocialIcons = () => {
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

export default FooterSocialIcons;
