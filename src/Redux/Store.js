import { createStore } from "redux";
import wishlistReducer  from "./Wishlist/Reducer";
import addTocartReducer from "./AddToCart/Reducer";
import Reducers from "./Reducer";


const store = createStore(Reducers);


export default store;