import { createStore } from "redux";
import wishlistReducer  from "./Wishlist/Reducer";


const store = createStore(wishlistReducer);

export default store;