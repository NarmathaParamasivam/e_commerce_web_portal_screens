import { Style } from "@mui/icons-material";
import React from "react";
import Styles from "./Style.module.css";
import Vector19 from "../../assets/Images/Vector19.png";
import Vector20 from "../../assets/Images/Vector20.png";
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';

const RegisterForm = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className={`card d-flex flex-row justify-content-evenly py-3  ${Styles.formBody}`}>
            <div className={Styles.content}>
                <div className={`d-flex gap-3 ${Styles.content1}`}>
<h3 className={Styles.title}>Get </h3>
<h3 className={Styles.discount}>20% Discount </h3>
</div>
<h3 className={Styles.title}>On Your First</h3>
<h3 className={`mb-4 ${Styles.title}`} >Purchase</h3>
<div>
<h6 className={Styles.subTitle}>Just Sign Up & Register it now to become </h6><h6 className={Styles.subTitle}>member of Templates Jungle.</h6>
</div></div>
<div className={Styles.form}>
    <lable className={Styles.regLable}>Email address</lable>
    <div className="d-flex">
  
    <EmailIcon className={Styles.emailIcon}/>
    <input className={Styles.regInput} type="text" placeholder="Enter the emailId..." ></input></div>
    <lable className={Styles.regLable}>Password</lable>
    <div className="d-flex">
   
    <HttpsIcon className={Styles.passwordIcon}/>
    <input className={Styles.regInput} type="text" placeholder="Create a password..." ></input></div>
    <lable className={Styles.regLable}>Repeat Password</lable>
    <div className="d-flex">
   
    <HttpsIcon className={Styles.passwordIcon}/>
    <input className={Styles.regInput} type="text" placeholder="Repeat a password..." ></input></div>

    <button className={Styles.regBtn}>REGISTER IT NOW</button>


</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterForm
