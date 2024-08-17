import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/homepage/Home";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}

export default AllRoutes;
