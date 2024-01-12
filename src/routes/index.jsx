import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import Homepage from "../pages/Homepage";
import ProductPage from "../pages/ProductPage";
import ScrollToTop from "./ScrollToTop";

const RootRouter = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/productpage" element={<ProductPage />} />
      </Routes>
    </ScrollToTop>
  );
};

export default RootRouter;
