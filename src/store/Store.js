import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../slices/CartSlice";

export const Store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});
