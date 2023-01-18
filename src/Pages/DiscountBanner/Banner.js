import React from "react";
import Styles from "./Style.module.css";
import bgPattern from "../../assets/Images/bgpattern.png";
import iceCream from "../../assets/Images/iceCream.png";
import deva1 from "../../assets/Images/deva1.png";
import pexels from "../../assets/Images/pexels.png";
import Rectangle86 from "../../assets/Images/Rectangle86.png";
import cupCake from "../../assets/Images/cupCake.png";


const Banner = () => {
  return (
    <div className="container mt-5 mb-5 ">
      <div className="row">
        <div className={`d-flex gap-4 ${Styles.banner}`}>
        <div className={"col-lg-6"}>
          <div className={`card ${Styles.cardBanner1}`}>
            <div className={Styles.content}>
              <p className={Styles.discount}> Upto 15% Off </p>
              <p className={Styles.title}>Luxa Dark Chocolate</p>
              <p className={Styles.subTitle}>
                Chocolate is only the happiness that you can eat.
              </p>
              <button className={Styles.btnShop}>SHOP IT</button>
            </div>
            <div className={Styles.bannerImg}>
              <img className={Styles.pexels1} src={pexels} />
            </div>
          </div>
        </div>
     
      
        <div className={`col-lg-6 ${Styles.card2}`}>
          <div className={`card ${Styles.cardBanner2}`}>
            <div className={Styles.content}>
              <p className={Styles.discount}> Upto 15% Off </p>
              <p className={Styles.title}> Creamy Muffins</p>
              <p className={Styles.subTitle}>
              Very tasty & creamy vanilla flavour creamy muffins.
              </p>
              <button className={Styles.btnShop}>SHOP IT</button>
            </div>
            <div className={Styles.bannerImg}>
              {/* <img className={Styles.iceCream1} src={iceCream} />
              <img className={Styles.iceCream2} src={deva1} />
              <img className={Styles.iceCream1} src={iceCream} /> */}
                <img className={Styles.pexels2} src={cupCake} />
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>
  );
};
export default Banner;
