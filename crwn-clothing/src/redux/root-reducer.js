import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducers";
import userReducer from "./user/user.reducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persisteConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default persistReducer(persisteConfig, rootReducer);
