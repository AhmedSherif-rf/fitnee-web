import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    isGuest: false,
  },
  reducers: {
    setGuest: (state, action) => {
      state.isGuest = action.payload;
    },
  },
});

export const { setGuest } = userSlice.actions;

export default userSlice.reducer;
