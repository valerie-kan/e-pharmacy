import { createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "../../utils/api";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async ({ page = 1, perPage, filters = {} }, thunkAPI) => {
    try {
      const { data } = await api.get("/products", {
        params: { page, perPage, ...filters },
      });
      return data;
    } catch (error) {
      throw thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
