import React, { useState } from "react";
import Style from "./Style.module.css";
import Group from "../../assets/Images/Group.png";
import Group4 from "../../assets/Images/Group4.png";
import Group1 from "../../assets/Images/Group1.png";
import Group2 from "../../assets/Images/Group2.png";
import Group3 from "../../assets/Images/Group3.png";

const Service = () => {
  const Details = [
    {
      Image: require("../../assets/Images/Group.png"),
      Title: "Free Delivery",
      Discription: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipi Elit.",
    },
    {
      Image: require("../../assets/Images/Group4.png"),
      Title: "100% Secure Payment",
      Discription: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipi Elit.",
    },
    {
      Image: require("../../assets/Images/Group1.png"),
      Title: "Quality Guarantee",
      Discription: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipi Elit.",
    },
    {
      Image: require("../../assets/Images/Group2.png"),
      Title: "Guaranteed Savings",
      Discription: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipi Elit.",
    },
    {
      Image: require("../../assets/Images/Group3.png"),
      Title: "Daily Offers",
      Discription: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipi Elit.",
    },
  ];
  const [details, setDetails] = useState(Details);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className={Style.mainContainer}>
          {details.map((data, i) => {
            return (
              <div key={i} className={Style.delivery}>
                <div className={Style.iconHeading}>
                  <img clasName={Style.serviceIcon} src={data.Image} />
                </div>
                <div className={Style.details}>
                  <h5 className={Style.title}>{data.Title}</h5>
                  <p className={Style.content}>{data.Discription}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Service;
