import React from "react";
import Style from "./Style.module.css";

const PeopleFeedBack = () =>{

  return(
    <div className={`container ${Style.mainContainer}`}>
      <h4 className={Style.title}>People Are Also Looking For</h4>
      <div className="row mb-3">
        <div className="d-flex flex-row justify-contant-between gap-2">
<div className={`card ${Style.cardStyle}`}>
  <h6>Blue Diamon Almonds</h6>
</div>
<div className={`card ${Style.cardStyle}`}>
<h6>Angie’s Boomchickapop Corn</h6>
</div>
<div className={`card ${Style.cardStyle}`}>
<h6>Salty kettle Corn</h6>
</div>
<div className={`card ${Style.cardStyle}`}>
<h6>Chobani Greek Yogurt</h6>
</div>
<div className={`card ${Style.cardStyle}`}>
<h6>Sweet Vanilla Yogurt</h6>
</div>
<div className={`card ${Style.cardStyle}`}>
<h6>Foster Farms Takeout Crispy wings</h6>
</div>
<div className={`card ${Style.cardStyle}`}>
<h6>Warrior Blend Organic</h6>
</div>
</div>

      </div>
      <div className="row mb-3">
        <div className="d-flex flex-row gap-2">
      <div className={`card ${Style.cardStyle}`}><h6>Encore Seafoods Stuffed Alaskan Salmon</h6></div>
      <div className={`card ${Style.cardStyle}`}><h6>Chao Cheese Creamy</h6></div>
      <div className={`card ${Style.cardStyle}`}><h6>Chicken Meatballs</h6></div>
      <div className={`card ${Style.cardStyle}`}><h6>Werther’s Caramel hard candies</h6></div>
      <div className={`card ${Style.cardStyle}`}><h6>Mate Coffee Creamer</h6></div>
      <div className={`card ${Style.cardStyle}`}><h6>Pasture Raised chicken eggs</h6></div>
      </div>
      </div>
      <div className="row mb-3">
        <div className="d-flex flex-row gap-2">
      <div className={`card ${Style.cardStyle}`}><h6>Tree Top Fruit water</h6></div>
      <div className={`card ${Style.cardStyle}`}><h6>Natural Vanilla Light Roast Coffee</h6></div>
      <div className={`card ${Style.cardStyle}`}><h6>Sweet Vanilla Essence Yogurt</h6></div>
      </div> 
      </div>
   </div>

  )
}
export default PeopleFeedBack