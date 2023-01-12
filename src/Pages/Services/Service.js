import React from "react";
import Style from "./Style.module.css";
import Group from "../../assets/Images/Group.png";
import Group4 from "../../assets/Images/Group4.png";
import Group1 from "../../assets/Images/Group1.png";
import Group2 from "../../assets/Images/Group2.png";
import Group3 from "../../assets/Images/Group3.png";

const Service = () => {
  return (
    <div className="container mb-3">
      <div className="row">
        <div className={Style.mainContainer}>
          <div className={Style.delivery}>
            <div className={Style.iconHeading}>
              <img clasName={Style.serviceIcon} src={Group} />

              <h5 className={Style.title}>Free Delivery</h5>
            </div>
            <p className={Style.content}>
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipi Elit.
            </p>
          </div>
          <div className={Style.delivery}>
            <div className={Style.iconHeading}>
              <img clasName={Style.serviceIcon} src={Group4} />
              <h5 className={Style.title}>100% Secure Payment</h5>
            </div>
            <p className={Style.content}>
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipi Elit.
            </p>
          </div>
          <div className={Style.delivery}>
            <div className={Style.iconHeading}>
              <img clasName={Style.servicIicon} src={Group1} />
              <h5 className={Style.title}>Quality Guarantee</h5>
            </div>
            <p className={Style.content}>
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipi Elit.
            </p>
          </div>
          <div className={Style.delivery}>
            <div className={Style.iconHeading}>
              <img clasName={Style.serviceIcon} src={Group2} />
              <h5 className={Style.title}>Guaranteed Savings</h5>
            </div>
            <p className={Style.content}>
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipi Elit.
            </p>
          </div>
          <div className={Style.delivery}>
            <div className={Style.iconHeading}>
              <img clasName={Style.serviceIcon} src={Group3} />
              <h5 className={Style.title}>Daily Offers</h5>
            </div>
            <p className={Style.content}>
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipi Elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;
