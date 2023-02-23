import { GET_MY_WISHLIST } from "./ActionType.js"

export const getMyWishList = (product) => ({
  type: GET_MY_WISHLIST,
  payload: product,
});

// export const getMyWishListSuccessfull = (wishlist) => ({
//   type: GET_MY_WISHLIST_SUCCESSFUL,
//   payload: wishlist,
// });