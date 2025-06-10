import { createSlice } from "@reduxjs/toolkit";

import {
  login,
  //   logout,
  registerUser,
  setToken,
} from "./operations";

const initialState = {
  user: {
    name: "",
    email: "",
  },
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
  error: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state /*, {payload}*/) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        // state.user.name = payload.name;
        // state.user.email = payload.email;
        // state.token = payload.token;

        // setToken(payload.token);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.token = payload.token;

        setToken(payload.token);
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
