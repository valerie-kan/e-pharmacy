import { createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "../../utils/api";

export const getAllStores = createAsyncThunk(
  "stores/getAllStores",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get("/stores");
      return data;
    } catch (error) {
      throw thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getNearest = createAsyncThunk(
  "stores/getNearest",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get("/stores/nearest");
      return data;
    } catch (error) {
      throw thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
