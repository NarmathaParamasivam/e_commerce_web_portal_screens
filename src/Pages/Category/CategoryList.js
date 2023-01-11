import React from "react";
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

const Category = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className={`mt-5 ${Style.categoryTitle}`}>
          <h4 className={`mb-5 ${Style.titleStyle}`}>Category</h4>
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
        <div className={Style.multiCards}>
          <div className={`card ${Style.categoryCards}`}>
            <div className={Style.categoryImg}>
              <img src={Broccoli} />
            </div>

            <h6 className={Style.cardTitle}>Fruits & Veges</h6>
          </div>
          <div className={`card ${Style.categoryCards}`}>
            <div className={Style.categoryImg}>
              <img src={breadBaguette} />
            </div>
            <h6 className={Style.cardTitle}>Breads & Sweets</h6>
          </div>
          <div className={`card ${Style.categoryCards}`}>
            <div className={Style.categoryImg}>
              <img src={wineGlass} />
            </div>
            <h6 className={Style.cardTitle}>Wine Drinks</h6>
          </div>
          <div className={`card ${Style.categoryCards}`}>
            <div className={Style.categoryImg}>
              <img  src={softDrinks} />
            </div>
            <h6 className={Style.cardTitle}>Oil and Ghee</h6>
          </div>
          <div className={`card ${Style.categoryCards}`}>
            <div className={Style.categoryImg}>
              <img src={animalDrumstrick} />
            </div>
            <h6 className={Style.cardTitle}>Raw Meat</h6>
          </div>
          <div className={`card ${Style.categoryCards}`}>
            <div className={Style.categoryImg}>
              <img src={breadherbflour} />
            </div>
            <h6 className={Style.cardTitle}>Natural Herbs</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Category;
