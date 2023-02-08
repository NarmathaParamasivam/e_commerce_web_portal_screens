import React from "react";
import { useState } from "react";
import Style from "./Style.module.css";
import Broccoli from "../../assets/Images/Broccoli.png";
import wineGlass from "../../assets/Images/wineGlass.png";
import breadBaguette from "../../assets/Images/breadBaguette.png";
import softDrinks from "../../assets/Images/softDrinks.png";
import animalDrumstrick from "../../assets/Images/animalDrumstrick.png";
import breadherbflour from "../../assets/Images/breadherbflour.png";
import Vector8 from "../../assets/Images/Vector8.png";
import sliderbtn from "../../assets/Images/sliderbtn.png";
import sliderbtn1 from "../../assets/Images/sliderbtn1.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Category = () => {
  const basic = [
    {
      Image: require("../../assets/Images/Broccoli.png"),
      Title: "Fruits & Veges",
    },
    {
      Image: require("../../assets/Images/breadBaguette.png"),
      Title: "Breads & Sweets",
    },
    {
      Image: require("../../assets/Images/wineGlass.png"),
      Title: "Wine Drinks",
    },
    {
      Image: require("../../assets/Images/softDrinks.png"),
      Title: "Oil and Ghee",
    },
    {
      Image: require("../../assets/Images/animalDrumstrick.png"),
      Title: "Raw Meat",
    },
    {
      Image: require("../../assets/Images/breadherbflour.png"),
      Title: "Natural Herbs",
    },

    {
      Image: require("../../assets/Images/breadherbflour.png"),
      Title: "Natural Herbs",
    },
    {
      Image: require("../../assets/Images/breadherbflour.png"),
      Title: "Natural Herbs",
    },
    {
      Image: require("../../assets/Images/breadherbflour.png"),
      Title: "Natural Herbs",
    },
    {
      Image: require("../../assets/Images/breadherbflour.png"),
      Title: "Natural Herbs",
    },
    {
      Image: require("../../assets/Images/breadherbflour.png"),
      Title: "Natural Herbs",
    },
  ];
  const [data, setData] = useState(basic);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className={`${Style.categoryTitle}`}>
          <h4 className={`${Style.titleStyle}`}>Category</h4>
          <div className={Style.arrowImg}>
            <div className={Style.viewAll}>
              <h6 className={Style.carosuelTitle}>View All Categories</h6>
              <img className={Style.arrow} src={Vector8} />
            </div>
            <div className={Style.sliderbtn2}>
              <img className={Style.sliderbtn1} src={sliderbtn} />
              <img className={Style.sliderbtn1} src={sliderbtn1} />
            </div>
          </div>
        </div>
        <div className={Style.categorys}>
          <Swiper
            loop="true"
            watchSlidesProgress={true}
            slidesPerView={6}
            spaceBetween={10}
            className="mySwiper"
            // breakpoints={{
            //   320: {
            //     slidesPerView: 2,
            //     spaceBetween: 0,
            //   },
            //   640: {
            //     slidesPerView: 4,
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
                  <div key={i} className={`card ${Style.categoryCards}`}>
                    <div className={Style.categoryImg}>
                      <img src={items.Image} />
                    </div>
                    <h6 className={Style.cardTitle}>{items.Title}</h6>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        
      </div>
    </div>
  );
};
export default Category;
