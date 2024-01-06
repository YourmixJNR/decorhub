import React from "react";
import Header from "../components/layout/Header";
import HomeHero from "../components/HomeSections/Hero/HomeHero";
import SimplyUnique from "../components/HomeSections/SimplyUnique";
import Rooms from "../components/HomeSections/Rooms";
import NewArrivals from "../components/HomeSections/NewArrivals/NewArrivals";

const Homepage = () => {
  return (
    <>
      <Header />
      <HomeHero />
      <SimplyUnique />
      <Rooms />
      <NewArrivals />
    </>
  );
};

export default Homepage;
