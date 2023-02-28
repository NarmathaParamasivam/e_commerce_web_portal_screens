import React, { useState } from "react";
import Style from "./Style.module.css";

const PeopleFeedBack = () => {
  const feedBack = [
    {
      feedBack: "Blue Diamon Almonds",
    },
    {
      feedBack: "Angie’s Boomchickapop Corn",
    },
    {
      feedBack: "Salty kettle Corn",
    },
    {
      feedBack: "Chobani Greek Yogurt",
    },
    {
      feedBack: "Sweet Vanilla Yogurt",
    },
    {
      feedBack: "Foster Farms Takeout Crispy wings",
    },
    {
      feedBack: "Warrior Blend Organic",
    },
    {
      feedBack: "Encore Seafoods Stuffed Alaskan Salmon",
    },
    {
      feedBack: "Chao Cheese Creamy",
    },
    {
      feedBack: "Chicken Meatballs",
    },
    {
      feedBack: "Werther’s Caramel hard candies",
    },
    {
      feedBack: "Mate Coffee Creamer",
    },
    {
      feedBack: "Pasture Raised chicken eggs",
    },
    {
      feedBack: "Tree Top Fruit water",
    },
    {
      feedBack: "Natural Vanilla Light Roast Coffee",
    },
    {
      feedBack: "Sweet Vanilla Essence Yogurt",
    },
  ];
  const [peopleFeedBack, setPeopleFeedBack] = useState(feedBack);
  return (
    <div className={`container ${Style.mainContainer}`}>
      <h4 className={Style.title}>People Are Also Looking For</h4>
      <div className="row mb-3">
        <div className="d-flex flex-row justify-contant-between gap-2 flex-wrap">
          {peopleFeedBack.map((data, i) => {
            return (
              <div className={`card ${Style.cardStyle}`}>
                <h6>{data.feedBack}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default PeopleFeedBack;
