import { createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "../../utils/api";

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  api.defaults.headers.common.Authorization = "";
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      const { data } = await api.post("user/register", formData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (formData, thunkApi) => {
    try {
      const { data } = await api.post("user/login", formData);
      setToken(data.data.accessToken);
      localStorage.setItem("accessToken", data.data.accessToken);
      return data.data.accessToken;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const { data } = await api.post("user/logout");
    clearToken();
    localStorage.removeItem("accessToken");
    return data;
  } catch (error) {
    console.log(error.message);
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

// export const refreshUser = createAsyncThunk(
//   "auth/refresh",
//   async (_, thunkAPI) => {
//     // Reading the token from the state via getState()
//     console.log("start refresh");

//     const state = thunkAPI.getState();
//     console.log("state", state);

//     const persistedToken = state.auth.token;
//     console.log("persistedToken", persistedToken);

//     if (persistedToken === null) {
//       console.warn("No token found");
//       // If there is no token, exit without performing any request
//       return thunkAPI.rejectWithValue("Unable to fetch user");
//     }

//     try {
//       // If there is a token, add it to the HTTP header and perform the request
//       setToken(persistedToken);
//       const { data } = await api.post("/user/refresh");
//       console.log(data);

//       // return data.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.post("/user/refresh");

      setToken(data.accessToken);

      console.log("refreshUser:", data);
      return { token: data.accessToken };
    } catch {
      return thunkAPI.rejectWithValue("Unable to refresh session");
    }
  }
);

export const getUser = createAsyncThunk("auth/getUser", async (_, thunkAPI) => {
  try {
    const { data } = await api.get("/user/user-info");
    return data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});
