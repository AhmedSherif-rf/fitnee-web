"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.dashboardSlice = void 0;

var _dashboardApi = require("./dashboardApi");

var _toolkit = require("@reduxjs/toolkit");

var dashboardSlice = (0, _toolkit.createSlice)({
  name: "dashboard",
  initialState: {
    loading: "idle",
    error: null,
    success: null
  },
  extraReducers: function extraReducers(builder) {
    builder.addCase(_dashboardApi.getUserStat.pending, function (state) {
      state.loading = "pending";
    }).addCase(_dashboardApi.getUserStat.fulfilled, function (state) {
      state.success = true;
      state.loading = "succeeded";
    }).addCase(_dashboardApi.getUserStat.rejected, function (state, action) {
      state.loading = "failed";
      state.error = action.payload.error;
    });
  }
});
exports.dashboardSlice = dashboardSlice;
var _default = dashboardSlice.reducer;
exports["default"] = _default;