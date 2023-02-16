import React from "react";
import { useState } from "react";
import Style from "./Style.module.css";
import watermelonJuice from "../../assets/Images/watermelonJuice.png";
import tomatoes from "../../assets/Images/tomatoes.png";
import cucumber from "../../assets/Images/cucumber.png";
import tomatoketchup from "../../assets/Images/tomatoketchup.png";
import avocado from "../../assets/Images/avocado.png";
import Vector13 from "../../assets/Images/Vector13.png";
import Vector10 from "../../assets/Images/Vector10.png";
import Vector11 from "../../assets/Images/Vector11.png";
import Vector14 from "../../assets/Images/Vector14.png";

import biscuits from "../../assets/Images/biscuits.png";
import bananas from "../../assets/Images/bananas.png";
import orangeJuice from "../../assets/Images/orangeJuice.png";
import milk from "../../assets/Images/milk.png";
import Raspberries from "../../assets/Images/Raspberries.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { trendingProducts } from "../../Config/ProductConfig.js";

import ProductDetails from "../../Components/Common/ProductCard/ProductDetails.js";

const ProductList = () => {
  // const TrendingProducts = [
  //   {
  //     ProductImage: require("../../assets/Images/watermelonJuice.png"),
  //     Title: "Sunstar Fresh Melon Juice",
  //     Unit: "1 UNIT",
  //     Image: require("../../assets/Images/Vector13.png"),
  //     Point: "4,5",
  //     Rupee: "18.00",
  //     SubImage: require("../../assets/Images/Vector10.png"),
  //     Count: "4",
  //     AddImage: require("../../assets/Images/Vector11.png"),
  //     AddToCart: "Add To Cart",
  //   },
  //   {
  //     ProductImage: require("../../assets/Images/tomatoes.png"),
  //     Title: "Fresh Local Tomatoes",
  //     Unit: "1 KG",
  //     Image: require("../../assets/Images/Vector13.png"),
  //     Point: "4.0",
  //     Rupee: "5.00",
  //     SubImage: require("../../assets/Images/Vector10.png"),
  //     Count: "2",
  //     AddImage: require("../../assets/Images/Vector11.png"),
  //     AddToCart: "Add To Cart",
  //   },
  //   {
  //     ProductImage: require("../../assets/Images/cucumber.png"),
  //     Title: "Fresh Cucumber",
  //     Unit: "1 KG",
  //     Image: require("../../assets/Images/Vector13.png"),
  //     Point: "4.5",
  //     Rupee: "6.00",
  //     SubImage: require("../../assets/Images/Vector10.png"),
  //     Count: "4",
  //     AddImage: require("../../assets/Images/Vector11.png"),
  //     AddToCart: "Add To Cart",
  //   },
  //   {
  //     ProductImage: require("../../assets/Images/tomatoketchup.png"),
  //     Title: "Heinz tomato ketchup",
  //     Unit: "1 UNIT",
  //     Image: require("../../assets/Images/Vector13.png"),
  //     Point: "5.0",
  //     Rupee: "9.00",
  //     SubImage: require("../../assets/Images/Vector10.png"),
  //     Count: "2",
  //     AddImage: require("../../assets/Images/Vector11.png"),
  //     AddToCart: "Add To Cart",
  //   },
  //   {
  //     ProductImage: require("../../assets/Images/avocado.png"),
  //     Title: "Local Avocado",
  //     Unit: "1 KG",
  //     Image: require("../../assets/Images/Vector13.png"),
  //     Point: "3.5",
  //     Rupee: "12.00",
  //     SubImage: require("../../assets/Images/Vector10.png"),
  //     Count: "3",
  //     AddImage: require("../../assets/Images/Vector11.png"),
  //     AddToCart: "Add To Cart",
  //   },
  //   {
  //     ProductImage: require("../../assets/Images/biscuits.png"),
  //     Title: "Munch Crunchy Cookies",
  //     Unit: "1 UNIT",
  //     Image: require("../../assets/Images/Vector13.png"),
  //     Point: "4.5",
  //     Rupee: "8.00",
  //     SubImage: require("../../assets/Images/Vector10.png"),
  //     Count: "1",
  //     AddImage: require("../../assets/Images/Vector11.png"),
  //     AddToCart: "Add To Cart",
  //   },
  //   {
  //     ProductImage: require("../../assets/Images/bananas.png"),
  //     Title: "Fresh Bananas",
  //     Unit: "1 KG",
  //     Image: require("../../assets/Images/Vector13.png"),
  //     Point: "4.0",
  //     Rupee: "10.00",
  //     SubImage: require("../../assets/Images/Vector10.png"),
  //     Count: "4",
  //     AddImage: require("../../assets/Images/Vector11.png"),
  //     AddToCart: "Add To Cart",
  //   },
  //   {
  //     ProductImage: require("../../assets/Images/orangeJuice.png"),
  //     Title: "Fresh Orange Juice",
  //     Unit: "1 UNIT",
  //     Image: require("../../assets/Images/Vector13.png"),
  //     Point: "4.5",
  //     Rupee: "12.00",
  //     SubImage: require("../../assets/Images/Vector10.png"),
  //     Count: "2",
  //     AddImage: require("../../assets/Images/Vector11.png"),
  //     AddToCart: "Add To Cart",
  //   },
  //   {
  //     ProductImage: require("../../assets/Images/milk.png"),
  //     Title: "Pure Dairy milk",
  //     Unit: "1 UNIT",
  //     Image: require("../../assets/Images/Vector13.png"),
  //     Point: "5.0",
  //     Rupee: "8.00",
  //     SubImage: require("../../assets/Images/Vector10.png"),
  //     Count: "2",
  //     AddImage: require("../../assets/Images/Vector11.png"),
  //     AddToCart: "Add To Cart",
  //   },

  //   {
  //     ProductImage: require("../../assets/Images/Raspberries.png"),
  //     Title: "Raspberries",
  //     Unit: "1 KG",
  //     Image: require("../../assets/Images/Vector13.png"),
  //     Point: "3.5",
  //     Rupee: "14.00",
  //     SubImage: require("../../assets/Images/Vector10.png"),
  //     Count: "6",
  //     AddImage: require("../../assets/Images/Vector11.png"),
  //     AddToCart: "Add To Cart",
  //   },
  // ];
  // const [product, setProduct] = useState(TrendingProducts);
  const [product, setProduct] = useState(trendingProducts);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className={`${Style.productHeader}`}>
          <h4 className={`mb-0 ${Style.title}`}>Trending Product</h4>
          <div className={Style.productSubtitle}>
            <h6 className={Style.subTitle}>ALL</h6>

            <h6 className={Style.subTitle}>FRUITS & VEGES</h6>

            <h6 className={Style.subTitle}>JUICES</h6>

            <h6 className={Style.subTitle}>BREADS & SWEETS</h6>

            <h6 className={Style.subTitle}>OIL & GHEE</h6>

            <h6 className={Style.subTitle}>RAW MEATS</h6>

            <h6 className={Style.subTitle}>NATURAL HERBS</h6>
          </div>
        </div>
      </div>
      <hr className={Style.line}></hr>

      <div className={Style.productDetails}>
        {product.map((data, i) => {
          return (
            <ProductDetails key={i} Data={data} />
            // <div key={i} className={`card ${Style.cardStyle}`}>
            //   <div className={`card ${Style.cardImg}`}>
            //     <div className={"d-flex justify-content-end p-2 "}>
            //       <FavoriteBorderIcon className={Style.heartIcon} />
            //     </div>
            //     <img className={Style.product} src={data.ProductImage} />
            //   </div>
            //   <div className="d-flex flex-column">
            //     <p className={Style.cardPrice}>{data.Title}</p>
            //     <div className="d-flex flex-row gap-2 align-items-center">
            //       <p className={Style.unitText}>{data.Unit}</p>
            //       <div className={`d-flex flex-row gap-1 ${Style.starContent}`}>
            //         <img className={Style.star} src={data.Image} />
            //         <p className={`mb-0 ${Style.fixedPoint}`}>{data.Point}</p>
            //       </div>
            //     </div>

            //     <p className={Style.price}>
            //       {" "}
            //       <CurrencyRupeeIcon className={Style.rupee} />
            //       {data.Rupee}
            //     </p>
            //     <div className="d-flex flex-row justify-content-between mt-1">
            //       <div
            //         className={`d-flex flex-row justify-content-between     align-items-center ${Style.count}`}
            //       >
            //         <img className={Style.sub} src={data.SubImage} />
            //         <p className="mb-0">{data.Count}</p>
            //         <img className={Style.add} src={data.AddImage} />
            //       </div>
            //       <div className="d-flex align-items-center">
            //         <p className={`mb-0 ${Style.addCart}`}>{data.AddToCart}</p>
            //         <ShoppingCartIcon className={Style.addCartIcon} />
            //       </div>
            //     </div>
            //   </div>
            // </div>
          );
        })}
      </div>
    </div>
  );
};
export default ProductList;
