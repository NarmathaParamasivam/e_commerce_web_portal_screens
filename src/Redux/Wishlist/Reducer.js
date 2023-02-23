import { GET_MY_WISHLIST } from "./ActionType.js";

const initialState = {
  numOfItems: 0,
};
const wishlistReducer = (state = initialState, action) => {
  switch (action.type){
    case GET_MY_WISHLIST:
    return{
        ...state,numOfItems:action.payload,
    }
    default:
      return state;
  }
};
export default wishlistReducer;
