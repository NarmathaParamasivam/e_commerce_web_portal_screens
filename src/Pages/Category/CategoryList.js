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
      image: require("../../assets/Images/Broccoli.png"),
      title: "Fruits & Veges",
    },
    {
      image: require("../../assets/Images/breadBaguette.png"),
      title: "Breads & Sweets",
    },
    {
      image: require("../../assets/Images/wineGlass.png"),
      title: "Wine Drinks",
    },
    {
      image: require("../../assets/Images/softDrinks.png"),
      title: "Oil and Ghee",
    },
    {
      image: require("../../assets/Images/animalDrumstrick.png"),
      title: "Raw Meat",
    },
    {
      image: require("../../assets/Images/breadherbflour.png"),
      title: "Natural Herbs",
    },

    {
      image: require("../../assets/Images/breadherbflour.png"),
      title: "Natural Herbs",
    },
    {
      image: require("../../assets/Images/breadherbflour.png"),
      title: "Natural Herbs",
    },
    {
      image: require("../../assets/Images/breadherbflour.png"),
      title: "Natural Herbs",
    },
    {
      image: require("../../assets/Images/breadherbflour.png"),
      title: "Natural Herbs",
    },
    {
      image: require("../../assets/Images/breadherbflour.png"),
      title: "Natural Herbs",
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
                      <img src={items.image} />
                    </div>
                    <h6 className={Style.cardTitle}>{items.title}</h6>
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
