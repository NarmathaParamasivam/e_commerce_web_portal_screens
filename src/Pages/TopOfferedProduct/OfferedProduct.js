import React, { useState } from "react";
import Styles from "./Style.module.css";
import Vector15 from "../../assets/Images/Vector15.png";
import sliderbtn from "../../assets/Images/sliderbtn.png";
import sliderbtn1 from "../../assets/Images/sliderbtn1.png";
import brittany from "../../assets/Images/brittany.png";
import tylerNix from "../../assets/Images/tylerNix.png";
import olga from "../../assets/Images/olga.png";
import madalyn from "../../assets/Images/madalyn.png";
import elsa from "../../assets/Images/elsa.png";
import Vector14 from "../../assets/Images/Vector14.png";
import Vector13 from "../../assets/Images/Vector13.png";
import Vector10 from "../../assets/Images/Vector10.png";
import Vector11 from "../../assets/Images/Vector11.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import ProductCard from "../../Components/Common/ProductCard/ProductDetails.js";
import { topTrendingProducts } from "../../Config/ProductConfig.js";

const OfferedProduct = () => {
  // const TopOfferedProduct = [
  //   {
  //     DiscountPercentage: "-25%",
  //     ProductImage: require("../../assets/Images/brittany.png"),
  //     Title: "Pacific barista beverage",
  //     Unit: "1 UNIT",
  //     Image: require("../../assets/Images/Vector13.png"),
  //     Point: "4.5",
  //     Amount: "12.00",
  //     DiscountAmount: "8.00",
  //     Sold: "Sold: 30/40",
  //     SubImage: require("../../assets/Images/Vector10.png"),
  //     Count: "1",
  //     AddImage: require("../../assets/Images/Vector11.png"),
  //     AddToCart: "Add To Cart",
  //   },
  //   {
  //     DiscountPercentage: "-35%",
  //     ProductImage: require("../../assets/Images/tylerNix.png"),
  //     Title: "Kombucha local lilikoi",
  //     Unit: "1 UNIT",
  //     Image: require("../../assets/Images/Vector13.png"),
  //     Point: "4.0",
  //     Amount: "12.00",
  //     DiscountAmount: "6.00",
  //     Sold: "Sold: 9/25",
  //     SubImage: require("../../assets/Images/Vector10.png"),
  //     Count: "4",
  //     AddImage: require("../../assets/Images/Vector11.png"),
  //     AddToCart: "Add To Cart",
  //   },
  //   {
  //     DiscountPercentage: "-15%",
  //     ProductImage: require("../../assets/Images/olga.png"),
  //     Title: "Cheese flavoured Lays",
  //     Unit: "1 UNIT",
  //     Image: require("../../assets/Images/Vector13.png"),
  //     Point: "4.5",
  //     Amount: "12.00",
  //     DiscountAmount: "8.00",
  //     Sold: "Sold: 12/60",
  //     SubImage: require("../../assets/Images/Vector10.png"),
  //     Count: "2",
  //     AddImage: require("../../assets/Images/Vector11.png"),
  //     AddToCart: "Add To Cart",
  //   },
  //   {
  //     DiscountPercentage: "-39%",
  //     ProductImage: require("../../assets/Images/madalyn.png"),
  //     Title: "Oat milk barista",
  //     Unit: "1 UNIT",
  //     Image: require("../../assets/Images/Vector13.png"),
  //     Point: "5.0",
  //     Amount: "12.00",
  //     DiscountAmount: "5.00",
  //     Sold: "Sold: 12/35",
  //     SubImage: require("../../assets/Images/Vector10.png"),
  //     Count: "2",
  //     AddImage: require("../../assets/Images/Vector11.png"),
  //     AddToCart: "Add To Cart",
  //   },
  //   {
  //     DiscountPercentage: "-12%",
  //     ProductImage: require("../../assets/Images/elsa.png"),
  //     Title: "Dr. raw relax hearts",
  //     Unit: "1 UNIT",
  //     Image: require("../../assets/Images/Vector13.png"),
  //     Point: "3.5",
  //     Amount: "13.00",
  //     DiscountAmount: "8.00",
  //     Sold: "Sold: 5/25",
  //     SubImage: require("../../assets/Images/Vector10.png"),
  //     Count: "6",
  //     AddImage: require("../../assets/Images/Vector11.png"),
  //     AddToCart: "Add To Cart",
  //   },

  //   {
  //     DiscountPercentage: "-25%",
  //     ProductImage: require("../../assets/Images/brittany.png"),
  //     Title: "Pacific barista beverage",
  //     Unit: "1 UNIT",
  //     Image: require("../../assets/Images/Vector13.png"),
  //     Point: "4.5",
  //     Amount: "12.00",
  //     DiscountAmount: "8.00",
  //     Sold: "Sold: 30/40",
  //     SubImage: require("../../assets/Images/Vector10.png"),
  //     Count: "1",
  //     AddImage: require("../../assets/Images/Vector11.png"),
  //     AddToCart: "Add To Cart",
  //   },
  //   {
  //     DiscountPercentage: "-35%",
  //     ProductImage: require("../../assets/Images/tylerNix.png"),
  //     Title: "Kombucha local lilikoi",
  //     Unit: "1 UNIT",
  //     Image: require("../../assets/Images/Vector13.png"),
  //     Point: "4.0",
  //     Amount: "12.00",
  //     DiscountAmount: "6.00",
  //     Sold: "Sold: 9/25",
  //     SubImage: require("../../assets/Images/Vector10.png"),
  //     Count: "4",
  //     AddImage: require("../../assets/Images/Vector11.png"),
  //     AddToCart: "Add To Cart",
  //   },
  //   {
  //     DiscountPercentage: "-15%",
  //     ProductImage: require("../../assets/Images/olga.png"),
  //     Title: "Cheese flavoured Lays",
  //     Unit: "1 UNIT",
  //     Image: require("../../assets/Images/Vector13.png"),
  //     Point: "4.5",
  //     Amount: "12.00",
  //     DiscountAmount: "8.00",
  //     Sold: "Sold: 12/60",
  //     SubImage: require("../../assets/Images/Vector10.png"),
  //     Count: "2",
  //     AddImage: require("../../assets/Images/Vector11.png"),
  //     AddToCart: "Add To Cart",
  //   },
  //   {
  //     DiscountPercentage: "-39%",
  //     ProductImage: require("../../assets/Images/madalyn.png"),
  //     Title: "Oat milk barista",
  //     Unit: "1 UNIT",
  //     Image: require("../../assets/Images/Vector13.png"),
  //     Point: "5.0",
  //     Amount: "12.00",
  //     DiscountAmount: "5.00",
  //     Sold: "Sold: 12/35",
  //     SubImage: require("../../assets/Images/Vector10.png"),
  //     Count: "2",
  //     AddImage: require("../../assets/Images/Vector11.png"),
  //     AddToCart: "Add To Cart",
  //   },
  //   {
  //     DiscountPercentage: "-12%",
  //     ProductImage: require("../../assets/Images/elsa.png"),
  //     Title: "Dr. raw relax hearts",
  //     Unit: "1 UNIT",
  //     Image: require("../../assets/Images/Vector13.png"),
  //     Point: "3.5",
  //     Amount: "13.00",
  //     DiscountAmount: "8.00",
  //     Sold: "Sold: 5/25",
  //     SubImage: require("../../assets/Images/Vector10.png"),
  //     Count: "6",
  //     AddImage: require("../../assets/Images/Vector11.png"),
  //     AddToCart: "Add To Cart",
  //   },
  // ];
  const [offered, setOfferedt] = useState(topTrendingProducts);

  return (
    <div className="container mt-5">
      <div class={Styles.headContent}>
        <div className={Styles.title}>
          <h4 className={Styles.mainTitle}>Top offered products</h4>
          <div
            className={`card d-flex gap-2 justify-content-center flex-row py-1 align-item-center ${Styles.clockCard}`}
          >
            <img className={Styles.clockImg} src={Vector15} />
            <p className={`mb-0 ${Styles.clkContent}`}>
              Expires in: 12hr : 41min : 8s
            </p>
          </div>
        </div>
        <div className={Styles.sliderbtn2}>
          <img className={Styles.sliderbtn1} src={sliderbtn} />
          <img className={Styles.sliderbtn1} src={sliderbtn1} />
        </div>
      </div>
      {/* <ProductCard /> */}
      <div className="row mt-3 mb-5">
        <div className={Styles.productDetails}>
          <Swiper
            watchSlidesProgress={true}
            slidesPerView={5}
            className="mySwiper"
          >
            {/* <ProductCard topTrendingProducts={topTrendingProducts} /> */}
            {offered.map((data, i) => {
              return (
                <SwiperSlide>
                  <ProductCard key={i} Data={data} />

                  {/* <div key={i} className={`card ${Styles.cardStyle}`}>
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
                          <img className={Styles.star} src={Vector13} />
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
                  </div> */}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default OfferedProduct;
