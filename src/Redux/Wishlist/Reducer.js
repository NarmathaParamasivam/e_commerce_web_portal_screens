import {GET_MY_WISHLIST,GET_MY_WISHLIST_SUCCESSFUL} from "./ActionType.js" 


const initialState = {
  numOfItems: 0,
};
 const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_WISHLIST:
      return {
        ...state,
        numOfItems: state.numOfItems + 1,
      };

    // case GET_MY_WISHLIST_SUCCESSFUL:
      return {
        ...state,
        numOfItems: state.numOfItems - 1,
      };
    default:
      return state;
  }
};
export default wishlistReducer;