import React from "react";
import MainLogo from "../../../../assets/Images/MainLogo.png";

import Fpicture from "../../../../assets/Images/fpicture.png";
import Twitter from "../../../../assets/Images/twitter.png";
import Picture from "../../../../assets/Images/Picture.png";
import camera from "../../../../assets/Images/camera.png";
import utube from "../../../../assets/Images/utube.png";
import Vector27 from "../../../../assets/Images/Vector27.png";
import NearMeIcon from '@mui/icons-material/NearMe';

import "bootstrap/dist/css/bootstrap.min.css";
import style from "./Style.module.css";

const Footer = () => {
  return (
    <div className="container mb-5">
      <div className="row align-items-center;">
        <div className="col-lg-3">
          <div className={style.mainLogo}>
            <img className={style.footerLogo} src={MainLogo} />
          </div>
          <div className={style.footerLogos}>
            <div className={`card ${style.faceBook}`}>
              <img className={style.fImg} src={Fpicture} />
            </div>
            <div className={`card ${style.twitterImg}`}>
              <img src={Twitter} />
            </div>
            <div className={`card ${style.twitterImg}`}>
              <img src={Picture} />
            </div>
            <div className={`card ${style.twitterImg}`}>
              <img className={style.footerImg} src={camera} />
            </div>
            <div className={`card ${style.twitterImg}`}>
              <img src={utube} />
            </div>
          </div>
        </div>
        <div className={`col-lg-2 ${style.quickLinks}`}>
          <p className={style.fHeader}>Quick Links</p>
          <div className={style.pages}>
            <a href="url">Home</a>
          </div>
          <div className={style.pages}>
            <a href="url">About Us</a>
          </div>
          <div className={style.pages}>
            <a href="url">Offers</a>
          </div>
          <div className={style.pages}>
            <a href="url">Service</a>
          </div>
          <div className={style.pages}>
            <a href="url">Contact Us</a>
          </div>
        </div>

        <div className={`col-lg-1 ${style.quickLinks}`}>
          <p className={style.aboutHeader}>About</p>
          <div className={style.pages}>
            <p className={style.aboutContent}>
              How It Work Our Packages Promotions Refer A Friend
            </p>
          </div>
        </div>

        <div className={`col-lg-2 ${style.quickLinks}`}>
          <p className={style.helpHeader}>Help Center</p>
          <div className={style.pages}>
            <p className={style.helpContent}>
              Payments Shipping Product Returns FAQs Checkout Other Issues
            </p>
          </div>
        </div>

        <div className={`col-lg-4 ${style.quickLinks}`}>
        <p className={style.newsHeader}>Our Newsletter</p>
          <div className={style.pages}>
            <p className={style.newsletterContent}>
            Subscribe to our newsletter to get updates about our grand offers.
            </p>
          </div>
          <div className={style.footerInput}>
          <input className={style.inputBox} type="email" placeholder="Enter your email-address" name="email"/>
          <button className={style.btnSend} type="submit">SEND <NearMeIcon className={style.sendIcon}/></button>
          </div>
        </div>

      </div>
    </div>
  );
};
export default Footer;
