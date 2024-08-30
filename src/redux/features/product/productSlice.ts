import { TProduct } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: { products: TProduct[] } = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { addProducts } = productSlice.actions;

export default productSlice.reducer;
