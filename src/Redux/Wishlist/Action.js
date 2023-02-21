import {GET_MY_WISHLIST,GET_MY_WISHLIST_SUCCESSFUL} from "./ActionType.js"

export const getMyWishList = (customerId) => ({
  type: GET_MY_WISHLIST,
  payload: customerId,
});

// export const getMyWishListSuccessfull = (wishlist) => ({
//   type: GET_MY_WISHLIST_SUCCESSFUL,
//   payload: wishlist,
// });