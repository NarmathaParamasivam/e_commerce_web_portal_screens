import React from "react";
import Style from "./Style.module.css";
import jar from "../../assets/Images/jar.png";
import pharma from "../../assets/Images/pharma.png";
import milk from "../../assets/Images/milk.png";
import avocado from "../../assets/Images/avocado.png";
import deva1 from "../../assets/Images/deva1.png";
import Vector13 from "../../assets/Images/Vector13.png";
import Vector10 from "../../assets/Images/Vector10.png";
import Vector11 from "../../assets/Images/Vector11.png";
import Vector14 from "../../assets/Images/Vector14.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import sliderbtn from "../../assets/Images/sliderbtn.png";
import sliderbtn1 from "../../assets/Images/sliderbtn1.png";
import chips from "../../assets/Images/chips.png";
import juice from "../../assets/Images/juice.png";
import mockupgraphs from "../../assets/Images/mockupgraphs.png";
import tomatoketchup from "../../assets/Images/tomatoketchup.png";
import watermelonJuice from "../../assets/Images/watermelonJuice.png";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const JustLandedItems = () => {
  return (
    <div className="container mt-5 mb-5">
      <div class={Style.headContent}>
        <h4 className={Style.title}>Just Landed Items</h4>
        <div className={Style.sliderbtn2}>
          <img className={Style.sliderbtn1} src={sliderbtn} />
          <img className={Style.sliderbtn1} src={sliderbtn1} />
        </div>
      </div>
      <div className={Style.productDetails}>
        <div className={`card ${Style.cardStyle}`}>
          <div className={`card ${Style.cardImg}`}>
            <div className={"d-flex justify-content-end p-2 "}>
              <FavoriteBorderIcon className={Style.heartIcon} />
            </div>
            <div className="d-flex justify-content-center w-100">
              <img className={Style.product} src={chips} />
            </div>
          </div>
          <div className="d-flex flex-column">
            <p className={Style.cardPrice}>Jelly beans exxotics</p>
            <div className="d-flex flex-row gap-2 align-items-center">
              <p className={Style.unitText}>1 UNIT</p>
              <div className="d-flex flex-row gap-1">
                <img className={Style.star} src={Vector13} />
                <p className={`mb-0 ${Style.fixedPoint}`}>4.5</p>
              </div>
            </div>

            <p className={Style.price}> <CurrencyRupeeIcon className={Style.rupee}/>18.00</p>
            <div className="d-flex flex-row justify-content-between align-item-center mt-1 ">
              <div className="d-flex flex-row justify-content-between gap-2">
                <img className={Style.sub} src={Vector10} />
                <p>1</p>
                <img className={Style.add} src={Vector11} />
              </div>
              <div className={`d-flex ${Style.mainCart}`}>
                <p className={Style.addCart}>Add To Cart</p>
                <img className={Style.addCartIcon} src={Vector14} />
              </div>
            </div>
          </div>
        </div>

        <div className={`card ${Style.cardStyle}`}>
          <div className={`card ${Style.cardImg}`}>
            <div className={"d-flex justify-content-end p-2 "}>
              <FavoriteBorderIcon className={Style.heartIcon} />
            </div>
            <img className={Style.product} src={juice} />
          </div>
          <div className="d-flex flex-column">
            <p className={Style.cardPrice}>Growers cider</p>
            <div className="d-flex flex-row gap-2 align-items-center">
              <p className={Style.unitText}>1 UNIT</p>
              <div className="d-flex flex-row gap-1">
                <img className={Style.star} src={Vector13} />
                <p className={`mb-0 ${Style.fixedPoint}`}>4.0</p>
              </div>
            </div>

            <p className={Style.price}> <CurrencyRupeeIcon className={Style.rupee}/>5.00</p>
            <div className="d-flex flex-row justify-content-between mt-1">
              <div className="d-flex flex-row justify-content-between gap-2">
                <img className={Style.sub} src={Vector10} />
                <p>2</p>
                <img className={Style.add} src={Vector11} />
              </div>
              <div className="d-flex">
                <p className={Style.addCart}>Add To Cart</p>
                <img className={Style.addCartIcon} src={Vector14} />
              </div>
            </div>
          </div>
        </div>

        <div className={`card ${Style.cardStyle}`}>
          <div className={`card ${Style.cardImg}`}>
            <div className={"d-flex justify-content-end p-2 "}>
              <FavoriteBorderIcon className={Style.heartIcon} />
            </div>
            <img className={Style.product} src={mockupgraphs} />
          </div>
          <div className="d-flex flex-column">
            <p className={Style.cardPrice}>Fresh grapes</p>
            <div className="d-flex flex-row gap-2 align-items-center">
              <p className={Style.unitText}>1 KG</p>
              <div className="d-flex flex-row gap-1">
                <img className={Style.star} src={Vector13} />
                <p className={`mb-0 ${Style.fixedPoint}`}>4.5</p>
              </div>
            </div>

            <p className={Style.price}> <CurrencyRupeeIcon className={Style.rupee}/>6.00</p>
            <div className="d-flex flex-row justify-content-between mt-1">
              <div className="d-flex flex-row justify-content-between gap-2">
                <img className={Style.sub} src={Vector10} />
                <p>4</p>
                <img className={Style.add} src={Vector11} />
              </div>
              <div className="d-flex">
                <p className={Style.addCart}>Add To Cart</p>
                <img className={Style.addCartIcon} src={Vector14} />
              </div>
            </div>
          </div>
        </div>

        <div className={`card ${Style.cardStyle}`}>
          <div className={`card ${Style.cardImg}`}>
            <div className={"d-flex justify-content-end p-2 "}>
              <FavoriteBorderIcon className={Style.heartIcon} />
            </div>
            <img className={Style.product} src={tomatoketchup} />
          </div>
          <div className="d-flex flex-column">
            <p className={Style.cardPrice}>Heinz tomato ketchup </p>
            <div className="d-flex flex-row gap-2 align-items-center">
              <p className={Style.unitText}>1 UNIT</p>
              <div className="d-flex flex-row gap-1">
                <img className={Style.star} src={Vector13} />
                <p className={`mb-0 ${Style.fixedPoint}`}>5.0</p>
              </div>
            </div>

            <p className={Style.price}> <CurrencyRupeeIcon className={Style.rupee}/>9.00</p>
            <div className="d-flex flex-row justify-content-between mt-1">
              <div className="d-flex flex-row justify-content-between gap-2">
                <img className={Style.sub} src={Vector10} />
                <p>2</p>
                <img className={Style.add} src={Vector11} />
              </div>
              <div className="d-flex">
                <p className={Style.addCart}>Add To Cart</p>
                <img className={Style.addCartIcon} src={Vector14} />
              </div>
            </div>
          </div>
        </div>

        <div className={`card ${Style.cardStyle}`}>
          <div className={`card ${Style.cardImg}`}>
            <div className={"d-flex justify-content-end p-2 "}>
              <FavoriteBorderIcon className={Style.heartIcon} />
            </div>
            <div className={Style.iceCream}>
              <img className={Style.product} src={watermelonJuice} />
            </div>
          </div>
          <div className="d-flex flex-column">
            <p className={Style.cardPrice}>Sunstar Fresh Melon Juice</p>
            <div className="d-flex flex-row gap-2 align-items-center">
              <p className={Style.unitText}>1 UNIT</p>
              <div className="d-flex flex-row gap-1">
                <img className={Style.star} src={Vector13} />
                <p className={`mb-0 ${Style.fixedPoint}`}>3.5</p>
              </div>
            </div>

            <p className={Style.price}> <CurrencyRupeeIcon className={Style.rupee}/>12.00</p>
            <div className="d-flex flex-row justify-content-between mt-1">
              <div className="d-flex flex-row justify-content-between gap-2">
                <img className={Style.sub} src={Vector10} />
                <p>3</p>
                <img className={Style.add} src={Vector11} />
              </div>
              <div className="d-flex">
                <p className={Style.addCart}>Add To Cart</p>
                <img className={Style.addCartIcon} src={Vector14} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JustLandedItems;
