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
import Vector14 from "../../assets/Images/Vector14.png";

import biscuits from "../../assets/Images/biscuits.png";
import bananas from "../../assets/Images/bananas.png";
import orangeJuice from "../../assets/Images/orangeJuice.png";
import milk from "../../assets/Images/milk.png";
import Raspberries from "../../assets/Images/Raspberries.png";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const ProductList = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className={`mb-5 mt-5 ${Style.productHeader}`}>
          <h4 className={Style.title}>Trending Product</h4>
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
          <div className={"d-flex justify-content-end p-2 "}><FavoriteBorderIcon className={Style.heartIcon} /></div> 
            <img className={Style.product} src={watermelonJuice} />
          </div>
          <div className="d-flex flex-column">
            <p className={Style.cardPrice}>Sunstar Fresh Melon Juice</p>
            <div className="d-flex flex-row gap-2 align-items-center">
              <p className={Style.unitText}>1 UNIT</p>
              <div className="d-flex flex-row gap-1">
                <img className={Style.star} src={Vector13} />
                <p className={`mb-0 ${Style.fixedPoint}`}>4.5</p>
              </div>
            </div>

            <p className={Style.price}> <CurrencyRupeeIcon className={Style.rupee}  />18.00</p>
            <div className="d-flex flex-row justify-content-between">
              <div className="d-flex flex-row justify-content-between gap-2">
                <img className={Style.sub} src={Vector10} />
                <p>4</p>
                <img className={Style.add} src={Vector11} />
              </div>
              <div className="d-flex">
              <p className={Style.addCart}>Add To Cart</p>
              <img className={Style.addCartIcon} src={Vector14}/>
              </div>
              
            </div>
          </div>
        </div>

        <div className={`card ${Style.cardStyle}`}>
          <div className={`card ${Style.cardImg}`}>
          <div className={"d-flex justify-content-end p-2 "}><FavoriteBorderIcon className={Style.heartIcon} /></div> 
            <img className={Style.product} src={tomatoes} />
          </div>
          <div className="d-flex flex-column">
            <p className={Style.cardPrice}>Fresh Local Tomatoes </p>
            <div className="d-flex flex-row gap-2 align-items-center">
              <p className={Style.unitText}>1 KG</p>
              <div className="d-flex flex-row gap-1">
                <img className={Style.star} src={Vector13} />
                <p className={`mb-0 ${Style.fixedPoint}`}>4.0</p>
              </div>
            </div>

            <p className={Style.price}> <CurrencyRupeeIcon className={Style.rupee}/>5.00</p>
            <div className="d-flex flex-row justify-content-between">
              <div className="d-flex flex-row justify-content-between gap-2">
                <img className={Style.sub} src={Vector10} />
                <p>2</p>
                <img className={Style.add} src={Vector11} />
              </div>
              <div className="d-flex">
              <p className={Style.addCart}>Add To Cart</p>
              <img className={Style.addCartIcon} src={Vector14}/>
              </div>
            </div>
          </div>
        </div>

        <div className={`card ${Style.cardStyle}`}>
          <div className={`card ${Style.cardImg}`}>
          <div className={"d-flex justify-content-end p-2 "}><FavoriteBorderIcon className={Style.heartIcon} /></div> 
            <img className={Style.product} src={cucumber} />
          </div>
          <div className="d-flex flex-column">
            <p className={Style.cardPrice}>Fresh Cucumber</p>
            <div className="d-flex flex-row gap-2 align-items-center">
              <p className={Style.unitText}>1 KG</p>
              <div className="d-flex flex-row gap-1">
                <img className={Style.star} src={Vector13} />
                <p className={`mb-0 ${Style.fixedPoint}`}>4.5</p>
              </div>
            </div>

            <p className={Style.price}> <CurrencyRupeeIcon className={Style.rupee}/>6.00</p>
            <div className="d-flex flex-row justify-content-between">
              <div className="d-flex flex-row justify-content-between gap-2">
                <img className={Style.sub} src={Vector10} />
                <p>4</p>
                <img className={Style.add} src={Vector11} />
              </div>
              <div className="d-flex">
              <p className={Style.addCart}>Add To Cart</p>
              <img className={Style.addCartIcon} src={Vector14}/>
              </div>
            </div>
          </div>
        </div>

        <div className={`card ${Style.cardStyle}`}>
          <div className={`card ${Style.cardImg}`}>
          <div className={"d-flex justify-content-end p-2 "}><FavoriteBorderIcon className={Style.heartIcon} /></div> 
            <img className={Style.product} src={tomatoketchup} />
          </div>
          <div className="d-flex flex-column">
            <p className={Style.cardPrice}>Heinz tomato ketchup</p>
            <div className="d-flex flex-row gap-2 align-items-center">
              <p className={Style.unitText}>1 UNIT</p>
              <div className="d-flex flex-row gap-1">
                <img className={Style.star} src={Vector13} />
                <p className={`mb-0 ${Style.fixedPoint}`}>5.0</p>
              </div>
            </div>

            <p className={Style.price}> <CurrencyRupeeIcon className={Style.rupee}/>9.00</p>
            <div className="d-flex flex-row justify-content-between">
              <div className="d-flex flex-row justify-content-between gap-2">
                <img className={Style.sub} src={Vector10} />
                <p>2</p>
                <img className={Style.add} src={Vector11} />
              </div>
              <div className="d-flex">
              <p className={Style.addCart}>Add To Cart</p>
              <img className={Style.addCartIcon} src={Vector14}/>
              </div>
              
            </div>
          </div>
        </div>
 
        <div className={`card ${Style.cardStyle}`}>
          <div className={`card ${Style.cardImg}`}>
          <div className={"d-flex justify-content-end p-2 "}><FavoriteBorderIcon className={Style.heartIcon} /></div> 
            <img className={Style.product} src={avocado} />
          </div>
          <div className="d-flex flex-column">
            <p className={Style.cardPrice}>Local Avocado</p>
            <div className="d-flex flex-row gap-2 align-items-center">
              <p className={Style.unitText}>1 KG</p>
              <div className="d-flex flex-row gap-1">
                <img className={Style.star} src={Vector13} />
                <p className={`mb-0 ${Style.fixedPoint}`}>3.5</p>
              </div>
            </div>

            <p className={Style.price}> <CurrencyRupeeIcon className={Style.rupee}/>12.00</p>
            <div className="d-flex flex-row justify-content-between">
              <div className="d-flex flex-row justify-content-between gap-2">
                <img className={Style.sub} src={Vector10} />
                <p>3</p>
                <img className={Style.add} src={Vector11} />
              </div>
              <div className="d-flex">
              <p className={Style.addCart}>Add To Cart</p>
              <img className={Style.addCartIcon} src={Vector14}/>
              </div>
            </div>
          </div>
        </div>
      </div> 

      {/* //row 2 */}
      <div className="row mt-3 mb-5">
        <div className={Style.productDetails}>
          <div className={`card ${Style.cardStyle}`}>
            <div className={`card ${Style.cardImg}`}>
            <div className={"d-flex justify-content-end p-2 "}><FavoriteBorderIcon className={Style.heartIcon} /></div> 
              <img className={Style.product} src={biscuits} />
            </div>
            <div className="d-flex flex-column">
              <p className={Style.cardPrice}>Munch Crunchy Cookies</p>
              <div className="d-flex flex-row gap-2 align-items-center">
                <p className={Style.unitText}>1 UNIT</p>
                <div className="d-flex flex-row gap-1">
                  <img className={Style.star} src={Vector13} />
                  <p className={`mb-0 ${Style.fixedPoint}`}>4.5</p>
                </div>
              </div>

              <p className={Style.price}> <CurrencyRupeeIcon className={Style.rupee}/>8.00</p>
              <div className="d-flex flex-row justify-content-between">
                <div className="d-flex flex-row justify-content-between gap-2">
                  <img className={Style.sub} src={Vector10} />
                  <p>1</p>
                  <img className={Style.add} src={Vector11} />
                </div>
                <div className="d-flex">
                <p className={Style.addCart}>Add To Cart</p>
                <img className={Style.addCartIcon} src={Vector14}/>
                </div>
              </div>
            </div>
          </div>

          <div className={`card ${Style.cardStyle}`}>
            <div className={`card ${Style.cardImg}`}>
            <div className={"d-flex justify-content-end p-2 "}><FavoriteBorderIcon className={Style.heartIcon} /></div> 
              <img className={Style.product} src={bananas} />
            </div>
            <div className="d-flex flex-column">
              <p className={Style.cardPrice}>Fresh Bananas</p>
              <div className="d-flex flex-row gap-2 align-items-center">
                <p className={Style.unitText}>1 KG</p>
                <div className="d-flex flex-row gap-1">
                  <img className={Style.star} src={Vector13} />
                  <p className={`mb-0 ${Style.fixedPoint}`}>4.0</p>
                </div>
              </div>

              <p className={Style.price}> <CurrencyRupeeIcon className={Style.rupee}/>10.00</p>
              <div className="d-flex flex-row justify-content-between">
                <div className="d-flex flex-row justify-content-between gap-2">
                  <img className={Style.sub} src={Vector10} />
                  <p>4</p>
                  <img className={Style.add} src={Vector11} />
                </div>
                <div className="d-flex">
                <p className={Style.addCart}>Add To Cart</p>
                <img className={Style.addCartIcon} src={Vector14}/>
                </div>
              </div>
            </div>
          </div>

          <div className={`card ${Style.cardStyle}`}>
            <div className={`card ${Style.cardImg}`}>
            <div className={"d-flex justify-content-end p-2 "}><FavoriteBorderIcon className={Style.heartIcon} /></div> 
              <img className={Style.product} src={orangeJuice} />
            </div>
            <div className="d-flex flex-column">
              <p className={Style.cardPrice}>Fresh Orange Juice</p>
              <div className="d-flex flex-row gap-2 align-items-center">
                <p className={Style.unitText}>1 UNIT</p>
                <div className="d-flex flex-row gap-1">
                  <img className={Style.star} src={Vector13} />
                  <p className={`mb-0 ${Style.fixedPoint}`}>4.5</p>
                </div>
              </div>

              <p className={Style.price}> <CurrencyRupeeIcon className={Style.rupee}/>12.00</p>
              <div className="d-flex flex-row justify-content-between">
                <div className="d-flex flex-row justify-content-between gap-2">
                  <img className={Style.sub} src={Vector10} />
                  <p>2</p>
                  <img className={Style.add} src={Vector11} />
                </div>
                <div className="d-flex">
                <p className={Style.addCart}>Add To Cart</p>
                <img className={Style.addCartIcon} src={Vector14}/>
                </div>
              </div>
            </div>
          </div>

          <div className={`card ${Style.cardStyle}`}>
            <div className={`card ${Style.cardImg}`}>
            <div className={"d-flex justify-content-end p-2 "}><FavoriteBorderIcon className={Style.heartIcon} /></div> 
              <img className={Style.product} src={milk} />
            </div>
            <div className="d-flex flex-column">
              <p className={Style.cardPrice}>Pure Dairy milk </p>
              <div className="d-flex flex-row gap-2 align-items-center">
                <p className={Style.unitText}>1 UNIT</p>
                <div className="d-flex flex-row gap-1">
                  <img className={Style.star} src={Vector13} />
                  <p className={`mb-0 ${Style.fixedPoint}`}>5.0</p>
                </div>
              </div>

              <p className={Style.price}> <CurrencyRupeeIcon className={Style.rupee}/>8.00</p>
              <div className="d-flex flex-row justify-content-between">
                <div className="d-flex flex-row justify-content-between gap-2">
                  <img className={Style.sub} src={Vector10} />
                  <p>2</p>
                  <img className={Style.add} src={Vector11} />
                </div>
                <div className="d-flex">
                <p className={Style.addCart}>Add To Cart</p>
                <img className={Style.addCartIcon} src={Vector14}/>
                </div>
              </div>
            </div>
          </div>

          <div className={`card ${Style.cardStyle}`}>
            <div className={`card ${Style.cardImg}`}>
            <div className={"d-flex justify-content-end p-2 "}><FavoriteBorderIcon className={Style.heartIcon} /></div> 
              <img className={Style.product} src={Raspberries} />
            </div>
            <div className="d-flex flex-column">
              <p className={Style.cardPrice}>Raspberries</p>
              <div className="d-flex flex-row gap-2 align-items-center">
                <p className={Style.unitText}>1 KG</p>
                <div className="d-flex flex-row gap-1">
                  <img className={Style.star} src={Vector13} />
                  <p className={`mb-0 ${Style.fixedPoint}`}>3.5</p>
                </div>
              </div>

              <p className={Style.price}> <CurrencyRupeeIcon className={Style.rupee}/>14.00</p>
              <div className="d-flex flex-row justify-content-between">
                <div className="d-flex flex-row justify-content-between gap-2">
                  <img className={Style.sub} src={Vector10} />
                  <p>6</p>
                  <img className={Style.add} src={Vector11} />
                </div>
                <div className="d-flex">
                <p className={Style.addCart}>Add To Cart</p>
                <img className={Style.addCartIcon} src={Vector14}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
};
export default ProductList;
