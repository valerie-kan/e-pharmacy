import { createSlice } from "@reduxjs/toolkit";

import { getAllStores, getNearest } from "./operations";

const initialState = {
  stores: [],
  nearestStores: [],
  isLoading: false,
  error: null,
};

const storesSlice = createSlice({
  name: "stores",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getNearest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNearest.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.nearestStores = payload.data;
      })
      .addCase(getNearest.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getAllStores.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllStores.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.stores = payload.data;
      })
      .addCase(getAllStores.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default storesSlice.reducer;
