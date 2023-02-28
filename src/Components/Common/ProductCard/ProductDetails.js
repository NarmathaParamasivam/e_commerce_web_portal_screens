import React, { useEffect, useState } from "react";
import Styles from "./Style.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import topTrendingProducts from "../../../Config/ProductConfig.js";
import { getMyWishList } from "../../../Redux/Wishlist/Action";
import { getaddtocart } from "../../../Redux/AddToCart/Action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const ProductDetails = (props) => {
  const { Data } = props;

  const [heart, setHeart] = useState(false);
  const [isheart, setIsheart] = useState(false);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const wishlistItems = useSelector(
    (state) => state.wishlistReducer.numOfItems
  );
  const addTocartCount = useSelector((state) => state.addTocartReducer.addcart);

  const handleClick = () => {
    setHeart(!heart);
    setIsheart(!isheart);
    dispatch(getMyWishList(wishlistItems + 1));
  };
  const increament = () => {
    setCount(count + 1);
  };
  const decreament = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="row mt-3 mb-3">
      <div className={Styles.productsDetails}>
        <div className={`card ${Styles.cardStyle}`}>
          <div className={`card ${Styles.cardImg}`}>
            <div
              className={`p-2 ${Styles.disCount}`}
              style={{
                justifyContent: Data?.discountPercentage
                  ? "space-between"
                  : "flex-end",
              }}
            >
              {Data?.discountPercentage ? (
                <p className={Styles.discountCard}>{Data.DiscountPercentage}</p>
              ) : null}
              {isheart ? (
                <FavoriteIcon
                  className={Styles.heartIcon}
                  onClick={() => handleClick()}
                  style={{ color: heart ? "red" : "black" }}
                />
              ) : (
                <FavoriteBorderIcon
                  className={Styles.heartIcon}
                  onClick={() => handleClick()}
                />
              )}
            </div>
            <img className={Styles.product} src={Data.productImage} />
          </div>
          <div className="d-flex flex-column">
            <p className={Styles.cardPrice}>{Data.title}</p>
            <div className="d-flex flex-row gap-2 align-items-center">
              <p className={Styles.unitText}>{Data.unit}</p>
              <div className={`d-flex flex-row gap-1 ${Styles.starContent}`}>
                <img className={Styles.star} src={Data.image} />
                <p className={`mb-0 ${Styles.fixedPoint}`}>{Data.point}</p>
              </div>
            </div>
            <div className={Styles.discountValue}>
              {Data?.amount ? (
                <del className={Styles.value}>
                  <CurrencyRupeeIcon className={Styles.rupee} />
                  {Data.amount}
                </del>
              ) : (
                ""
              )}
              <p className={Styles.price}>
                <CurrencyRupeeIcon className={Styles.rupee} />
                {Data.discountAmount}
              </p>
            </div>
            <p className={Styles.sold}>{Data.sold}</p>

            <div className="d-flex flex-row justify-content-between">
              <div
                className={`d-flex flex-row justify-content-between align-items-center ${Styles.addSub}`}
              >
                <img
                  className={Styles.sub}
                  src={Data.subImage}
                  onClick={() => {
                    decreament();
                  }}
                />
                <p className="mb-0">{count}</p>
                <img
                  className={Styles.add}
                  src={Data.addImage}
                  onClick={() => {
                    increament();
                  }}
                />
              </div>
              <div
                className="d-flex align-items-center"
                onClick={() => {
                  dispatch(getaddtocart(addTocartCount + 1));
                }}
              >
                <p className={Styles.addCart}>{Data.addTocart}</p>
                <ShoppingCartIcon className={Styles.addCartIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
