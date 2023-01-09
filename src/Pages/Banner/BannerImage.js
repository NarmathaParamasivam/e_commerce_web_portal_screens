import React from "react";
import Styles from "./Style.module.css";
import Header from "../../Components/Common/HerizondalLayout/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import { sliderClasses } from "@mui/material";
import slider from "../../assets/Images/slider.png";
import SmoothFruit from "../../assets/Images/smoothFruit.png";
import { Style } from "@mui/icons-material";
import fruitsVegBag from "../../assets/Images/fruitsVegBag.png";
import bakery from "../../assets/Images/bakery.png";
import Vector8 from "../../assets/Images/Vector8.png";
import Rectangle24 from "../../assets/Images/Rectangle24.png";

import { height } from "@mui/system";
const BannerImage = () => {

  
  return (
    <div className={Styles.background}>

    <div className="container">
      <div className="row">
        <div className={`col-lg-7 col-md-7 col-sm-7 ${Styles.topBanner}`}>
          <div className={`card ${Styles.bannerImage}`}>
            <div className={Styles.fruitContent}>
              <h5 className={Styles.percentage}>100% Natural</h5>
              <h3 className={Styles.freshProduct}>
                Fresh Smoothie & Summer juice
              </h3>
              <h6 className={Styles.adverticement}>
                Best Selling Summer Juice With Natural Extracts.
              </h6>
              <button className={Styles.btnStyle} type="submit">
                SHOP NOW
              </button>
            </div>
            <img className={Styles.fruit} src={SmoothFruit} />
          </div>
        </div>

        <div className={`col-lg-5 ${Styles.cardBanner2}`}>
            <div className={`card ${Styles.cardContent2}`} >
              <div className={`card-body d-flex flex-row justify-content-end p-0 ${Styles.cardBody}`}>
                <div className={Styles.banner2Content}>
                  <h5 className={` ${Styles.discount}`}> 20% Off</h5>
                  <div className="d-flex">
                  <img className={`mb-1 ${Styles.rectangle}`} src={Rectangle24}/>
                  <span className={Styles.sale}>SALE</span></div>
                  <h4 className={Styles.bannerTitle}>Fruits & Vegitables</h4>
                  <button className={Styles.bannerBtn2}>
                    Shop the Category <img className="m-1" src={Vector8} />
                  </button>
                  </div>

                  <img className={Styles.bannerImg22} src={fruitsVegBag} />
                </div>
                </div>
                <div className="card">
              <div className={`card-body d-flex flex-row justify-content-end p-0 ${Styles.cardBody3}`}>
               <div className={Styles.backedBanner3}> 
              <h5 className={Styles.discount}>15% Off</h5>
              <div className="d-flex">
                  <img className={`mb-1 ${Styles.rectangle}`} src={Rectangle24}/>
                  <span className={Styles.sale}>SALE</span></div>
                  <h4 className={Styles.bannerTitle}>Backed Products</h4>
                  <button className={Styles.bannerBtn3}>
                    Shop the Category
                    <img className="m-1" src={Vector8} />
                  </button>
               </div> 
                <img style={{width:"65%"}} className={Style.bannerImg33} src={bakery} />
                </div>
                </div>

            </div>
          </div>

             </div>
             </div> 
  );
};
export default BannerImage;
