import React from "react";
import Styles from "./Style.module.css";
import phone from "../../assets/Images/phone.png";
import { Style } from "@mui/icons-material";
import GooglePay from "../../assets/Images/GooglePay.png";
import Applelogo from "../../assets/Images/Applelogo.png";

const MobileBanner = () => {
 
  return (
    <div className={`container ${Styles.mainContainer}`}>
      <div className="row">

      <img className={Styles.mobileBanner} src={phone} />
        <div className={`card ${Styles.cardDesign}`}>
          <div className={` ${Styles.cardText}`}>
            <h4 className={Styles.cardTitle}>Shop Faster With Foodmart App</h4>
            <p className={Styles.textContent}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
              sed ptibus liberolectus nonet psryroin. Amet sed lorem posuere sit 
              iaculis amet, ac urna. Adipiscing fames semper erat ac in
              suspendisse iaculis. Amet blandit tortor praesent ante vitae. A,
              enim pretiummi senectus magna. Sagittis sed ptibus liberolectus
              non et psryroin.
             
            </p>
            
            <div className={` ${Styles.gpayCard}`}>
              <div className={`card ${Styles.googlePay}`}>
            <div className="d-flex gap-2">
            
              <img className={Styles.gpayLogo}src={GooglePay}/>
              <div className="d-flex flex-column">
            <span className={Styles.getGpay}> GET IT ON</span>
            <span className={Styles.gPay}> Google Pay</span>
            </div>
            </div>
            </div>
<div className={`card ${Styles.googlePay}`}>
            <div className="d-flex gap-2">
            
            <img className={Styles.gpayLogo}src={Applelogo}/>
            <div className="d-flex flex-column">
          <span className={Styles.getGpay}> Download on the</span>
          <span className={Styles.gPay}> App Store</span>
          </div>
          </div>
          </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};
export default MobileBanner;
