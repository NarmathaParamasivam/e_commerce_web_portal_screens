import React, { useState } from "react";
import Styles from "./Style.module.css";
import Rectangle94 from "../../assets/Images/Rectangle94.png";
import veg2 from "../../assets/Images/veg2.png";
import Rectangle7 from "../../assets/Images/Rectangle7.png";
import Vector8 from "../../assets/Images/Vector8.png";
import Vector24 from "../../assets/Images/Vector24.png";
import Vector25 from "../../assets/Images/Vector25.png";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

const LatestArticles = () => {
  const LatestArticles = [
    {
      ProductImage: require("../../assets/Images/Rectangle94.png"),
      DateImage: require("../../assets/Images/Vector24.png"),
      ClockImg: require("../../assets/Images/Vector25.png"),
      Date: "12 Jan, 2021",
      Time: "15 Min",
      Title: "Right Way To Preserve The Fruits & Other Organics",
      Discription:
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipi Elit. Aliquet Eleifend Viverra Enim Tincidunt Donec Quam. A in Arcu, Hendrerit Neque Dolor Morbi...",
    },

    {
      ProductImage: require("../../assets/Images/veg2.png"),
      DateImage: require("../../assets/Images/Vector24.png"),
      ClockImg: require("../../assets/Images/Vector25.png"),
      Date: "12 Jan, 2021",
      Time: "15 Min",
      Title: "How To Maintain The Freshness Of Vegetables",
      Discription:
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipi Elit. Aliquet Eleifend Viverra Enim Tincidunt Donec Quam. A in Arcu, Hendrerit Neque Dolor Morbi...",
    },

    {
      ProductImage: require("../../assets/Images/Rectangle7.png"),
      DateImage: require("../../assets/Images/Vector24.png"),
      ClockImg: require("../../assets/Images/Vector25.png"),
      Date: "12 Jan, 2021",
      Time: "15 Min",
      Title: "Right Way To Preserve The Fruits & Other Organics",
      Discription:
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipi Elit. Aliquet Eleifend Viverra Enim Tincidunt Donec Quam. A in Arcu, Hendrerit Neque Dolor Morbi...",
    },
  ];
  const [articles, setArticles] = useState(LatestArticles);
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mt-5 mb-5">
        <h4 className={Styles.mainTitle}>Our Latest Articles</h4>
        <div className={Styles.viewAll}>
          <h6 className={Styles.carosuelTitle}>View All Articles</h6>
          <img className={Styles.arrow} src={Vector8} />
        </div>
      </div>
      <div className="row">
        {articles.map((data, i) => {
          return (
            <div key={i} className={"col-lg-4 col-md-6 col-sm-12"}>
              <div className={`card ${Styles.cardStyle}`}>
                <div className={`card p-3 ${Styles.imgcardStyle}`}>
                  <img className="card-img-top" src={data.ProductImage} />
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-start gap-3 mb-3">
                    <div className="d-flex align-item-center gap-2">
                      <img className={Styles.dateImg} src={data.DateImage} />

                      <p className={Styles.date}>{data.Date}</p>
                    </div>
                    <div className="d-flex align-item-center gap-2">
                      <img className={Styles.clockImg} src={data.ClockImg} />

                      <p className={Styles.minit}>{data.Time}</p>
                    </div>
                  </div>
                  <h4 className={`card-title ${Styles.title}`}>{data.Title}</h4>
                  <p className={`card-text ${Styles.subTitle}`}>
                    {data.Discription}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default LatestArticles;
