import React from "react";
import Header from "../components/layout/Header";
import SliderSection from "../components/Homepage01/SliderSection/SliderSection";
import Unique from "../components/Homepage01/Unique";
import Values from "../components/Homepage01/Values";
import ProductCarousel from "../components/Homepage01/ProductCarousel/ProductCarousel";
import BannerGrid from "../components/Homepage01/BannerGrid";
import Banner from "../components/Homepage01/Banner";
import BlogSection from "../components/Homepage01/BlogSection";

const Homepage = () => {
  return (
    <>
      <Header />
      <SliderSection />
      <Unique />
      <BannerGrid />
      <ProductCarousel />
      <Values />
      <Banner />
      <BlogSection />
    </>
  );
};

export default Homepage;
