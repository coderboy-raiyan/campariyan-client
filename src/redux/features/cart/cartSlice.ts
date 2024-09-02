import { TCart } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: { cart: TCart[]; totalPrice: number } = {
  cart: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = state.cart.find(
        ({ _id }) => _id === action?.payload?._id
      );
      if (product) {
        product.quantity = product.quantity + 1;
        return;
      }
      state.cart.push(action?.payload);
    },
    decreaseQuantity: (state, action) => {
      const product = state.cart.find(({ _id }) => _id === action?.payload);
      if (product) {
        if (product?.quantity === 1) {
          state.cart = state.cart.filter(
            (product) => product._id !== action?.payload
          );

          return;
        }
        product.quantity = product?.quantity - 1;
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product._id !== action?.payload?._id
      );
    },
    updateTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
  },
});

export const { decreaseQuantity, addToCart, removeFromCart, updateTotalPrice } =
  cartSlice.actions;
export default cartSlice.reducer;
