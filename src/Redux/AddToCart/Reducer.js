import { ADD_TO_CART } from "./ActionType.js";

const initialState = {
    addcart: 0,
};
const addTocartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
    return{
        ...state,addcart:action.payload,
    }
    default:
      return state;
  }
};
export default addTocartReducer;
