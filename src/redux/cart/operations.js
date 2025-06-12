import { createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "../../utils/api";

export const getCart = createAsyncThunk("cart/getCart", async (_, thunkAPI) => {
  try {
    const { data } = await api.get("/cart");
    console.log("cart", data);
    return data;
  } catch (error) {
    throw thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ items }, thunkAPI) => {
    try {
      const { data } = await api.post("/cart", { items });
      // console.log(data.data.items);
      return data.data.items;
    } catch (error) {
      throw thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
