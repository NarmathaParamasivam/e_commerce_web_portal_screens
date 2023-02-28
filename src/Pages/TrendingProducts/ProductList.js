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
import categoryList from "../../Config/CategoryConfig";
import { topTrendingProducts } from "../../Config/ProductConfig";

const ProductList = () => {
  //   const [category, setCategory] = useState(subTitle,topTrendingProducts)

  const subTitle = [
    {
      id: 7,
      title: "ALL",
    },
    {
      id: 1,
      title: "FRUITS & VEGES",
    },
    {
      id: 2,
      title: "JUICES",
    },
    {
      id: 3,
      title: "BREADS & SWEETS",
    },
    {
      id: 4,
      title: "OIL & GHEE",
    },
    {
      id: 5,
      title: "RAW MEATS",
    },
    {
      id: 6,
      title: "NATURAL HERBS",
    },
  ];
  const [product, setProduct] = useState(trendingProducts);
  const [subHead, setSubHead] = useState(subTitle);
  const [active, setIsactive] = useState(false);

  const productList = (id) => {
    if (id === 7) {
      setProduct(trendingProducts);
    } else {
      const filterProduct = product.filter((list) => {
        return id === list.categoryId;
      });
      console.log(filterProduct, "start");
      setProduct(filterProduct);
    }
  };

  // const productList = () =>{
  //   if(category.categoryId==1){
  //     console.log("fruit and veg");
  //     if(category.categoryId==3){
  //       console.log("oil and Ghee");
  //     }else{
  //       console.log("empty");
  //     }
  //   }
  // const productSubtitle=()=>{
  //     if(categoryList.categorysId==subTitle.Id){
  //        return( topTrendingProducts);

  //     }
  // }
  //   const filterProducts = () => {
  //     const myArrayFiltered = topTrendingProducts.filter((elem) => {
  //       return subTitle.some((ele) => {
  //         return ele.Id && elem.categoryId === ele.Title && elem.Title;
  //       });
  //     });
  //     console.log(myArrayFiltered, "start");
  //     return myArrayFiltered;
  //   };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className={`${Style.productHeader}`}>
          <h4 className={`mb-0 ${Style.title}`}>Trending Product</h4>
          <div className={Style.productSubtitle}>
            {subHead.map((title, i) => (
              <h6 
                key={i}
                
                className={`active ${Style.subTitle} `}
                onClick={() => {setIsactive(true)
                    productList(title.id)
                  
                }}
              >
                {title.title}
              </h6>
            ))}

            {/* <h6 className={Style.subTitle}>ALL</h6>

            <h6 className={Style.subTitle} onClick={()=>{filterProducts()}}>FRUITS & VEGES</h6>

            <h6 className={Style.subTitle} onClick={()=>{filterProducts()}}>JUICES</h6>

            <h6 className={Style.subTitle} onClick={()=>{filterProducts()}}>BREADS & SWEETS</h6>

            <h6 className={Style.subTitle} onClick={()=>{filterProducts()}}>OIL & GHEE</h6>

            <h6 className={Style.subTitle} onClick={()=>{filterProducts()}}>RAW MEATS</h6>

            <h6 className={Style.subTitle} onClick={()=>{filterProducts()}}>NATURAL HERBS</h6> */}
          </div>
        </div>
      </div>
      <hr className={Style.line}></hr>

      <div className={Style.productDetails}>
        {product.map((data, i) => {
          return <ProductDetails key={i} Data={data} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
