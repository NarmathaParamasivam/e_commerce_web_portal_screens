import React, { useState } from "react";
import Style from "./Style.module.css";
import jar from "../../assets/Images/jar.png";
import pharma from "../../assets/Images/pharma.png";
import milk from "../../assets/Images/milk.png";
import avocado from "../../assets/Images/avocado.png";
import cupCake1 from "../../assets/Images/cupCake1.png";
import Vector13 from "../../assets/Images/Vector13.png";
import Vector10 from "../../assets/Images/Vector10.png";
import Vector11 from "../../assets/Images/Vector11.png";
import Vector14 from "../../assets/Images/Vector14.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import sliderbtn from "../../assets/Images/sliderbtn.png";
import sliderbtn1 from "../../assets/Images/sliderbtn1.png";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import deva from "../../assets/Images/deva.png";

const ProductList = () => {
  const BestSellingProduct = [
    {
      Image: require("../../assets/Images/jar.png"),
      Title: "Amber Pure Honey",
      Unit: "1 UNIT",
      Point: "4.5",
      Amount: "18.00",
      StarImage: require("../../assets/Images/Vector13.png"),
      SubImage: require("../../assets/Images/Vector10.png"),
      Count: "1",
      AddImage: require("../../assets/Images/Vector11.png"),
      AddToCart: "Add To Cart",
    },
    {
      Image: require("../../assets/Images/avocado.png"),
      Title: "Fresh Local Avocado",
      Unit: "1 KG",
      Point: "4.0",
      Amount: "10.00",
      StarImage: require("../../assets/Images/Vector13.png"),
      SubImage: require("../../assets/Images/Vector10.png"),
      Count: "4",
      AddImage: require("../../assets/Images/Vector11.png"),
      AddToCart: "Add To Cart",
    },
    {
      Image: require("../../assets/Images/pharma.png"),
      Title: "Pharma Cashew Butter",
      Unit: "1 UNIT",
      Point: "4.5",
      Amount: "19.00",
      StarImage: require("../../assets/Images/Vector13.png"),
      SubImage: require("../../assets/Images/Vector10.png"),
      Count: "2",
      AddImage: require("../../assets/Images/Vector11.png"),
      AddToCart: "Add To Cart",
    },
    {
      Image: require("../../assets/Images/milk.png"),
      Title: "Pure Dairy Milk",
      Unit: "1 UNIT",
      Point: "5.0",
      Amount: "8.00",
      StarImage: require("../../assets/Images/Vector13.png"),
      SubImage: require("../../assets/Images/Vector10.png"),
      Count: "2",
      AddImage: require("../../assets/Images/Vector11.png"),
      AddToCart: "Add To Cart",
    },
    {
      Image: require("../../assets/Images/deva.png"),
      Title: "Suzane Creamy Cupcake",
      Unit: "1 UNIT",
      Point: "3.5",
      Amount: "14.00",
      StarImage: require("../../assets/Images/Vector13.png"),
      SubImage: require("../../assets/Images/Vector10.png"),
      Count: "6",
      AddImage: require("../../assets/Images/Vector11.png"),
      AddToCart: "Add To Cart",
    },
  ];
  const [bestProduct, setBestProduct] = useState(BestSellingProduct);
  
  return (
    <div className="container mt-5 mb-5">
      <div class={Style.headContent}>
        <h4 className={Style.title}>Best Selling Product</h4>
        <div className={Style.sliderbtn2}>
          <img className={Style.sliderbtn1} src={sliderbtn} />
          <img className={Style.sliderbtn1} src={sliderbtn1} />
        </div>
      </div>
      <div className={Style.productDetails}>
        {bestProduct.map((data, i) => {
          return (
            <div key={i} className={`card ${Style.cardStyle}`}>
              <div className={`card ${Style.cardImg}`}>
                <div className={"d-flex justify-content-end p-2 "}>
                  <FavoriteBorderIcon className={Style.heartIcon} />
                </div>
                <div className="d-flex justify-content-center w-100">
                  <img className={Style.product} src={data.Image} />
                </div>
              </div>
              <div className="d-flex flex-column">
                <p className={Style.cardPrice}>{data.Title}</p>
                <div className="d-flex flex-row gap-2 align-items-center">
                  <p className={Style.unitText}>{data.Unit}</p>
                  <div className={`d-flex flex-row gap-1 ${Style.starContent}`}>
                    <img className={Style.star} src={data.StarImage} />
                    <p className={`mb-0 ${Style.fixedPoint}`}>{data.Point}</p>
                  </div>
                </div>

                <p className={Style.price}>
                  <CurrencyRupeeIcon className={Style.rupee} />
                  {data.Amount}
                </p>
                <div className="d-flex flex-row justify-content-between align-item-center mt-1 ">
                  <div
                    className={`d-flex flex-row justify-content-between ${Style.addSub}`}
                  >
                    <img className={Style.sub} src={data.SubImage} />
                    <p className="mb-0">{data.Count}</p>
                    <img className={Style.add} src={data.AddImage} />
                  </div>
                  <div
                    className={`d-flex align-items-center ${Style.mainCart}`}
                  >
                    <p className={Style.addCart}>{data.AddToCart}</p>
                    <ShoppingCartIcon className={Style.addCartIcon} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* <div className={`card ${Style.cardStyle}`}>
          <div className={`card ${Style.cardImg}`}>
            <div className={"d-flex justify-content-end p-2 "}>
              <FavoriteBorderIcon className={Style.heartIcon} />
            </div>
            <img className={Style.product} src={avocado} />
          </div>
          <div className="d-flex flex-column">
            <p className={Style.cardPrice}>Fresh Local Avocado </p>
            <div className="d-flex flex-row gap-2 align-items-center">
              <p className={Style.unitText}>1 KG</p>
              <div className={`d-flex flex-row gap-1 ${Style.starContent}`}>
                <img className={Style.star} src={Vector13} />
                <p className={`mb-0 ${Style.fixedPoint}`}>4.0</p>
              </div>
            </div>

            <p className={Style.price}> <CurrencyRupeeIcon className={Style.rupee}/>10.00</p>
            <div className="d-flex flex-row justify-content-between mt-1">
              <div className={`d-flex flex-row justify-content-between ${Style.addSub}`}>
                <img className={Style.sub} src={Vector10} />
                <p className="mb-0">4</p>
                <img className={Style.add} src={Vector11} />
              </div>
              <div className="d-flex align-items-center">
                <p className={Style.addCart}>Add To Cart</p>
                <ShoppingCartIcon className={Style.addCartIcon}/>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className={`card ${Style.cardStyle}`}>
          <div className={`card ${Style.cardImg}`}>
            <div className={"d-flex justify-content-end p-2 "}>
              <FavoriteBorderIcon className={Style.heartIcon} />
            </div>
            <img className={Style.product} src={pharma} />
          </div>
          <div className="d-flex flex-column">
            <p className={Style.cardPrice}>Pharma Cashew butter</p>
            <div className="d-flex flex-row gap-2 align-items-center">
              <p className={Style.unitText}>1 UNIT</p>
              <div className={`d-flex flex-row gap-1 ${Style.starContent}`}>
                <img className={Style.star} src={Vector13} />
                <p className={`mb-0 ${Style.fixedPoint}`}>4.5</p>
              </div>
            </div>

            <p className={Style.price}> <CurrencyRupeeIcon className={Style.rupee}/>19.00</p>
            <div className="d-flex flex-row justify-content-between mt-1">
              <div className={`d-flex flex-row justify-content-between ${Style.addSub}`}>
                <img className={Style.sub} src={Vector10} />
                <p className="mb-0">2</p>
                <img className={Style.add} src={Vector11} />
              </div>
              <div className="d-flex align-items-center">
                <p className={Style.addCart}>Add To Cart</p>
                <ShoppingCartIcon className={Style.addCartIcon}/>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className={`card ${Style.cardStyle}`}>
          <div className={`card ${Style.cardImg}`}>
            <div className={"d-flex justify-content-end p-2 "}>
              <FavoriteBorderIcon className={Style.heartIcon} />
            </div>
            <img className={Style.product} src={milk} />
          </div>
          <div className="d-flex flex-column">
            <p className={Style.cardPrice}>Pure Dairy milk </p>
            <div className="d-flex flex-row gap-2 align-items-center">
              <p className={Style.unitText}>1 UNIT</p>
              <div className={`d-flex flex-row gap-1 ${Style.starContent}`}>
                <img className={Style.star} src={Vector13} />
                <p className={`mb-0 ${Style.fixedPoint}`}>5.0</p>
              </div>
            </div>

            <p className={Style.price}> <CurrencyRupeeIcon className={Style.rupee}/>8.00</p>
            <div className="d-flex flex-row justify-content-between mt-1">
              <div className={`d-flex flex-row justify-content-between ${Style.addSub}`}>
                <img className={Style.sub} src={Vector10} />
                <p className="mb-0">2</p>
                <img className={Style.add} src={Vector11} />
              </div>
              <div className="d-flex align-items-center">
                <p className={Style.addCart}>Add To Cart</p>
                <ShoppingCartIcon className={Style.addCartIcon}/>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className={`card ${Style.cardStyle}`}>
          <div className={`card ${Style.cardImg}`}>
            <div className={"d-flex justify-content-end p-2 "}>
              <FavoriteBorderIcon className={Style.heartIcon} />
            </div>
            <div className={Style.iceCream}>
              <img className={Style.iceProduct} src={cupCake1} />
            </div>
          </div>
          <div className="d-flex flex-column">
            <p className={Style.cardPrice}>Suzane creamy Cupcake</p>
            <div className="d-flex flex-row gap-2 align-items-center">
              <p className={Style.unitText}>1 UNIT</p>
              <div className={`d-flex flex-row gap-1 ${Style.starContent}`}>
                <img className={Style.star} src={Vector13} />
                <p className={`mb-0 ${Style.fixedPoint}`}>3.5</p>
              </div>
            </div>

            <p className={Style.price}> <CurrencyRupeeIcon className={Style.rupee}/>14.00</p>
            <div className="d-flex flex-row justify-content-between mt-1">
              <div className={`d-flex flex-row justify-content-between ${Style.addSub}`}>
                <img className={Style.sub} src={Vector10} />
                <p className="mb-0">6</p>
                <img className={Style.add} src={Vector11} />
              </div>
              <div className="d-flex align-items-center">
                <p className={Style.addCart}>Add To Cart</p>
                <ShoppingCartIcon className={Style.addCartIcon}/>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default ProductList;
