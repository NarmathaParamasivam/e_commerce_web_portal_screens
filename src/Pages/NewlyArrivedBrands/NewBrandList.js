import React from "react";
import Style from "./Style.module.css";
import Vector8 from "../../assets/Images/Vector8.png";
import sliderbtn from "../../assets/Images/sliderbtn.png";
import sliderbtn1 from "../../assets/Images/sliderbtn1.png";
import Rectangle85 from "../../assets/Images/Rectangle85.png";
import Rectangle2 from "../../assets/Images/Rectangle2.png";
import Rectangle3 from "../../assets/Images/Rectangle3.png";
import Rectangle4 from "../../assets/Images/Rectangle4.png";

const brandList = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className={`mt-5 ${Style.categoryTitle}`}>
          <h4 className="mb-5">Newly Arrived Brands</h4>
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
      <div className="row d-flex flex-row justify-content-between">
       
            <div className="col-lg-3 col-md-3 col-sm-3">
          <div className={`card d-flex flex-row justify-conten-between ${Style.cardStyle}`}>
           <div>
              <img className={Style.newBrand} src={Rectangle85} />
              </div>

            <div className="mt-4">
              <h6 className={Style.cardSubtitle}>Amber Jar</h6>
              <h5 className={Style.cardTitle}> Honey Best Nectar You Wish To Get</h5>
            </div>
          </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3">
          <div className={`card d-flex flex-row justify-conten-between ${Style.cardStyle}`}>
            <div>
              <img className={Style.newBrand} src={Rectangle2} />
            </div>
            <div className="mt-4">
              <h6 className={Style.cardSubtitle}>Pure Herb</h6>
              <h5 className={Style.cardTitle}>Pure herb the only natural brand</h5>
            </div>
          </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3">
          <div className={`card d-flex flex-row justify-conten-between ${Style.cardStyle}`}>
            <div>
              <img className={Style.newBrand} src={Rectangle3} />
            </div>
            <div className="mt-4">
              <h6 className={Style.cardSubtitle}>Tuna</h6>
              <h5 className={Style.cardTitle}>Where's tuna? Tuna, clear choice!</h5>
            </div>
          </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3">
          <div className={`card d-flex flex-row justify-conten-between ${Style.cardStyle}`}>
            <div>
              <img className={Style.newBrand} src={Rectangle4} />
            </div>
            <div className="mt-4">
              <h6 className={Style.cardSubtitle}>Hotz</h6>
              <h5 className={Style.cardTitle}> the one junk food that’s natural</h5>
            </div>
          </div>
          </div>
        
      </div>
    </div>
  );
};
export default brandList;
