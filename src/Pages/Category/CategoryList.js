import React from "react";
import Style from "./Style.module.css";
import Broccoli from "../../assets/Images/Broccoli.png";
import wineGlass from "../../assets/Images/wineGlass.png";
import breadBaguette from "../../assets/Images/breadBaguette.png";
import softDrinks from "../../assets/Images/softDrinks.png";
import animalDrumstrick from "../../assets/Images/animalDrumstrick.png";
import breadherbflour from "../../assets/Images/breadherbflour.png";

const Category = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <h3 className="mb-5">Category</h3>
        <div className={Style.multiCards}>
          <div className={`card ${Style.categoryCards}`}>
            <div clasName={Style.categoryImg}>
              <img src={Broccoli} />
            </div>

            <h6 className={Style.cardTitle}>Fruits & Veges</h6>
          </div>
          <div className={`card ${Style.categoryCards}`}>
            <div clasName={Style.categoryImg}>
              <img
                clasName={Style.categoryImg1}
                src={breadBaguette}
              />
            </div>
            <h6 className={Style.cardTitle}>Fruits & Veges</h6>
          </div>
          <div className={`card ${Style.categoryCards}`}>
            <div clasName={Style.categoryImg}>
              <img src={wineGlass} />
            </div>
            <h6 className={Style.cardTitle}>Fruits & Veges</h6>
          </div>
          <div className={`card ${Style.categoryCards}`}>
            <div clasName={Style.categoryImg}>
              <img src={softDrinks} />
            </div>
            <h6 className={Style.cardTitle}>Fruits & Veges</h6>
          </div>
          <div className={`card ${Style.categoryCards}`}>
            <div clasName={Style.categoryImg}>
              <img src={animalDrumstrick} />
            </div>
            <h6 className={Style.cardTitle}>Fruits & Veges</h6>
          </div>
          <div className={`card ${Style.categoryCards}`}>
            <div clasName={Style.categoryImg}>
              <img src={breadherbflour} />
            </div>
            <h6 className={Style.cardTitle}>Fruits & Veges</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Category;
