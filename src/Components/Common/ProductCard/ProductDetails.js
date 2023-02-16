import React, { useEffect, useState } from "react";
import Styles from "./Style.module.css";
// import TrendingProduct from "../../../Pages/TrendingProducts/ProductList.js";
// import OfferedProduct from "../../../Pages/TopOfferedProduct/OfferedProduct";
// import Vector15 from "../../assets/Images/Vector15.png";
// import sliderbtn from "../../assets/Images/sliderbtn.png";
// import sliderbtn1 from "../../assets/Images/sliderbtn1.png";
// import brittany from "../../assets/Images/brittany.png";
// import tylerNix from "../../assets/Images/tylerNix.png";
// import olga from "../../assets/Images/olga.png";
// import madalyn from "../../assets/Images/madalyn.png";
// import elsa from "../../assets/Images/elsa.png";
// import Vector14 from "../../assets/Images/Vector14.png";
// import Vector13 from "../../src/assets/Images/Vector13.png";
// import Vector10 from "../../assets/Images/Vector10.png";
// import Vector11 from "../../assets/Images/Vector11.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Swiper, SwiperSlide } from "swiper/react";
// import {topTrendingProducts,trendingProducts,justLandedItems,bestSellingProducts} from "../../../Config/ProductConfig.js";
import "swiper/css";
import topTrendingProducts from "../../../Config/ProductConfig.js";
// import AiFillHeart from "react-icons/ai";

const ProductDetails = (props) => {
  const { Data } = props;
  //   let isheart=true;
  const [heart, setHeart] = useState(false);
  const [isheart, setIsheart] = useState(false);
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setHeart(!heart);
    setIsheart(!isheart);
  };
  const increament = () => {
    setCount(count + 1);
  };
  const decreament = () => {
    setCount(count - 1);
  };

  return (
    // <div className="">
    <div className="row mt-3 mb-3">
      <div className={Styles.productsDetails}>
        {/* <Swiper
            watchSlidesProgress={true}
            slidesPerView={5}
            className="mySwiper"
          > */}
        {/* {product.map((data, i) => {
              console.log("data", data.Image);
              return ( */}
        {/* <SwiperSlide> */}
        <div className={`card ${Styles.cardStyle}`}>
          <div className={`card ${Styles.cardImg}`}>
            <div
              className={`p-2 ${Styles.disCount}`}
              style={{
                justifyContent: Data?.DiscountPercentage
                  ? "space-between"
                  : "flex-end",
              }}
            >
              {Data?.DiscountPercentage ? (
                <p className={Styles.discountCard}>{Data.DiscountPercentage}</p>
              ) : null}
              {isheart ? (
                <FavoriteIcon
                  className={Styles.heartIcon}
                  onClick={() => handleClick()}
                  style={{ color: heart ? "red" : "black" }}
                />
              ) : (
                <FavoriteBorderIcon
                  className={Styles.heartIcon}
                  onClick={() => handleClick()}
                />
              )}
            </div>
            <img className={Styles.product} src={Data.ProductImage} />
          </div>
          <div className="d-flex flex-column">
            <p className={Styles.cardPrice}>{Data.Title}</p>
            <div className="d-flex flex-row gap-2 align-items-center">
              <p className={Styles.unitText}>{Data.Unit}</p>
              <div className={`d-flex flex-row gap-1 ${Styles.starContent}`}>
                <img className={Styles.star} src={Data.Image} />
                <p className={`mb-0 ${Styles.fixedPoint}`}>{Data.Point}</p>
              </div>
            </div>
            <div className={Styles.discountValue}>
              {Data?.Amount ? (
                <del className={Styles.value}>
                  <CurrencyRupeeIcon className={Styles.rupee} />
                  {Data.Amount}
                </del>
              ) : (
                ""
              )}
              <p className={Styles.price}>
                <CurrencyRupeeIcon className={Styles.rupee} />
                {Data.DiscountAmount}
              </p>
            </div>
            <p className={Styles.sold}>{Data.Sold}</p>

            <div className="d-flex flex-row justify-content-between">
              <div
                className={`d-flex flex-row justify-content-between align-items-center ${Styles.addSub}`}
              >
                <img
                  className={Styles.sub}
                  src={Data.SubImage}
                  onClick={() => {
                    decreament();
                  }}
                />
                <p className="mb-0">{count}</p>
                <img
                  className={Styles.add}
                  src={Data.AddImage}
                  onClick={() => {
                    increament();
                  }}
                />
              </div>
              <div className="d-flex align-items-center">
                <p className={Styles.addCart}>{Data.AddToCart}</p>
                <ShoppingCartIcon className={Styles.addCartIcon} />
              </div>
            </div>
          </div>
        </div>
        {/* </SwiperSlide> */}
        {/* );
            })} */}
        {/* </Swiper> */}
      </div>
    </div>
    // </div>
  );
};
export default ProductDetails;
