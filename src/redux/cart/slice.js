import { createSlice } from "@reduxjs/toolkit";
import { addToCart, getCart } from "./operations";

// import { getProductById, getProducts } from "./operations";

const initialState = {
  cart: [],
  isLoading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  // reducers: {
  //   clearProds: (state) => {
  //     state.products = [];
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(getCart.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCart.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.cart = payload;
        // console.log(payload.data);
      })
      .addCase(getCart.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        // console.log("payload.data:", payload.data);
        state.cart = [...state.cart, payload];
      })
      .addCase(addToCart.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default cartSlice.reducer;
// export const { clearProds } = productsSlice.actions;
