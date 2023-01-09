import React from "react";
import BannerImage from "../Pages/Banner/BannerImage.js";
import Category from "../Pages/Category/CategoryList.js";
import NewBrandList from "../Pages/NewlyArrivedBrands/NewBrandList.js";
import TrendingProduct from "../Pages/TrendingProducts/ProductList.js";
import Banner from "../Pages/DiscountBanner/Banner.js";
import TopOfferedProduct from "../Pages/TopOfferedProduct/OfferedProduct.js";
import RegisterForm from "../Pages/RegisterForm/Register.js";


const HomeScreen = () => {
  return (
    <div>
      <BannerImage />
      <Category />
      <NewBrandList />
      <TrendingProduct />
      <Banner />
      <TopOfferedProduct />
      <RegisterForm/>
    </div>
  );
};
export default HomeScreen;
