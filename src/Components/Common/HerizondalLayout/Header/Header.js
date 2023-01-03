import React, { useState } from "react";
import style from "./Style.module.css";
import MainLogo from "../../../../assets/Images/MainLogo.png";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
//icons
import login from "../../../../assets/Images/login.png";
import gift from "../../../../assets/Images/Vector7.png";
import wishlists from "../../../../assets/Images/wishlists.png";
import cart1 from "../../../../assets/Images/cart1.png";
import search from "../../../../assets/Images/search.png";
import { makeStyles } from "@mui/material/styles";
//Mui Badge Icons
import Badge from "@mui/material/Badge";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { BorderColor, PaddingOutlined } from "@mui/icons-material";
// import gift from "../../../../assets/Images/Vector7.png";

const Header = () => {
  const [position, setPosition] = useState(0); //Badge
  const badgeStyle = {
    "& .MuiBadge-badge": {
      color: "black",
      backgroundColor: "#ffc43f",
      right: `${8}px`,
      "@media (min-width: 768px)": {
        right: `${10}px`,
      },
      width: 15,
      px: 1,
      height: 40,
      borderRadius: "50%",
      BorderColor: "white",
      // Padding:"25%",
      fontSize: 9,
      height: 15,
      minWidth: 15,
    },
  };
  const badgePosition = {
    "& .MuiBadge-badge": {
      right: `${7}px`,
      left: `${7}px`,
      color: "black",
      backgroundColor: "#ffc43f",
      //   right: `${7}px`,
      width: 15,
      height: 40,
      px: 1,
      borderRadius: "100%",
      BorderColor: "white",
      // Padding:"25%",
      fontSize: 9,
      height: 15,
      minWidth: 15,
      "@media (min-width: 768px)": {
        // right: `${11}px`,
      },
    },
  };

  return (
    <div className={`container-fulid mt-2 mb-0 ${style.mainContainer}`}>
      <div className="container ">
        <div className={`row mb-2 ${style.mainRow}`}>
          <div className={`col-lg-2 col-md-3 col-sm-2 ${style.mainImg}`}>
            <img className={style.logo} src={MainLogo} />
          </div>

          <div
            className={`col-lg-5 col-md-5 col-sm-5 align-self-center ml-4 ${style.inputbox}`}
          >
            <div className={style.dropdown}>
              <select>
                <option>All Catogories</option>
                <option>Oil and Ghee</option>
                <option>Bread and Sweets</option>
                <option>Fruits and Veg</option>
              </select>

              <input
                style={{ position: "relative" }}
                className="inputBox"
                type="search"
                name="search"
                placeholder="Search for more than 20,000 products"
              />

              <img
                className={style.search}
                alt="icon"
                // style={{
                //   position: "absolute",
                //   marginLeft: "-35px",
                //   top: "34px",
                // }}
                src={search}
              />
            </div>
          </div>

          <div
            className={`col-lg-2 col-md-2 col-sm-2 align-self-center mt-3 ${style.contact}`}
          >
            <div className={style.mobileNo}>
              <span className={style.contact1}> For support ?</span>
            </div>
            <div className={style.mobileNo}>
              <p className={style.contact2}> +980-34984089</p>
            </div>
          </div>

          <div className={`col-lg-2 col-md-2 col-sm-2 ${style.iconContent}`}>
            <div className={style.icons}>
              <div>
                <Badge className={style.Badge}>
                  <PersonRoundedIcon className={style.icon1} />
                </Badge>
              </div>
              <div className={style.heartBadge}>
                <Badge sx={badgeStyle} badgeContent={12}>
                  <FavoriteRoundedIcon color="black" className={style.icon2} />
                </Badge>
              </div>
              <div className={style.cartBadge}>
                <Badge sx={badgePosition} badgeContent={22}>
                  <ShoppingCartRoundedIcon
                    color="black"
                    className={style.icon3}
                  />
                </Badge>
                {/* <Badge badgeContent={22} color="warning">
               
                 
                  <ShoppingCartRoundedIcon className={style.icon3}/>
                </Badge> */}
              </div>
            </div>
          </div>
          <div
            className={`col-lg-1 col-md-0 col-sm-1 align-self-center ${style.cartContent}`}
          >
            <p className={style.text1}>Your Cart</p>
            <p className={style.text2}> $1260.00</p>
          </div>
        </div>
      </div>
      <hr className={style.line}></hr>
      {/* <Navbar> */}
      <div className="container">
        <div className={`row mt-4 ${style.rowContent}`}>
          <div className={`col-lg-2 col-md-3 col-sm-2 ${style.dropDown}`}>
            <select className={style.department}>
              <option>Shop By Departments</option>
              <option>Oil and Ghee</option>
              <option>Bread and Sweets</option>
              <option>Fruits and Veg</option>
            </select>
          </div>
          {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
          <div className={`col-lg-5 col-md-7 col-sm-5 ${style.pages}`}>
            <div>
              <button className={style.btnStyle}>Home</button>
            </div>
            <div>
              <button className={style.btnStyle}>Shop</button>
            </div>
            <div>
              <button className={style.btnStyle}>Page</button>
            </div>
            <div>
              <button className={style.btnStyle}>Service</button>
            </div>
            <div>
              <button className={style.btnStyle}>Blog</button>
            </div>
            <div>
              <button className={style.btnStyle}>Contact</button>
            </div>

            <div>
              <button className={style.btnStyle}>Offers</button>
            </div>
          </div>

          <div
            className={`col-lg-2 col-md-0 col-sm-2 ${style.columnSpace}`}
          ></div>
          <div
            className={`col-lg-3 col-md-2 col-sm-3 d-flex mt-1 ${style.couponCode}`}
          >
            <img className={style.gift} src={gift} />
            <p className={style.textLine}>Get Your Coupon Code</p>
          </div>
        </div>
      </div>
      {/* </Navbar> */}
    </div>
  );
};
export default Header;
