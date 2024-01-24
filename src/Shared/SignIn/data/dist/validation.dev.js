"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SIGNIN_SCHEMA = void 0;

var Yup = _interopRequireWildcard(require("yup"));

var _TranslationHelper = _interopRequireDefault(require("../../TranslationHelper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SIGNIN_SCHEMA = Yup.object().shape({
  email: Yup.string().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, (0, _TranslationHelper["default"])("validation.invalidEmailText")).required((0, _TranslationHelper["default"])("validation.requiredEmailText")),
  password: Yup.string().min(8, (0, _TranslationHelper["default"])("validation.invalidPasswordText")).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{8,}$/, (0, _TranslationHelper["default"])("validation.invalidPasswordTwoText")).required((0, _TranslationHelper["default"])("validation.requiredPasswordText")),
  termAndConditionCheck: Yup.bool().oneOf([true], (0, _TranslationHelper["default"])("validation.requiredTermAndConditionCheck"))
});
exports.SIGNIN_SCHEMA = SIGNIN_SCHEMA;