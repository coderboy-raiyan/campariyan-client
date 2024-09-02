import { combineReducers } from "@reduxjs/toolkit";

import baseApi from "../api/baseApi";
import authSlice from "./auth/authSlice";
import cartSlice from "./cart/cartSlice";
import productSlice from "./product/productSlice";

const rootReducers = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  products: productSlice,
  auth: authSlice,
  cart: cartSlice,
});

export default rootReducers;
