import React from "react";
import { useState } from "react";
import Style from "./Style.module.css";
import Vector8 from "../../assets/Images/Vector8.png";
import sliderbtn from "../../assets/Images/sliderbtn.png";
import sliderbtn1 from "../../assets/Images/sliderbtn1.png";
import Rectangle85 from "../../assets/Images/Rectangle85.png";
import Rectangle2 from "../../assets/Images/Rectangle2.png";
import Rectangle3 from "../../assets/Images/Rectangle3.png";
import Rectangle4 from "../../assets/Images/Rectangle4.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const BrandList = () => {
  const basic = [
    {
      image: require("../../assets/Images/Rectangle85.png"),
      title: "Amber Jar",
      subTitle: "Honey Best Nectar You Wish To Get",
    },
    {
      image: require("../../assets/Images/Rectangle2.png"),
      title: "Pure Herb",
      subTitle: "Pure herb the only natural brand",
    },
    {
      image: require("../../assets/Images/Rectangle3.png"),
      title: "Tuna",
      subTitle: "Where's tuna? Tuna, clear choice!",
    },
    {
      image: require("../../assets/Images/Rectangle4.png"),
      title: "Hotz",
      subTitle: "the one junk food that’s natural",
    },
    {
      image: require("../../assets/Images/Rectangle85.png"),
      title: "Amber Jar",
      subTitle: "Honey Best Nectar You Wish To Get",
    },
    {
      image: require("../../assets/Images/Rectangle2.png"),
      title: "Pure Herb",
      subTitle: "Pure herb the only natural brand",
    },
    {
      image: require("../../assets/Images/Rectangle3.png"),
      title: "Tuna",
      subTitle: "Where's tuna? Tuna, clear choice!",
    },
    {
      image: require("../../assets/Images/Rectangle4.png"),
      title: "Hotz",
      subTitle: "the one junk food that’s natural",
    },
  ];
  const [data, setData] = useState(basic);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className={` ${Style.categoryTitle}`}>
          <h4 className={Style.title}>Newly Arrived Brands</h4>
          <div className={Style.arrowImg}>
            <div className={Style.viewAll}>
              <h6 className={Style.carosuelTitle}>View All Offers</h6>
              <img className={Style.arrow} src={Vector8} />
            </div>
            <div className={Style.sliderbtn2}>
              <img className={Style.sliderbtn1} src={sliderbtn} />
              <img className={Style.sliderbtn1} src={sliderbtn1} />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`row d-flex flex-row justify-content-between ${Style.newProduct}`}
      >
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={4}
          className="mySwiper"
          // breakpoints={{
          //   320: {
          //     slidesPerView: 2,
          //     spaceBetween: 10,
          //   },
          //   640: {
          //     slidesPerView: 3,
          //     spaceBetween: 10,
          //   },
          //   768: {
          //     slidesPerView: 4,
          //     spaceBetween: 10,
          //   },
          //   1024: {
          //     slidesPerView: 6,
          //     spaceBetween: 10,
          //   },
          // }}
        >
          {data.map((items, i) => {
            return (
              <SwiperSlide>
                <div
                  key={i}
                  className={`card d-flex flex-row justify-conten-between ${Style.cardStyle}`}
                >
                  <div>
                    <img className={Style.newBrand} src={items.image} />
                  </div>

                  <div className="mt-4">
                    <h6 className={Style.cardSubtitle}>{items.title}</h6>
                    <h5 className={Style.cardTitle}>{items.subTitle}</h5>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
export default BrandList;
