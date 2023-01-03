import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout/Index";
import BannerImage from "../Pages/Banner/BannerImage.js";
import Category from "../Pages/Category/CategoryList.js";

function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/banner" element={BannerImage} />
          <Route path="/categoryList" element={Category} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
