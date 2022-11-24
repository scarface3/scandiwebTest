import cartSlice from "./cart/cartSlice";
import { combineReducers } from "redux";
import currencySlice from "./currency/currencySlice";
import productsSlice from "./products/productsSlice";

const rootReducer = combineReducers({
	/* your app’s top-level reducers */
	cart: cartSlice,
	product: productsSlice,
	currency: currencySlice,
});

export default rootReducer;