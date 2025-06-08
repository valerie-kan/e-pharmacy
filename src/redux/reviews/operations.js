import { createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "../../utils/api";

export const getReviews = createAsyncThunk(
  "reviews/getReviews",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get("/customer-reviews");
      return data;
    } catch (error) {
      throw thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
