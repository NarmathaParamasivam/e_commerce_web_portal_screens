import React from "react";
import Style from "./Style.module.css";
import watermelonJuice from "../../assets/Images/watermelonJuice.png";
import tomatoes from "../../assets/Images/tomatoes.png";
import cucumber from "../../assets/Images/cucumber.png";
import tomatoketchup from "../../assets/Images/tomatoketchup.png";
import avocado from "../../assets/Images/avocado.png";
import Vector13 from "../../assets/Images/Vector13.png";
import Vector10 from "../../assets/Images/Vector10.png";
import Vector11 from "../../assets/Images/Vector11.png";



const ProductList = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className={Style.productHeader}>
          <h4>Trending Product</h4>
          <div className={Style.productSubtitle}>
            <h6 className={Style.subTitle}>ALL</h6>

            <h6 className={Style.subTitle}>FRUITS & VEGES</h6>

            <h6 className={Style.subTitle}>JUICES</h6>

            <h6 className={Style.subTitle}>BREADS & SWEETS</h6>

            <h6 className={Style.subTitle}>OIL & GHEE</h6>

            <h6 className={Style.subTitle}>RAW MEATS</h6>

            <h6 className={Style.subTitle}>NATURAL HERBS</h6>
          </div>
        </div>
      </div>
      <div className={Style.productDetails}>
        <div className={`card ${Style.cardStyle}`}>
            <div className={`card ${Style.cardImg}`}>
          <img className={Style.product} src={watermelonJuice} />
          </div>
<div className="d-flex flex-column">
          <p className={Style.cardPrice}>Sunstar Fresh Melon Juice</p>
          <div className="d-flex flex-row gap-2 align-items-center">
          <p className={Style.unitText}>1 UNIT</p>
          <img className={Style.star} src={Vector13}/>
          <p className="mb-0">4.5</p>
          </div>

          <p className={Style.price}> $18.00</p>
          <div className="d-flex flex-row justify-content-between">
            <div className="d-flex flex-row justify-content-between gap-2">
          <img className={Style.sub} src={Vector10}/>
          <p>4</p>
          <img className={Style.add} src={Vector11}/>
          </div>
          <p className={Style.addCard}>Add To Card</p>
          </div>
          </div>

        </div>
        <div className="card">
          <img src={tomatoes} />

          <p className={Style.cardPrice}>Fresh local tomatoes</p>
        </div>
        <div className="card">
          <img src={cucumber} />
          <p className={Style.cardPrice}>Fresh Cucumber</p>
        </div>
        <div className="card">
          <img src={tomatoketchup} />
          <p className={Style.cardPrice}>Heinz tomato ketchup</p>
        </div>
        <div className="card">
          <img src={avocado} />
          <p className={Style.cardPrice}>Local Avocado</p>
        </div>
      </div>
      {/* <div className="row">
      <div className="card"></div>
       <div className="card"></div> 
        <div className="card"></div>
        <div className="card"></div>
         <div className="card"></div>
      </div> */}
    </div>
  );
};
export default ProductList;
