import { ADD_TO_CART } from "./ActionType";

export const getaddtocart = (productItem) =>({
  type: ADD_TO_CART,
  payload: productItem
});