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
import SearchIcon from '@mui/icons-material/Search';
import Badge from "@mui/material/Badge";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { BorderColor, PaddingOutlined } from "@mui/icons-material";
//import { useMediaQuery } from "react-responsive";

const Header = () => {
  const [position, setPosition] = useState(0); //Badge



  // const isMobile = useMediaPredicate("(minWidth: 767px)");
  // const laptopView =  useMediaPredicate("(maxWidth: 1044px)");
  const badgeStyle = {
    "& .MuiBadge-badge": {  
      color: "black",
      backgroundColor: "#ffc43f",
      right: `${8}px`,
      "@media (min-width: 768px)": {
        right: `${3}px`,
        top: `${1}px`,
      },
      width: 15,
      px: 1,
      height: 40,
      borderRadius: "50%",
      BorderColor: "white",
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
      width: 15,
      height: 40,
      px: 1,
      borderRadius: "100%",
      BorderColor: "white",
      fontSize: 9,
      height: 15,
      minWidth: 15,
      "@media (min-width: 768px)": {
        top: `${2}px`,
      },
    },
  };

  return (
    <div className={`container-fulid mt-3 mb-0 ${style.mainContainer}`}>
     
      <div className="container ">
        <div className={`row w-100 ${style.mainRow}`}>
          <div className={`col-lg-2  ${style.mainImg}`}>
            <img className={style.logo} src={MainLogo} />
          </div>

          <div
            className={`col-lg-6 align-self-center  ${style.inputbox}`}
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
                className={style.inputBox}
                type="search"
                name="search"
                placeholder="Search for more than 20,000 products"
              />
              
<SearchIcon className={style.search}/>
              {/* <img
                className={style.search}
                alt="icon"
                src={search}
              /> */}
            </div>
          </div>

          <div
            className={`col-lg-4  align-self-center ${style.contact}`}
          >
            <div className="d-flex flex-column justify-content-center;">
            <div className={style.mobileNo}>
              <span className={style.contact1}> For support ?</span>
            </div>
            <div className={style.mobileNo}>
              <p className={style.contact2}> +980-34984089</p>
            </div>
            </div>

          <div className={`${style.iconContent}`}>
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
              </div>
            </div>
         
          <div
            className={` align-self-center ${style.cartContent}`}
          >
            <p className={style.text1}>Your Cart</p>
            <p className={style.text2}> $1260.00</p>
          </div>
          </div>
          </div>
        </div>
      </div>
      
      <hr className={style.line}></hr>
      {/* <Navbar> */}
     
      <div className="container">
        <div className={`row w-100 ${style.rowContent}`}>
          
          <div className={`col-lg-3 align-self-center topnav ${style.dropDown}`} id="myTopnav">
            <select className={style.department}>
              <option>Shop By Departments</option>
              <option>Oil and Ghee</option>
              <option>Bread and Sweets</option>
              <option>Fruits and Veg</option>
            </select>
          </div>
          <div className={`col-lg-6  ${style.pages}`}>
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
              <button className={style.btnStyle}>Services</button>
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
            className={`col-lg-3 d-flex align-items-center ${style.couponCode}`}
          >
            <img className={style.gift} src={gift} />
            <p className={style.textLine}>Get Your Coupon Code</p>
          </div>
        </div>
      </div>

    </div>
  );
};
export default Header;
