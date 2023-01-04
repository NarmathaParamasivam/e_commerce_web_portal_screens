import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Common/HerizondalLayout/Header/Header";
import Footer from "../Components/Common/HerizondalLayout/Footer/Footer";
import BannerImage from "../Pages/Banner/BannerImage";
import Category from "../Pages/Category/CategoryList";
import NewArrivedBrands from "../Pages/NewlyArrivedBrands/NewBrandList";
import TrendingProduct from "../Pages/TrendingProducts/ProductList";
const Layout = () => {
  return (
    <div>
      <Header />
      <BannerImage/>
      <Category/>
      <NewArrivedBrands/>
      <TrendingProduct/>
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
