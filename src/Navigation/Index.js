import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout/Index";
// import BannerImage from "../Pages/Banner/BannerImage.js";
// import Category from "../Pages/Category/CategoryList.js";
// import NewBrandList from "../Pages/NewlyArrivedBrands/NewBrandList.js";
// import TrendingProduct from "../Pages/TrendingProducts/ProductList.js";
import HomeScreen from "../HomeScreen/HomeScreen.js";

function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/homeScreen" element={<HomeScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
