import { createSlice } from "@reduxjs/toolkit";
import { addCart, getCart, placeOrder, updateCart } from "./operations";

const initialState = {
  cart: null,
  // cartId: "",
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
      .addCase(addCart.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addCart.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        // console.log("payload.data:", payload.data);
        state.cart = payload;
        // state.cartId = payload._id;
      })
      .addCase(addCart.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(updateCart.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateCart.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        // console.log("payload.data:", payload.data);
        state.cart = payload;
        // state.cartId = payload._id;
      })
      .addCase(updateCart.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(placeOrder.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(placeOrder.fulfilled, () => {
        return initialState;
      })
      .addCase(placeOrder.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default cartSlice.reducer;
// export const { clearProds } = productsSlice.actions;
