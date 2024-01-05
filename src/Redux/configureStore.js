import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import userSlice from "./features/User/userSlice.js";
import guestSlice from "./features/Guest/guestSlice.js";
import { persistStore, persistReducer } from "redux-persist";
import languageSlice from "./features/Language/languageSlice.js";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import contactUsSlice from "./features/ContactUs/contactUsSlice.js";
import forgotPasswordSlice from "./features/ForgotPassword/forgotPasswordSlice.js";
import ReviewRequestSlice from "./features/Admin/ReviewRequest/ReviewRequestSlice.js";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  user: userSlice,
  guest: guestSlice,
  language: languageSlice,
  contactUs: contactUsSlice,
  reviewRequest: ReviewRequestSlice,
  forgotPassword: forgotPasswordSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
