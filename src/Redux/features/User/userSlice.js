import { createSlice } from "@reduxjs/toolkit";
import { login, logout, changePassword, deleteAccount } from "./userApi";

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
      .addCase(logout.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.user = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = "failed";
        state.user = null;
      })
      .addCase(changePassword.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.loading = "failed";
      })
      .addCase(deleteAccount.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(deleteAccount.fulfilled, (state, action) => {
        state.user = null;
        state.loading = "succeeded";
      })
      .addCase(deleteAccount.rejected, (state, action) => {
        state.loading = "failed";
      });
  },
});

export const { setGuest } = userSlice.actions;

export default userSlice.reducer;
