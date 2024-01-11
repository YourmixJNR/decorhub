import React from "react";
import SliderSection from "../components/Homepage01/SliderSection/SliderSection";
import Unique from "../components/Homepage01/Unique";
import Values from "../components/Homepage01/Values";
import ProductCarousel from "../components/Homepage01/ProductCarousel/ProductCarousel";
import BannerGrid from "../components/Homepage01/BannerGrid";
import Banner from "../components/Homepage01/Banner";
import BlogSection from "../components/Homepage01/BlogSection";
import Newsletter from "../components/newsletter/Newsletter";
import Layout from "../components/layout/Layout";

const Homepage = () => {
  return (
    <Layout>
      <SliderSection />
      <Unique />
      <BannerGrid />
      <ProductCarousel />
      <Values />
      <Banner />
      <BlogSection />
      <Newsletter />
    </Layout>
  );
};

export default Homepage;
