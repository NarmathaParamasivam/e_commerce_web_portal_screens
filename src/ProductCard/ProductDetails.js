import React, { useState } from "react";
import Styles from "./Style.module.css";
// import Vector15 from "../../assets/Images/Vector15.png";
// import sliderbtn from "../../assets/Images/sliderbtn.png";
// import sliderbtn1 from "../../assets/Images/sliderbtn1.png";
// import brittany from "../../assets/Images/brittany.png";
// import tylerNix from "../../assets/Images/tylerNix.png";
// import olga from "../../assets/Images/olga.png";
// import madalyn from "../../assets/Images/madalyn.png";
// import elsa from "../../assets/Images/elsa.png";
// import Vector14 from "../../assets/Images/Vector14.png";
import Vector13 from "../../src/assets/Images/Vector13.png";
// import Vector10 from "../../assets/Images/Vector10.png";
// import Vector11 from "../../assets/Images/Vector11.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Swiper, SwiperSlide } from "swiper/react";
import data23234345 from "../Config/Filter.json";
import "swiper/css";

const ProductDetails = () =>{
  const [offered, setOfferedt] = useState(data23234345);
  return(
    <div className="container">
<div className="row mt-3 mb-5">
<div className={Styles.productDetails}>
  <Swiper
    watchSlidesProgress={true}
    slidesPerView={5}
    className="mySwiper"
  >
    {offered.data.map((data, i) => {
      console.log("data",data.Image)
      return (
        <SwiperSlide>
          <div key={i} className={`card ${Styles.cardStyle}`}>
            <div className={`card ${Styles.cardImg}`}>
              <div className={"d-flex justify-content-between p-2 "}>
                <p className={Styles.discountCard}>
                  {data.DiscountPercentage}
                </p>
                <FavoriteBorderIcon className={Styles.heartIcon} />
              </div>
              <img className={Styles.product} src={data.ProductImage} />
            </div>
            <div className="d-flex flex-column">
              <p className={Styles.cardPrice}>{data.Title}</p>
              <div className="d-flex flex-row gap-2 align-items-center">
                <p className={Styles.unitText}>{data.Unit}</p>
                <div
                  className={`d-flex flex-row gap-1 ${Styles.starContent}`}
                >
                  <img className={Styles.star} src={data.Image} />
                  <p className={`mb-0 ${Styles.fixedPoint}`}>
                    {data.Point}
                  </p>
                </div>
              </div>
              <div className={Styles.discountValue}>
                <del className={Styles.value}>
                  <CurrencyRupeeIcon className={Styles.rupee} />
                  {data.Amount}
                </del>
                <p className={Styles.price}>
                  {" "}
                  <CurrencyRupeeIcon className={Styles.rupee} />
                  {data.DiscountAmount}
                </p>
              </div>
              <p className={Styles.sold}>{data.Sold}</p>

              <div className="d-flex flex-row justify-content-between">
                <div
                  className={`d-flex flex-row justify-content-between align-items-center ${Styles.addSub}`}
                >
                  <img className={Styles.sub} src={data.SubImage} />
                  <p className="mb-0">{data.Count}</p>
                  <img className={Styles.add} src={data.AddImage} />
                </div>
                <div className="d-flex align-items-center">
                  <p className={Styles.addCart}>{data.AddToCart}</p>
                  <ShoppingCartIcon className={Styles.addCartIcon} />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      );
    })}
  </Swiper>
</div>
</div>
</div>
)}
export default ProductDetails;