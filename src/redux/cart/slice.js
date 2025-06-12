import { createSlice } from "@reduxjs/toolkit";
import {
  addCart,
  getCart,
  placeOrder,
  removeProduct,
  updateCart,
} from "./operations";

const initialState = {
  cart: null,
  isLoading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCart.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCart.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.cart = payload;
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
        state.cart = payload;
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
        state.cart = payload;
      })
      .addCase(updateCart.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(removeProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(removeProduct.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.cart.items = state.cart.items.filter(
          (item) => item.productId !== payload
        );
      })
      .addCase(removeProduct.rejected, (state, { payload }) => {
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
