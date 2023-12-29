import { createSlice } from "@reduxjs/toolkit";
import { login, logout, changePassword, signUp } from "./userApi";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isGuest: false,
    loading: "idle",
    error: null,
  },
  reducers: {
    setGuest: (state, action) => {
      state.isGuest = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.isGuest = false;
        state.user = action.payload.data;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload.error;
      })
      .addCase(logout.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = "succeeded";
        state.user = null;
      })
      .addCase(logout.rejected, (state) => {
        state.loading = "failed";
        state.user = null;
      })
      .addCase(changePassword.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(changePassword.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(signUp.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(signUp.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(signUp.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export const { setGuest } = userSlice.actions;

export default userSlice.reducer;
