import React from "react";
import BannerImage from "../Pages/Banner/BannerImage.js";
import Category from "../Pages/Category/CategoryList.js";
import NewBrandList from "../Pages/NewlyArrivedBrands/NewBrandList.js";
import TrendingProduct from "../Pages/TrendingProducts/ProductList.js";
import Banner from "../Pages/DiscountBanner/Banner.js";
import TopOfferedProduct from "../Pages/TopOfferedProduct/OfferedProduct.js";
import RegisterForm from "../Pages/RegisterForm/Register.js";
import BestSellingProduct from "../Pages/BestSellingProduct/BestSellingProduct.js";
import JustLandedItems from "../Pages/JustLandedItems/JustLandedItems.js";
import OurLatestArticles from "../Pages/OurLatestArticles/LatestArticles.js";

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
      <BestSellingProduct/>
      <JustLandedItems/>
      <OurLatestArticles/>
    </div>
  );
};
export default HomeScreen;
