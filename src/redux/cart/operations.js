import { createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "../../utils/api";

export const getCart = createAsyncThunk("cart/getCart", async (_, thunkAPI) => {
  try {
    const { data } = await api.get("/cart");
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
      return data.data;
    } catch (error) {
      throw thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const removeProduct = createAsyncThunk(
  "cart/removeProduct",
  async ({ cartId, productId }, thunkAPI) => {
    try {
      await api.delete(`/cart/${cartId}/${productId}`);
      return productId;
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
      return data.data;
    } catch (error) {
      throw thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
