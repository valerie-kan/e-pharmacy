import { createSlice } from "@reduxjs/toolkit";
import { addToCart } from "./operations";

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
      // .addCase(getProducts.pending, (state) => {
      //   state.isLoading = true;
      //   state.error = null;
      // })
      // .addCase(getProducts.fulfilled, (state, { payload }) => {
      //   state.isLoading = false;
      //   state.products = payload.data.items;
      //   // console.log(payload.data);
      //   state.totalPages = payload.data.totalPages;
      // })
      // .addCase(getProducts.rejected, (state, { payload }) => {
      //   state.isLoading = false;
      //   state.error = payload;
      // })
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        // console.log("payload.data:", payload.data);
        state.cart = payload;
      })
      .addCase(addToCart.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default cartSlice.reducer;
// export const { clearProds } = productsSlice.actions;
