"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.persistor = exports.store = void 0;

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));

var _userSlice = _interopRequireDefault(require("./features/User/userSlice.js"));

var _guestSlice = _interopRequireDefault(require("./features/Guest/guestSlice.js"));

var _reduxPersist = require("redux-persist");

var _languageSlice = _interopRequireDefault(require("./features/Language/languageSlice.js"));

var _exerciseSlice = _interopRequireDefault(require("./features/Exercise/exerciseSlice.js"));

var _walletSlice = _interopRequireDefault(require("./features/Admin/Wallet/walletSlice.js"));

var _toolkit = require("@reduxjs/toolkit");

var _contactUsSlice = _interopRequireDefault(require("./features/ContactUs/contactUsSlice.js"));

var _promoCodeSlice = _interopRequireDefault(require("./features/Admin/PromoCode/promoCodeSlice.js"));

var _FeedbackSlice = _interopRequireDefault(require("./features/Admin/Feedback/FeedbackSlice.js"));

var _subscriptionSlice = _interopRequireDefault(require("./features/Subscription/subscriptionSlice.js"));

var _userListingSlice = _interopRequireDefault(require("./features/Admin/UserListing/userListingSlice.js"));

var _forgotPasswordSlice = _interopRequireDefault(require("./features/ForgotPassword/forgotPasswordSlice.js"));

var _ReviewRequestSlice = _interopRequireDefault(require("./features/Admin/ReviewRequest/ReviewRequestSlice.js"));

var _UserCounterSlice = _interopRequireDefault(require("./features/Admin/Dashboard/UserCounterSlice.js"));

var _subscriptionPlanSlice = _interopRequireDefault(require("./features/SubscriptionPlan/subscriptionPlanSlice.js"));

var _EditProfileRequestSlice = _interopRequireDefault(require("./features/Admin/EditProfileRequest/EditProfileRequestSlice.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var persistConfig = {
  key: "root",
  version: 1,
  storage: _storage["default"]
};
var rootReducer = (0, _toolkit.combineReducers)({
  user: _userSlice["default"],
  guest: _guestSlice["default"],
  wallet: _walletSlice["default"],
  promoCode: _promoCodeSlice["default"],
  exercise: _exerciseSlice["default"],
  language: _languageSlice["default"],
  feedback: _FeedbackSlice["default"],
  contactUs: _contactUsSlice["default"],
  userListing: _userListingSlice["default"],
  subscription: _subscriptionSlice["default"],
  reviewRequest: _ReviewRequestSlice["default"],
  forgotPassword: _forgotPasswordSlice["default"],
  subscriptionPlan: _subscriptionPlanSlice["default"],
  EditProfileRequest: _EditProfileRequestSlice["default"],
  dashboardUserCounters: _UserCounterSlice["default"]
});
var persistedReducer = (0, _reduxPersist.persistReducer)(persistConfig, rootReducer);
var store = (0, _toolkit.configureStore)({
  reducer: persistedReducer,
  middleware: [_reduxThunk["default"]]
});
exports.store = store;
var persistor = (0, _reduxPersist.persistStore)(store);
exports.persistor = persistor;