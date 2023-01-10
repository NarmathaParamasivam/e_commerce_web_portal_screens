import React from "react";
import Styles from "./Style.module.css";
import Rectangle94 from "../../assets/Images/Rectangle94.png";
import Rectangle117 from "../../assets/Images/Rectangle117.png";
import Rectangle7 from "../../assets/Images/Rectangle7.png";

const LatestArticles = () => {
  return (
    <div className="container mt-5 mb-5">
      <h4 className={Styles.mainTitle}>Our Latest Articles</h4>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className={`card ${Styles.cardStyle}`}>
            <div className={`card p-3 ${Styles.imgcardStyle}`}>
            <img className="card-img-top" src={Rectangle94} />
            </div>
            <div className="card-body">
              <h4 className={`card-title ${Styles.title}`}>
                Right Way To Preserve The Fruits & Other Organics
              </h4>
              <p className={`card-text ${Styles.subTitle}`}>
                Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet
                eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit
                neque dolor morbi...
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className={`card ${Styles.cardStyle}`}>
            <div className={`card p-3 ${Styles.imgcardStyle}`}>
            <img className="card-img-top" src={Rectangle117} />
            </div>
            <div className="card-body">
              <h4 className={`card-title ${Styles.title}`}>
              How To Maintain The Freshness Of Vegetables
              </h4>
              <p className={`card-text ${Styles.subTitle}`}>
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipi Elit. Aliquet
                Eleifend Viverra Enim Tincidunt Donec Quam. A in Arcu, Hendrerit
                Neque Dolor Morbi...
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className={`card ${Styles.cardStyle}`}>
            <div className={`card p-3 ${Styles.imgcardStyle}`}>
            <img className="card-img-top" src={Rectangle7} />
            </div>
            <div className="card-body">
              <h4 className={`card-title ${Styles.title}`}>
              Right Way To Preserve The Fruits & Other Organics
              </h4>
              <p className={`card-text ${Styles.subTitle}`}>
                Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet
                eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit
                neque dolor morbi...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LatestArticles;
