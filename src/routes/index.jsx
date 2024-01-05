import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
};

export default RootRouter;
