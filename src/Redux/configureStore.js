import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/User/userSlice.js";
import languageSlice from "./features/Language/languageSlice.js";

const store = configureStore({
  reducer: {
    language: languageSlice,
    user: userSlice,
  },
  middleware: [thunk],
});

export default store;
