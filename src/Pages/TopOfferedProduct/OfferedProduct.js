import React from "react";
import Styles from "./Style.module.css";
import Vector15 from "../../assets/Images/Vector15.png";
import sliderbtn from "../../assets/Images/sliderbtn.png";
import sliderbtn1 from "../../assets/Images/sliderbtn1.png";
import brittany from "../../assets/Images/brittany.png";
import tylerNix from "../../assets/Images/tylerNix.png";
import olga from "../../assets/Images/olga.png";
import madalyn from "../../assets/Images/madalyn.png";
import elsa from "../../assets/Images/elsa.png";
import Vector14 from "../../assets/Images/Vector14.png";
import Vector13 from "../../assets/Images/Vector13.png";
import Vector10 from "../../assets/Images/Vector10.png";
import Vector11 from "../../assets/Images/Vector11.png";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


const OfferedProduct = () => {
  return (
    <div className="container mt-5 mb-5">
     
        <div class={Styles.headContent}>
          <div className={Styles.title}>
            <h4 className={Styles.mainTitle}>Top offered products</h4>
            <div
              className={`card d-flex gap-2 justify-content-center flex-row py-1  align-item-center ${Styles.clockCard}`}
            >
              <img className={Styles.clockImg} src={Vector15} />
              <p className={`mb-0 ${Styles.clkContent}`}>
                Expires in: 12hr : 41min : 8s
              </p>
            </div>
          </div>
          <div className={Styles.sliderbtn2}>
            <img className={Styles.sliderbtn1} src={sliderbtn} />
            <img className={Styles.sliderbtn1} src={sliderbtn1} />
          </div>
        </div>

        <div className="row mt-3 mb-5">
          <div className={Styles.productDetails}>
            <div className={`card ${Styles.cardStyle}`}>
              <div className={`card ${Styles.cardImg}`}>
              <div className={"d-flex justify-content-between p-2 "}>
<p className={Styles.discountCard}>-25%</p>
                <FavoriteBorderIcon className={Styles.heartIcon} />
                </div> 
                <img className={Styles.product} src={brittany} />
              </div>
              <div className="d-flex flex-column">
                <p className={Styles.cardPrice}>Pacific barista beverage</p>
                <div className="d-flex flex-row gap-2 align-items-center">
                  <p className={Styles.unitText}>1 UNIT</p>
                  <div className="d-flex flex-row gap-1">
                    <img className={Styles.star} src={Vector13} />
                    <p className={`mb-0 ${Styles.fixedPoint}`}>4.5</p>
                  </div>
                </div>
                <div className={Styles.discountValue}>
                  <del className={Styles.value}><CurrencyRupeeIcon className={Styles.rupee}/>12.00</del>
                  <p className={Styles.price}> <CurrencyRupeeIcon className={Styles.rupee}/>8.00</p>
                </div>
<p className={Styles.sold}>Sold: 30/40</p>              

                <div className="d-flex flex-row justify-content-between">
                  <div className="d-flex flex-row justify-content-between gap-2">
                    <img className={Styles.sub} src={Vector10} />
                    <p>1</p>
                    <img className={Styles.add} src={Vector11} />
                  </div>
                  <div className="d-flex">
                    <p className={Styles.addCart}>Add To Cart</p>
                    <img className={Styles.addCartIcon} src={Vector14} />
                  </div>
                </div>
              </div>
            </div>

            <div className={`card ${Styles.cardStyle}`}>
              <div className={`card ${Styles.cardImg}`}>
              <div className="d-flex justify-content-between p-2">
              <p className={Styles.discountCard}>-35%</p>
                <FavoriteBorderIcon className={Styles.heartIcon}/></div> 
                <img className={Styles.product} src={tylerNix} />
              </div>
              <div className="d-flex flex-column">
                <p className={Styles.cardPrice}>Kombucha local lilikoi</p>
                <div className="d-flex flex-row gap-2 align-items-center">
                  <p className={Styles.unitText}>1 UNIT</p>
                  <div className="d-flex flex-row gap-1">
                    <img className={Styles.star} src={Vector13} />
                    <p className={`mb-0 ${Styles.fixedPoint}`}>4.0</p>
                  </div>
                </div>

                <div className={Styles.discountValue}>
                  <del className={Styles.value}><CurrencyRupeeIcon className={Styles.rupee}/>12.00</del>
                  <p className={Styles.price}> <CurrencyRupeeIcon className={Styles.rupee}/>6.00</p>
                </div>
                <p className={Styles.sold}>Sold: 9/25</p> 
                <div className="d-flex flex-row justify-content-between">
                  <div className="d-flex flex-row justify-content-between gap-2">
                    <img className={Styles.sub} src={Vector10} />
                    <p>4</p>
                    <img className={Styles.add} src={Vector11} />
                  </div>
                  <div className="d-flex">
                    <p className={Styles.addCart}>Add To Cart</p>
                    <img className={Styles.addCartIcon} src={Vector14} />
                  </div>
                </div>
              </div>
            </div>

            <div className={`card ${Styles.cardStyle}`}>
              <div className={`card ${Styles.cardImg}`}>
              <div className="d-flex justify-content-between p-2">
              <p className={Styles.discountCard}>-15%</p>
                <FavoriteBorderIcon className={Styles.heartIcon} /></div> 
                <img className={Styles.product} src={olga} />
              </div>
              <div className="d-flex flex-column">
                <p className={Styles.cardPrice}>Cheese flavoured Lays</p>
                <div className="d-flex flex-row gap-2 align-items-center">
                  <p className={Styles.unitText}>1 UNIT</p>
                  <div className="d-flex flex-row gap-1">
                    <img className={Styles.star} src={Vector13} />
                    <p className={`mb-0 ${Styles.fixedPoint}`}>4.5</p>
                  </div>
                </div>

                <div className={Styles.discountValue}>
                  <del className={Styles.value}><CurrencyRupeeIcon className={Styles.rupee}/>12.00</del>
                  <p className={Styles.price}> <CurrencyRupeeIcon className={Styles.rupee}/>8.00</p>
                </div>
                <p className={Styles.sold}>Sold: 12/60</p> 
                <div className="d-flex flex-row justify-content-between">
                  <div className="d-flex flex-row justify-content-between gap-2">
                    <img className={Styles.sub} src={Vector10} />
                    <p>2</p>
                    <img className={Styles.add} src={Vector11} />
                  </div>
                  <div className="d-flex">
                    <p className={Styles.addCart}>Add To Cart</p>
                    <img className={Styles.addCartIcon} src={Vector14} />
                  </div>
                </div>
              </div>
            </div>

            <div className={`card ${Styles.cardStyle}`}>
              <div className={`card ${Styles.cardImg}`}>
              <div className="d-flex justify-content-between p-2">
              <p className={Styles.discountCard}>-39%</p><FavoriteBorderIcon className={Styles.heartIcon}/></div> 
                <img className={Styles.product} src={madalyn} />
              </div>
              <div className="d-flex flex-column">
                <p className={Styles.cardPrice}>Oat milk barista </p>
                <div className="d-flex flex-row gap-2 align-items-center">
                  <p className={Styles.unitText}>1 UNIT</p>
                  <div className="d-flex flex-row gap-1">
                    <img className={Styles.star} src={Vector13} />
                    <p className={`mb-0 ${Styles.fixedPoint}`}>5.0</p>
                  </div>
                </div>

                <div className={Styles.discountValue}>
                  <del className={Styles.value}><CurrencyRupeeIcon className={Styles.rupee}/>12.00</del>
                  <p className={Styles.price}> <CurrencyRupeeIcon className={Styles.rupee}/>5.00</p>
                </div>
                <p className={Styles.sold}>Sold: 12/35</p> 
                <div className="d-flex flex-row justify-content-between">
                  <div className="d-flex flex-row justify-content-between gap-2">
                    <img className={Styles.sub} src={Vector10} />
                    <p>2</p>
                    <img className={Styles.add} src={Vector11} />
                  </div>
                  <div className="d-flex">
                    <p className={Styles.addCart}>Add To Cart</p>
                    <img className={Styles.addCartIcon} src={Vector14} />
                  </div>
                </div>
              </div>
            </div>

            <div className={`card ${Styles.cardStyle}`}>
              <div className={`card ${Styles.cardImg}`}>
              <div className="d-flex justify-content-between p-2">
              <p className={Styles.discountCard}>-12%</p>
                <FavoriteBorderIcon className={Styles.heartIcon}/></div> 
                <img className={Styles.product} src={elsa} />
              </div>
              <div className="d-flex flex-column">
                <p className={Styles.cardPrice}>Dr. raw relax hearts</p>
                <div className="d-flex flex-row gap-2 align-items-center">
                  <p className={Styles.unitText}>1 UNIT</p>
                  <div className="d-flex flex-row gap-1">
                    <img className={Styles.star} src={Vector13} />
                    <p className={`mb-0 ${Styles.fixedPoint}`}>3.5</p>
                  </div>
                </div>

                <div className={Styles.discountValue}>
                  <del className={Styles.value}><CurrencyRupeeIcon className={Styles.rupee}/>13.00</del>
                  <p className={Styles.price}> <CurrencyRupeeIcon className={Styles.rupee}/>8.00</p>
                </div>
                <p className={Styles.sold}>Sold: 5/25</p> 
                <div className="d-flex flex-row justify-content-between">
                  <div className="d-flex flex-row justify-content-between gap-2">
                    <img className={Styles.sub} src={Vector10} />
                    <p>6</p>
                    <img className={Styles.add} src={Vector11} />
                  </div>
                  <div className="d-flex">
                    <p className={Styles.addCart}>Add To Cart</p>
                    <img className={Styles.addCartIcon} src={Vector14} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
export default OfferedProduct;
