import React from "react";
 import BannerImage from "../Pages/Banner/BannerImage.js";
 import Category from "../Pages/Category/CategoryList.js";
 import NewBrandList from "../Pages/NewlyArrivedBrands/NewBrandList.js";
 import TrendingProduct from "../Pages/TrendingProducts/ProductList.js";

const HomeScreen = () =>{

  return(
    <div>
<BannerImage/>
<Category/>
<NewBrandList/>
<TrendingProduct/>

    </div>
  )
}
export default HomeScreen