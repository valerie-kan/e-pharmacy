import { createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "../../utils/api";

export const getNearest = createAsyncThunk(
  "nearestShops/getNearest",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get("/stores/nearest");
      return data;
    } catch (error) {
      throw thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
