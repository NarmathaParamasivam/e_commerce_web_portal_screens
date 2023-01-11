import React from "react";
import Styles from "./Style.module.css";
import Rectangle94 from "../../assets/Images/Rectangle94.png";
import Rectangle117 from "../../assets/Images/Rectangle117.png";
import Rectangle7 from "../../assets/Images/Rectangle7.png";
import Vector8 from "../../assets/Images/Vector8.png";
import Vector24 from "../../assets/Images/Vector24.png";
import Vector25 from "../../assets/Images/Vector25.png";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
const LatestArticles = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="d-flex justify-content-between align-item-center mt-5 mb-5">
        <h4 className={Styles.mainTitle}>Our Latest Articles</h4>
        <div className={Styles.viewAll}>
          <h6 className={Styles.carosuelTitle}>View All Articles</h6>
          <img className={Styles.arrow} src={Vector8} />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className={`card ${Styles.cardStyle}`}>
            <div className={`card p-3 ${Styles.imgcardStyle}`}>
              <img className="card-img-top" src={Rectangle94} />
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-start gap-3 mb-3">
                <div className="d-flex align-item-center gap-2">
                  <img className={Styles.dateImg} src={Vector24} />

                  <p className={Styles.date}>12 Jan, 2021</p>
                </div>
                <div className="d-flex align-item-center gap-2">
                  <img className={Styles.clockImg} src={Vector25} />
                  {/* <div className={Styles.dateImg}><WatchLaterIcon /></div> */}
                  <p className={Styles.minit}>15 Min</p>
                </div>
              </div>
              <h4 className={`card-title ${Styles.title}`}>
                Right Way To Preserve The Fruits & Other Organics
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
              <img className="card-img-top" src={Rectangle117} />
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-start gap-3 mb-3">
                <div className="d-flex align-item-center gap-2">
                  <img className={Styles.dateImg} src={Vector24} />

                  <p className={Styles.date}>12 Jan, 2021</p>
                </div>
                <div className="d-flex align-item-center gap-2">
                  <img className={Styles.clockImg} src={Vector25} />
                  {/* <div className={Styles.dateImg}><WatchLaterIcon /></div> */}
                  <p className={Styles.minit}>15 Min</p>
                </div>
              </div>
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
              <div className="d-flex justify-content-start gap-3 mb-3">
                <div className="d-flex align-item-center gap-2">
                  <img className={Styles.dateImg} src={Vector24} />

                  <p className={Styles.date}>12 Jan, 2021</p>
                </div>
                <div className="d-flex align-item-center gap-2">
                  <img className={Styles.clockImg} src={Vector25} />
                  {/* <div className={Styles.dateImg}><WatchLaterIcon /></div> */}
                  <p className={Styles.minit}>15 Min</p>
                </div>
              </div>
              <h4 className={`card-title ${Styles.title}`}>
                Right Way To Preserve The Fruits & Other Organics
              </h4>
              <p className={`card-text ${Styles.subTitle}`}>
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipi Elit. Aliquet
                Eleifend Viverra Enim Tincidunt Donec Quam. A in Arcu, Hendrerit
                Neque Dolor Morbi...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LatestArticles;
