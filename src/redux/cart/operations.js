import { createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "../../utils/api";

export const getCart = createAsyncThunk("cart/getCart", async (_, thunkAPI) => {
  try {
    const { data } = await api.get("/cart");
    console.log("getcart", data.data);
    return data.data;
  } catch (error) {
    throw thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

export const addCart = createAsyncThunk(
  "cart/addCart",
  async ({ productId, quantity = 1 }, thunkAPI) => {
    try {
      const { data } = await api.post("/cart", { productId, quantity });
      console.log("addCart:", data.data);
      return data.data;
    } catch (error) {
      throw thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const updateCart = createAsyncThunk(
  "cart/updateCart",
  async ({ cartId, productId, quantity = 1 }, thunkAPI) => {
    try {
      const { data } = await api.put(`/cart/update/${cartId}/${productId}`, {
        quantity,
      });
      console.log("updateCart:", data.data);
      return data.data;
    } catch (error) {
      throw thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const placeOrder = createAsyncThunk(
  "cart/placeOrder",
  async (formData, thunkAPI) => {
    try {
      const { data } = await api.post("/cart/checkout", formData);
      console.log("placeOrder:", data);
      return data.data;
    } catch (error) {
      throw thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
