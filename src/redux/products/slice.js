import { createSlice } from "@reduxjs/toolkit";

import { getProductById, getProducts } from "./operations";

const initialState = {
  products: [],
  selectedProduct: {},
  totalPages: null,
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearProds: (state) => {
      state.products = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.products = payload.data.items;
        // console.log(payload.data);
        state.totalPages = payload.data.totalPages;
      })
      .addCase(getProducts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getProductById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProductById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        // console.log("payload.data:", payload.data);
        state.selectedProduct = payload.data;
      })
      .addCase(getProductById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default productsSlice.reducer;
export const { clearProds } = productsSlice.actions;
