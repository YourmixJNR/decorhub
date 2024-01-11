import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import ProductPage from "../pages/ProductPage";

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/productpage" element={<ProductPage />} />
    </Routes>
  );
};

export default RootRouter;
