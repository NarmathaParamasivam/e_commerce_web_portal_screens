import React from "react";
import Style from "./Style.module.css";
import Group from "../../assets/Images/Group.png";
import Group from "../../assets/Images/Group.png";
import Group from "../../assets/Images/Group.png";
import Group from "../../assets/Images/Group.png";
import Group from "../../assets/Images/Group.png";


const Service = () =>{

  return(
    <div className="container">
      <div className="row">
        <div className={Style.mainContainer}>
        <div className={Style.delivery}>
{/* <img src={}/> */}
<h5>Free delivery</h5>
<p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
        </div>
        <div className={Style.delivery}>
        {/* <img src={}/> */}
<h5>100% secure payment</h5>
<p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
        </div>
        <div className={Style.delivery}>
        {/* <img src={}/> */}
<h5>Quality guarantee</h5>
<p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
        </div>
        <div className={Style.delivery}>
        {/* <img src={}/> */}
<h5>guaranteed savings</h5>
<p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
        </div>
        <div className={Style.delivery}>
        {/* <img src={}/> */}
<h5>Daily offers</h5>
<p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
        </div>



      </div>
      </div>
    </div>
  )
}
export default Service