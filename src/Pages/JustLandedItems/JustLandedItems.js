import React, { useState } from "react";
import Style from "./Style.module.css";
import jar from "../../assets/Images/jar.png";
import pharma from "../../assets/Images/pharma.png";
import milk from "../../assets/Images/milk.png";
import avocado from "../../assets/Images/avocado.png";
import deva1 from "../../assets/Images/deva1.png";
import Vector13 from "../../assets/Images/Vector13.png";
import Vector10 from "../../assets/Images/Vector10.png";
import Vector11 from "../../assets/Images/Vector11.png";
import Vector14 from "../../assets/Images/Vector14.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import sliderbtn from "../../assets/Images/sliderbtn.png";
import sliderbtn1 from "../../assets/Images/sliderbtn1.png";
import chips from "../../assets/Images/chips.png";
import juice from "../../assets/Images/juice.png";
import mockupgraphs from "../../assets/Images/mockupgraphs.png";
import tomatoketchup from "../../assets/Images/tomatoketchup.png";
import watermelonJuice from "../../assets/Images/watermelonJuice.png";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ProductDetails from "../../Components/Common/ProductCard/ProductDetails.js";
import {justLandedItems} from "../../Config/ProductConfig.js";

//Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//Import Swiper styles
import "swiper/css";

const JustLandedItems = () => {
  // const JustLandedItems = [
  //   {
  //     Image: require("../../assets/Images/chips.png"),
  //     Title: "Jelly beans exxotics",
  //     Unit: "1 UNIT",
  //     Point: "4.5",
  //     Amount: "18.00",
  //     StarImage: require("../../assets/Images/Vector13.png"),
  //     SubImage: require("../../assets/Images/Vector10.png"),
  //     Count: "1",
  //     AddImage: require("../../assets/Images/Vector11.png"),
  //     AddToCart: "Add To Cart",
  //   },
  //   {
  //     Image: require("../../assets/Images/juice.png"),
  //     Title: "Growers cider",
  //     Unit: "1 UNIT",
  //     Point: "4.0",
  //     Amount: "5.00",
  //     StarImage: require("../../assets/Images/Vector13.png"),
  //     SubImage: require("../../assets/Images/Vector10.png"),
  //     Count: "2",
  //     AddImage: require("../../assets/Images/Vector11.png"),
  //     AddToCart: "Add To Cart",
  //   },
  //   {
  //     Image: require("../../assets/Images/mockupgraphs.png"),
  //     Title: "Fresh grapes",
  //     Unit: "1 UNIT",
  //     Point: "4.5",
  //     Amount: "6.00",
  //     StarImage: require("../../assets/Images/Vector13.png"),
  //     SubImage: require("../../assets/Images/Vector10.png"),
  //     Count: "4",
  //     AddImage: require("../../assets/Images/Vector11.png"),
  //     AddToCart: "Add To Cart",
  //   },
  //   {
  //     Image: require("../../assets/Images/tomatoketchup.png"),
  //     Title: "Heinz tomato ketchup",
  //     Unit: "1 UNIT",
  //     Point: "5.0",
  //     Amount: "9.00",
  //     StarImage: require("../../assets/Images/Vector13.png"),
  //     SubImage: require("../../assets/Images/Vector10.png"),
  //     Count: "2",
  //     AddImage: require("../../assets/Images/Vector11.png"),
  //     AddToCart: "Add To Cart",
  //   },
  //   {
  //     Image: require("../../assets/Images/watermelonJuice.png"),
  //     Title: "Sunstar Fresh Melon Juice",
  //     Unit: "1 UNIT",
  //     Point: "3.5",
  //     Amount: "12.00",
  //     StarImage: require("../../assets/Images/Vector13.png"),
  //     SubImage: require("../../assets/Images/Vector10.png"),
  //     Count: "3",
  //     AddImage: require("../../assets/Images/Vector11.png"),
  //     AddToCart: "Add To Cart",
  //   },
  //   {
  //     Image: require("../../assets/Images/chips.png"),
  //     Title: "Jelly beans exxotics",
  //     Unit: "1 UNIT",
  //     Point: "4.5",
  //     Amount: "18.00",
  //     StarImage: require("../../assets/Images/Vector13.png"),
  //     SubImage: require("../../assets/Images/Vector10.png"),
  //     Count: "1",
  //     AddImage: require("../../assets/Images/Vector11.png"),
  //     AddToCart: "Add To Cart",
  //   },
  //   {
  //     Image: require("../../assets/Images/juice.png"),
  //     Title: "Growers cider",
  //     Unit: "1 UNIT",
  //     Point: "4.0",
  //     Amount: "5.00",
  //     StarImage: require("../../assets/Images/Vector13.png"),
  //     SubImage: require("../../assets/Images/Vector10.png"),
  //     Count: "2",
  //     AddImage: require("../../assets/Images/Vector11.png"),
  //     AddToCart: "Add To Cart",
  //   },
  //   {
  //     Image: require("../../assets/Images/mockupgraphs.png"),
  //     Title: "Fresh grapes",
  //     Unit: "1 UNIT",
  //     Point: "4.5",
  //     Amount: "6.00",
  //     StarImage: require("../../assets/Images/Vector13.png"),
  //     SubImage: require("../../assets/Images/Vector10.png"),
  //     Count: "4",
  //     AddImage: require("../../assets/Images/Vector11.png"),
  //     AddToCart: "Add To Cart",
  //   },
  //   {
  //     Image: require("../../assets/Images/tomatoketchup.png"),
  //     Title: "Heinz tomato ketchup",
  //     Unit: "1 UNIT",
  //     Point: "5.0",
  //     Amount: "9.00",
  //     StarImage: require("../../assets/Images/Vector13.png"),
  //     SubImage: require("../../assets/Images/Vector10.png"),
  //     Count: "2",
  //     AddImage: require("../../assets/Images/Vector11.png"),
  //     AddToCart: "Add To Cart",
  //   },
  //   {
  //     Image: require("../../assets/Images/watermelonJuice.png"),
  //     Title: "Sunstar Fresh Melon Juice",
  //     Unit: "1 UNIT",
  //     Point: "3.5",
  //     Amount: "12.00",
  //     StarImage: require("../../assets/Images/Vector13.png"),
  //     SubImage: require("../../assets/Images/Vector10.png"),
  //     Count: "3",
  //     AddImage: require("../../assets/Images/Vector11.png"),
  //     AddToCart: "Add To Cart",
  //   },
  // ];
  // const [justLandedItems, setJustLandedItems] = useState(JustLandedItems);
const [landedItems, setLandedItems]=useState(justLandedItems);
  return (
    <div className="container mt-5">
      <div class={Style.headContent}>
        <h4 className={Style.title}>Just Landed Items</h4>
        <div className={Style.sliderbtn2}>
          <img className={Style.sliderbtn1} src={sliderbtn} />
          <img className={Style.sliderbtn1} src={sliderbtn1} />
        </div>
      </div>
     
      <div className={Style.productDetails}>
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={5}
          className="mySwiper"
        >

           {landedItems.map((data, i) => {
            return (
             
              <SwiperSlide>
                {/* <div key={i} className={`card ${Style.cardStyle}`}>
                  <div className={`card ${Style.cardImg}`}>
                    <div className={"d-flex justify-content-end p-2 "}>
                      <FavoriteBorderIcon className={Style.heartIcon} />
                    </div>
                    <div className="d-flex justify-content-center w-100">
                      <img className={Style.product} src={data.Image} />
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <p className={Style.cardPrice}>{data.Title}</p>
                    <div className="d-flex flex-row gap-2 align-items-center">
                      <p className={Style.unitText}>{data.Unit}</p>
                      <div
                        className={`d-flex flex-row gap-1 ${Style.starContent}`}
                      >
                        <img className={Style.star} src={data.StarImage} />
                        <p className={`mb-0 ${Style.fixedPoint}`}>
                          {data.Point}
                        </p>
                      </div>
                    </div>

                    <p className={Style.price}>
                      {" "}
                      <CurrencyRupeeIcon className={Style.rupee} />
                      {data.Amount}
                    </p>
                    <div className="d-flex flex-row justify-content-between align-item-center mt-1 ">
                      <div
                        className={`d-flex flex-row justify-content-between ${Style.addSub}`}
                      >
                        <img className={Style.sub} src={data.SubImage} />
                        <p className="mb-0">{data.Count}</p>
                        <img className={Style.add} src={data.AddImage} />
                      </div>
                      <div className="d-flex align-items-center">
                        <p className={Style.addCart}>{data.AddToCart}</p>
                        <ShoppingCartIcon className={Style.addCartIcon} />
                      </div>
                    </div>
                  </div>
                </div> */}
                 <ProductDetails key={i} Data={data}/>
              </SwiperSlide>
            );
          })} 
        </Swiper>
      </div>
    </div>
  );
};
export default JustLandedItems;
