import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
        <div className="pt-[5.8rem]">
          {children}
        </div>
      <Footer />
    </>
  );
};

export default Layout;
