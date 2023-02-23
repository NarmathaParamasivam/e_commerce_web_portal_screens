import { combineReducers } from 'redux'
import wishlistReducer from "./Wishlist/Reducer";
import addTocartReducer from "./AddToCart/Reducer"
const Reducers = combineReducers({
  wishlistReducer,
  addTocartReducer
})

export default Reducers;