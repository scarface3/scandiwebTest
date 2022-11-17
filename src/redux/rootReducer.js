import cartSlice from "./cart/cartSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	/* your app’s top-level reducers */
	cart: cartSlice,
});

export default rootReducer;