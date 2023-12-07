import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/User/userSlice.js";
import languageSlice from "./features/Language/languageSlice.js";
import contactUsSlice from "./features/ContactUs/contactUsSlice.js";

const store = configureStore({
  reducer: {
    language: languageSlice,
    user: userSlice,
    contactUs: contactUsSlice,
  },
  middleware: [thunk],
});

export default store;
