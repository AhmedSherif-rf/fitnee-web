"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.reviewRequestSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _UserCounterApi = require("./UserCounterApi");

var reviewRequestSlice = (0, _toolkit.createSlice)({
  name: "DashboardUserCounters",
  initialState: {
    loading: "idle",
    error: null,
    success: null
  },
  extraReducers: function extraReducers(builder) {
    builder.addCase(_UserCounterApi.getUserCounters.pending, function (state) {
      state.loading = "pending";
    }).addCase(_UserCounterApi.getUserCounters.fulfilled, function (state) {
      state.success = true;
      state.loading = "succeeded";
    }).addCase(_UserCounterApi.getUserCounters.rejected, function (state, action) {
      state.loading = "failed";
      state.error = action.payload.error;
    });
  }
});
exports.reviewRequestSlice = reviewRequestSlice;
var _default = reviewRequestSlice.reducer;
exports["default"] = _default;