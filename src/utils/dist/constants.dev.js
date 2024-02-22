"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.promoCodeTypeOptions = exports.duration = exports.category = exports.exerciseLevel = exports.UNAVAILABLE_FOR_LEGAL_REASONS_CODE = exports.PRECONDITION_REQUIRED_CODE = exports.SUCCESS_CODES = exports.FORBIDDEN_CODE = exports.ADMIN_SERVICE_PROVIDER_PROFILE_URL = exports.TRAINEE_SERVICE_PROVIDER_LISTING_URL = exports.UPDATE_PROFILE_REQUEST_LISTING_URL = exports.UPDATE_PROFILE_REQUEST_CHANGE_STATUS_URL = exports.GET_LEVEL_PREFERENCES_URL = exports.GET_TRAINING_GOAL_PREFERENCES_URL = exports.ADMIN_CHANGE_SERVICE_PROVIDER_FEEDBACK_STATUS_URL = exports.ADMIN_CHANGE_PLATFORM_FEEDBACK_STATUS_URL = exports.GET_SERVICE_PROVIDER_COMMENTS_URL = exports.ADMIN_SERVICE_PROVIDER_FEEDBACK_LISTING_URL = exports.ADMIN_PLATFORM_FEEDBACK_LISTING_URL = exports.EXERCUSE_SUBSCRIPITION_PLAN_URL = exports.ADMIN_SERVICE_PROVIDER_LISTING_URL = exports.ADMIN_EXERCISE_SUBCATEGORY_URL = exports.ADMIN_APPROVE_REVIEW_REQUEST_URL = exports.ADMIN_REJECT_REVIEW_REQUEST_URL = exports.GUEST_SERVICE_PROVIDER_PROFILE_URL = exports.GUEST_SERVICE_PROVIDER_LISTING_URL = exports.GUEST_SUBSCRIPTION_PLAN_URL = exports.TRANSACTION_HISTORY_URL = exports.ADMIN_REVIEW_REQUEST_URL = exports.CHECK_PAYMENT_STATUS_URL = exports.ADMIN_RELEASE_PAYMENT_URL = exports.SEND_UPDATE_PROFILE_URL = exports.CANCEL_SUBSCRIPTION_URL = exports.FORGOT_PASSWORD_OTP_URL = exports.TRAINEE_CHANGE_PASSWORD_URL = exports.EXERCISE_CATEGORIES_URL = exports.ADMIN_EXERCISE_CATEGORY_URL = exports.USER_NOTIFICATIONS_URL = exports.PENDING_PAYMENTS = exports.ADMIN_TRAINEE_LISTING_URL = exports.ADMIN_EXERCISE_URL = exports.FORGOT_PASSWORD_RESEND_OTP_URL = exports.ADMIN_DASHBOARD_COUNTERS = exports.SUBSCRIPTION_PLAN_URL = exports.ADMIN_PROMO_CODE_URL = exports.USE_PROMO_CODE_URL = exports.PREPARE_CHECKOUT_URL = exports.TRAINEE_PROGRESS_URL = exports.FORGOT_PASSWORD_VERIFY_URL = exports.CONTACT_US_URL = exports.SET_AVAILABILITY_URL = exports.GET_SPECIALITIES_URL = exports.NEW_PASSWORD_URL = exports.DELETE_ACCOUNT_URL = exports.WALLET_AMOUNT_URL = exports.EXERCISE_URL = exports.EDIT_PROFILE_URL = exports.REGISTER_URL = exports.MEMBERSHIP_URL = exports.USER_PROFILE_URL = exports.LOGOUT_URL = exports.LOGIN_URL = exports.SERVICE_PROVIDER_INITIAL_URL = exports.TRAINEE_INITIAL_URL = exports.TRAINEE_PROFILE_URL = exports.ADMIN_INITIAL_URL = exports.TRAINER_NUTRITIONIST_ROLE = exports.NUTRITIONIST_ROLE = exports.TRAINER_ROLE = exports.TRAINEE_ROLE = exports.ADMIN_ROLE = exports.roleOptionsArabic = exports.roleOptions = exports.weekDaysOptionsArabic = exports.weekDaysOptions = exports.FEMALE_BODY = exports.MALE_BODY = exports.TRAINER_NUTRITIONIST_TYPE = exports.NUTRITIONIST_TYPE = exports.TRAINER_TYPE = exports.TRAINEE_TYPE = exports.DEFAULT_LANGUAGE = exports.ENGLISH_LANGUAGE = exports.ARABIC_LANGUAGE = exports.PER_PAGE_COUNT = exports.PAGE_RANGE = exports.ADMIN_EMAIL = exports.CURRENCY = void 0;
//===============Currency=========================
var CURRENCY = "SAR"; //===============AdminCredentials==================

exports.CURRENCY = CURRENCY;
var ADMIN_EMAIL = "admin@admin.com"; //======================paginationParams============

exports.ADMIN_EMAIL = ADMIN_EMAIL;
var PAGE_RANGE = 2;
exports.PAGE_RANGE = PAGE_RANGE;
var PER_PAGE_COUNT = 8; //======================languages===================

exports.PER_PAGE_COUNT = PER_PAGE_COUNT;
var ARABIC_LANGUAGE = "ar";
exports.ARABIC_LANGUAGE = ARABIC_LANGUAGE;
var ENGLISH_LANGUAGE = "en";
exports.ENGLISH_LANGUAGE = ENGLISH_LANGUAGE;
var DEFAULT_LANGUAGE = "en"; //======================serviceProviders===========

exports.DEFAULT_LANGUAGE = DEFAULT_LANGUAGE;
var TRAINEE_TYPE = "trainee";
exports.TRAINEE_TYPE = TRAINEE_TYPE;
var TRAINER_TYPE = "trainer";
exports.TRAINER_TYPE = TRAINER_TYPE;
var NUTRITIONIST_TYPE = "nutritionist";
exports.NUTRITIONIST_TYPE = NUTRITIONIST_TYPE;
var TRAINER_NUTRITIONIST_TYPE = "both"; //======================body=======================

exports.TRAINER_NUTRITIONIST_TYPE = TRAINER_NUTRITIONIST_TYPE;
var MALE_BODY = "Male";
exports.MALE_BODY = MALE_BODY;
var FEMALE_BODY = "Female"; //=====================signUpForm==================

exports.FEMALE_BODY = FEMALE_BODY;
var weekDaysOptions = [{
  label: "Monday",
  value: "Monday"
}, {
  label: "Tuesday",
  value: "Tuesday"
}, {
  label: "Wednesday",
  value: "Wednesday"
}, {
  label: "Thursday",
  value: "Thursday"
}, {
  label: "Friday",
  value: "Friday"
}, {
  label: "Saturday",
  value: "Saturday"
}, {
  label: "Sunday",
  value: "Sunday"
}];
exports.weekDaysOptions = weekDaysOptions;
var weekDaysOptionsArabic = [{
  label: "الإثنين",
  value: "Monday"
}, {
  label: "الثلاثاء",
  value: "Tuesday"
}, {
  label: "الأربعاء",
  value: "Wednesday"
}, {
  label: "الخميس",
  value: "Thursday"
}, {
  label: "الجمعة",
  value: "Friday"
}, {
  label: "السبت",
  value: "Saturday"
}, {
  label: "الأحد",
  value: "Sunday"
}];
exports.weekDaysOptionsArabic = weekDaysOptionsArabic;
var roleOptions = [{
  label: "Trainer",
  value: "Trainer"
}, {
  label: "Trainer And Nutritionist",
  value: "Trainer And Nutritionist"
}];
exports.roleOptions = roleOptions;
var roleOptionsArabic = [{
  label: "المدرب",
  value: "Trainer"
}, {
  label: "مدرب وأخصائي تغذية",
  value: "Trainer And Nutritionist"
}]; //=====================Roles=====================

exports.roleOptionsArabic = roleOptionsArabic;
var ADMIN_ROLE = "Admin";
exports.ADMIN_ROLE = ADMIN_ROLE;
var TRAINEE_ROLE = "Trainee";
exports.TRAINEE_ROLE = TRAINEE_ROLE;
var TRAINER_ROLE = "Trainer";
exports.TRAINER_ROLE = TRAINER_ROLE;
var NUTRITIONIST_ROLE = "Nutritionist";
exports.NUTRITIONIST_ROLE = NUTRITIONIST_ROLE;
var TRAINER_NUTRITIONIST_ROLE = "Trainer And Nutritionist"; //====================Routes====================

exports.TRAINER_NUTRITIONIST_ROLE = TRAINER_NUTRITIONIST_ROLE;
var ADMIN_INITIAL_URL = "/admin/dashboard";
exports.ADMIN_INITIAL_URL = ADMIN_INITIAL_URL;
var TRAINEE_PROFILE_URL = "/trainee/profile";
exports.TRAINEE_PROFILE_URL = TRAINEE_PROFILE_URL;
var TRAINEE_INITIAL_URL = "/trainee/dashboard";
exports.TRAINEE_INITIAL_URL = TRAINEE_INITIAL_URL;
var SERVICE_PROVIDER_INITIAL_URL = "/serviceProvider/dashboard"; //===================ApiEndPoints===============

exports.SERVICE_PROVIDER_INITIAL_URL = SERVICE_PROVIDER_INITIAL_URL;
var LOGIN_URL = "/login/";
exports.LOGIN_URL = LOGIN_URL;
var LOGOUT_URL = "/logout/";
exports.LOGOUT_URL = LOGOUT_URL;
var USER_PROFILE_URL = "/User/";
exports.USER_PROFILE_URL = USER_PROFILE_URL;
var MEMBERSHIP_URL = "/membership/";
exports.MEMBERSHIP_URL = MEMBERSHIP_URL;
var REGISTER_URL = "/registeruser/";
exports.REGISTER_URL = REGISTER_URL;
var EDIT_PROFILE_URL = "/User/userId/";
exports.EDIT_PROFILE_URL = EDIT_PROFILE_URL;
var EXERCISE_URL = "guest/exercisedata/";
exports.EXERCISE_URL = EXERCISE_URL;
var WALLET_AMOUNT_URL = "/wallet/balance/";
exports.WALLET_AMOUNT_URL = WALLET_AMOUNT_URL;
var DELETE_ACCOUNT_URL = "/delete/userId/";
exports.DELETE_ACCOUNT_URL = DELETE_ACCOUNT_URL;
var NEW_PASSWORD_URL = "/forget_password/";
exports.NEW_PASSWORD_URL = NEW_PASSWORD_URL;
var GET_SPECIALITIES_URL = "/specialities/";
exports.GET_SPECIALITIES_URL = GET_SPECIALITIES_URL;
var SET_AVAILABILITY_URL = "/fully_booked/";
exports.SET_AVAILABILITY_URL = SET_AVAILABILITY_URL;
var CONTACT_US_URL = "/guest/contactusemail/";
exports.CONTACT_US_URL = CONTACT_US_URL;
var FORGOT_PASSWORD_VERIFY_URL = "/verifyotp/";
exports.FORGOT_PASSWORD_VERIFY_URL = FORGOT_PASSWORD_VERIFY_URL;
var TRAINEE_PROGRESS_URL = "/trainee/progress/";
exports.TRAINEE_PROGRESS_URL = TRAINEE_PROGRESS_URL;
var PREPARE_CHECKOUT_URL = "/payment/hyperpay/";
exports.PREPARE_CHECKOUT_URL = PREPARE_CHECKOUT_URL;
var USE_PROMO_CODE_URL = "/payment/promo-code/";
exports.USE_PROMO_CODE_URL = USE_PROMO_CODE_URL;
var ADMIN_PROMO_CODE_URL = "/admin/promo-codes/";
exports.ADMIN_PROMO_CODE_URL = ADMIN_PROMO_CODE_URL;
var SUBSCRIPTION_PLAN_URL = "/subcription_plan/";
exports.SUBSCRIPTION_PLAN_URL = SUBSCRIPTION_PLAN_URL;
var ADMIN_DASHBOARD_COUNTERS = "/admin/user-stats";
exports.ADMIN_DASHBOARD_COUNTERS = ADMIN_DASHBOARD_COUNTERS;
var FORGOT_PASSWORD_RESEND_OTP_URL = "/resendotp/";
exports.FORGOT_PASSWORD_RESEND_OTP_URL = FORGOT_PASSWORD_RESEND_OTP_URL;
var ADMIN_EXERCISE_URL = "/admin/exercise/detail/";
exports.ADMIN_EXERCISE_URL = ADMIN_EXERCISE_URL;
var ADMIN_TRAINEE_LISTING_URL = "/admin/trainees/";
exports.ADMIN_TRAINEE_LISTING_URL = ADMIN_TRAINEE_LISTING_URL;
var PENDING_PAYMENTS = "/admin/remaining_payments/";
exports.PENDING_PAYMENTS = PENDING_PAYMENTS;
var USER_NOTIFICATIONS_URL = "/user-notifications/";
exports.USER_NOTIFICATIONS_URL = USER_NOTIFICATIONS_URL;
var ADMIN_EXERCISE_CATEGORY_URL = "/admin/exercise/";
exports.ADMIN_EXERCISE_CATEGORY_URL = ADMIN_EXERCISE_CATEGORY_URL;
var EXERCISE_CATEGORIES_URL = "/guest/exercisedata/";
exports.EXERCISE_CATEGORIES_URL = EXERCISE_CATEGORIES_URL;
var TRAINEE_CHANGE_PASSWORD_URL = "/change_password/";
exports.TRAINEE_CHANGE_PASSWORD_URL = TRAINEE_CHANGE_PASSWORD_URL;
var FORGOT_PASSWORD_OTP_URL = "/forget_password_otp/";
exports.FORGOT_PASSWORD_OTP_URL = FORGOT_PASSWORD_OTP_URL;
var CANCEL_SUBSCRIPTION_URL = "wallet/refund_amount/";
exports.CANCEL_SUBSCRIPTION_URL = CANCEL_SUBSCRIPTION_URL;
var SEND_UPDATE_PROFILE_URL = "/profile-update-request/";
exports.SEND_UPDATE_PROFILE_URL = SEND_UPDATE_PROFILE_URL;
var ADMIN_RELEASE_PAYMENT_URL = "/admin/release_payment/";
exports.ADMIN_RELEASE_PAYMENT_URL = ADMIN_RELEASE_PAYMENT_URL;
var CHECK_PAYMENT_STATUS_URL = "/payment/hyperpay_status/";
exports.CHECK_PAYMENT_STATUS_URL = CHECK_PAYMENT_STATUS_URL;
var ADMIN_REVIEW_REQUEST_URL = "/service_provider_requests";
exports.ADMIN_REVIEW_REQUEST_URL = ADMIN_REVIEW_REQUEST_URL;
var TRANSACTION_HISTORY_URL = "/wallet/wallet_transitions/";
exports.TRANSACTION_HISTORY_URL = TRANSACTION_HISTORY_URL;
var GUEST_SUBSCRIPTION_PLAN_URL = "/guest/service_subscription";
exports.GUEST_SUBSCRIPTION_PLAN_URL = GUEST_SUBSCRIPTION_PLAN_URL;
var GUEST_SERVICE_PROVIDER_LISTING_URL = "/guest/serviceprovide";
exports.GUEST_SERVICE_PROVIDER_LISTING_URL = GUEST_SERVICE_PROVIDER_LISTING_URL;
var GUEST_SERVICE_PROVIDER_PROFILE_URL = "/guest/serviceprovide";
exports.GUEST_SERVICE_PROVIDER_PROFILE_URL = GUEST_SERVICE_PROVIDER_PROFILE_URL;
var ADMIN_REJECT_REVIEW_REQUEST_URL = "/service_provider_reject/";
exports.ADMIN_REJECT_REVIEW_REQUEST_URL = ADMIN_REJECT_REVIEW_REQUEST_URL;
var ADMIN_APPROVE_REVIEW_REQUEST_URL = "/service_provider_approve/";
exports.ADMIN_APPROVE_REVIEW_REQUEST_URL = ADMIN_APPROVE_REVIEW_REQUEST_URL;
var ADMIN_EXERCISE_SUBCATEGORY_URL = "/admin/exercise_subcategory/";
exports.ADMIN_EXERCISE_SUBCATEGORY_URL = ADMIN_EXERCISE_SUBCATEGORY_URL;
var ADMIN_SERVICE_PROVIDER_LISTING_URL = "/admin/service-providers/";
exports.ADMIN_SERVICE_PROVIDER_LISTING_URL = ADMIN_SERVICE_PROVIDER_LISTING_URL;
var EXERCUSE_SUBSCRIPITION_PLAN_URL = "/execrise/exercise-subscription";
exports.EXERCUSE_SUBSCRIPITION_PLAN_URL = EXERCUSE_SUBSCRIPITION_PLAN_URL;
var ADMIN_PLATFORM_FEEDBACK_LISTING_URL = "/admin/review/platform-reviews";
exports.ADMIN_PLATFORM_FEEDBACK_LISTING_URL = ADMIN_PLATFORM_FEEDBACK_LISTING_URL;
var ADMIN_SERVICE_PROVIDER_FEEDBACK_LISTING_URL = "/admin/review/sp-reviews/";
exports.ADMIN_SERVICE_PROVIDER_FEEDBACK_LISTING_URL = ADMIN_SERVICE_PROVIDER_FEEDBACK_LISTING_URL;
var GET_SERVICE_PROVIDER_COMMENTS_URL = "/service-provider/serviceProviderId/reviews/";
exports.GET_SERVICE_PROVIDER_COMMENTS_URL = GET_SERVICE_PROVIDER_COMMENTS_URL;
var ADMIN_CHANGE_PLATFORM_FEEDBACK_STATUS_URL = "/admin/review/platform-review/feedbackId/";
exports.ADMIN_CHANGE_PLATFORM_FEEDBACK_STATUS_URL = ADMIN_CHANGE_PLATFORM_FEEDBACK_STATUS_URL;
var ADMIN_CHANGE_SERVICE_PROVIDER_FEEDBACK_STATUS_URL = "/admin/review/sp-review/feedbackId/";
exports.ADMIN_CHANGE_SERVICE_PROVIDER_FEEDBACK_STATUS_URL = ADMIN_CHANGE_SERVICE_PROVIDER_FEEDBACK_STATUS_URL;
var GET_TRAINING_GOAL_PREFERENCES_URL = "/profile_preference?profile_type=training_goal";
exports.GET_TRAINING_GOAL_PREFERENCES_URL = GET_TRAINING_GOAL_PREFERENCES_URL;
var GET_LEVEL_PREFERENCES_URL = "/profile_preference?profile_type=level";
exports.GET_LEVEL_PREFERENCES_URL = GET_LEVEL_PREFERENCES_URL;
var UPDATE_PROFILE_REQUEST_CHANGE_STATUS_URL = "/admin/profile-update-request/requestId/change_status/";
exports.UPDATE_PROFILE_REQUEST_CHANGE_STATUS_URL = UPDATE_PROFILE_REQUEST_CHANGE_STATUS_URL;
var UPDATE_PROFILE_REQUEST_LISTING_URL = "/admin/profile-update-request/";
exports.UPDATE_PROFILE_REQUEST_LISTING_URL = UPDATE_PROFILE_REQUEST_LISTING_URL;
var TRAINEE_SERVICE_PROVIDER_LISTING_URL = "/serviceprovider_logged_in";
exports.TRAINEE_SERVICE_PROVIDER_LISTING_URL = TRAINEE_SERVICE_PROVIDER_LISTING_URL;
var ADMIN_SERVICE_PROVIDER_PROFILE_URL = "/admin/service-providers/userId/"; //=================StatusCodes===================

exports.ADMIN_SERVICE_PROVIDER_PROFILE_URL = ADMIN_SERVICE_PROVIDER_PROFILE_URL;
var FORBIDDEN_CODE = 403;
exports.FORBIDDEN_CODE = FORBIDDEN_CODE;
var SUCCESS_CODES = [200, 201];
exports.SUCCESS_CODES = SUCCESS_CODES;
var PRECONDITION_REQUIRED_CODE = 428;
exports.PRECONDITION_REQUIRED_CODE = PRECONDITION_REQUIRED_CODE;
var UNAVAILABLE_FOR_LEGAL_REASONS_CODE = 451; //=================Exercise======================

exports.UNAVAILABLE_FOR_LEGAL_REASONS_CODE = UNAVAILABLE_FOR_LEGAL_REASONS_CODE;
var exerciseLevel = ["Beginner", "Expert"];
exports.exerciseLevel = exerciseLevel;
var category = ["Chest", "Traps", "Shoulder", "Biceps", "Forearms", "Obliques", "Abdominal", "Quads", "Calves"]; //=======================AdminPanel select duration=====================

exports.category = category;
var duration = ["Weekly", "monthly"]; //=======================AdminPanel select promotion type=====================

exports.duration = duration;
var promoCodeTypeOptions = [{
  label: "flat",
  value: "flat"
}, {
  label: "percentage",
  value: "percentage"
}];
exports.promoCodeTypeOptions = promoCodeTypeOptions;