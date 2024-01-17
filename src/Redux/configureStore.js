import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import userSlice from "./features/User/userSlice.js";
import guestSlice from "./features/Guest/guestSlice.js";
import { persistStore, persistReducer } from "redux-persist";
import languageSlice from "./features/Language/languageSlice.js";
import exerciseSlice from "./features/Exercise/exerciseSlice.js";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import contactUsSlice from "./features/ContactUs/contactUsSlice.js";
import subscriptionSlice from "./features/Subscription/subscriptionSlice.js";
import userListingSlice from "./features/Admin/UserListing/userListingSlice.js";
import forgotPasswordSlice from "./features/ForgotPassword/forgotPasswordSlice.js";
import reviewRequestSlice from "./features/Admin/ReviewRequest/ReviewRequestSlice.js";
import subscriptionPlanSlice from "./features/SubscriptionPlan/subscriptionPlanSlice.js";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  user: userSlice,
  guest: guestSlice,
  exercise: exerciseSlice,
  language: languageSlice,
  contactUs: contactUsSlice,
  userListing: userListingSlice,
  subscription: subscriptionSlice,
  reviewRequest: reviewRequestSlice,
  forgotPassword: forgotPasswordSlice,
  subscriptionPlan: subscriptionPlanSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
