import { createSlice } from "@reduxjs/toolkit";

import { getNearest } from "./operations";

const initialState = {
  nearestStores: [],
  isLoading: false,
  error: null,
};

const nearestStoresSlice = createSlice({
  name: "nearestStores",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getNearest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNearest.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.nearestShops = payload.data;
        console.log(payload.data);
      })
      .addCase(getNearest.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default nearestStoresSlice.reducer;
