//===============Currency=========================
export const CURRENCY = "SAR";
//===============AdminCredentials==================
export const ADMIN_EMAIL = "admin@admin.com";
//======================paginationParams============
export const PAGE_RANGE = 2;
export const PER_PAGE_COUNT = 8;
//======================languages===================
export const ARABIC_LANGUAGE = "ar";
export const ENGLISH_LANGUAGE = "en";
export const DEFAULT_LANGUAGE = "en";
//======================serviceProviders===========
export const TRAINEE_TYPE = "trainee";
export const TRAINER_TYPE = "trainer";
export const NUTRITIONIST_TYPE = "nutritionist";
export const TRAINER_NUTRITIONIST_TYPE = "both";
//======================body=======================
export const MALE_BODY = "Male";
export const FEMALE_BODY = "Female";
//=====================signUpForm==================
export const trainingGoalOptions = [
  "Body Building",
  "Gain Weight",
  "Healthy Lifestyle",
  "Lose Weight",
  "Power Lifting",
];
export const activityLevelOptions = ["Not active", "Active", "Super active"];
export const weekDaysOptions = [
  { value: "Monday", label: "Monday" },
  { value: "Tuesday", label: "Tuesday" },
  { value: "Wednesday", label: "Wednesday" },
  { value: "Thursday", label: "Thursday" },
  { value: "Friday", label: "Friday" },
  { value: "Saturday", label: "Saturday" },
  { value: "Sunday", label: "Sunday" },
];
export const roleOptions = ["Trainer", "Trainer And Nutritionist"];
//=====================Roles=====================
export const ADMIN_ROLE = "Admin";
export const TRAINEE_ROLE = "Trainee";
export const TRAINER_ROLE = "Trainer";
export const NUTRITIONIST_ROLE = "Nutritionist";
export const TRAINER_NUTRITIONIST_ROLE = "Trainer And Nutritionist";
//====================Routes====================
export const ADMIN_INITIAL_URL = "/admin/dashboard";
export const TRAINEE_PROFILE_URL = "/trainee/profile";
export const TRAINEE_INITIAL_URL = "/trainee/dashboard";
export const SERVICE_PROVIDER_INITIAL_URL = "/serviceProvider/dashboard";
//===================ApiEndPoints===============
export const LOGIN_URL = "/login/";
export const LOGOUT_URL = "/logout/";
export const MEMBERSHIP_URL = "/membership/";
export const REGISTER_URL = "/registeruser/";
export const EDIT_PROFILE_URL = "/User/userId/";
export const DELETE_ACCOUNT_URL = "/delete/userId/";
export const NEW_PASSWORD_URL = "/forget_password/";
export const GET_SPECIALITIES_URL = "/specialities/";
export const CONTACT_US_URL = "/guest/contactusemail/";
export const FORGOT_PASSWORD_VERIFY_URL = "/verifyotp/";
export const ADMIN_PROMO_CODE_URL = "/admin/promo-codes/";
export const TRAINEE_PROGRESS_URL = "/trainee/progress/";
export const PREPARE_CHECKOUT_URL = "/payment/hyperpay/";
export const SUBSCRIPTION_PLAN_URL = "/subcription_plan/";
export const FORGOT_PASSWORD_RESEND_OTP_URL = "/resendotp/";
export const ADMIN_EXERCISE_URL = "/admin/exercise/detail/";
export const ADMIN_TRAINEE_LISTING_URL = "/admin/trainees/";
export const ADMIN_EXERCISE_CATEGORY_URL = "/admin/exercise/";
export const TRAINEE_CHANGE_PASSWORD_URL = "/change_password/";
export const FORGOT_PASSWORD_OTP_URL = "/forget_password_otp/";
export const CHECK_PAYMENT_STATUS_URL = "/payment/hyperpay_status/";
export const ADMIN_REVIEW_REQUEST_URL = "/service_provider_requests";
export const TRANSACTION_HISTORY_URL = "/wallet/wallet_transitions/";
export const GUEST_SUBSCRIPTION_PLAN_URL = "/guest/service_subscription";
export const GUEST_SERVICE_PROVIDER_LISTING_URL = "/guest/serviceprovide";
export const GUEST_SERVICE_PROVIDER_PROFILE_URL = "/guest/serviceprovide";
export const ADMIN_REJECT_REVIEW_REQUEST_URL = "/service_provider_reject/";
export const ADMIN_APPROVE_REVIEW_REQUEST_URL = "/service_provider_approve/";
export const ADMIN_EXERCISE_SUBCATEGORY_URL = "/admin/exercise_subcategory/";
export const ADMIN_SERVICE_PROVIDER_LISTING_URL = "/admin/service-providers/";
export const TRAINEE_SERVICE_PROVIDER_LISTING_URL =
  "/serviceprovider_logged_in";
export const ADMIN_SERVICE_PROVIDER_PROFILE_URL =
  "/admin/service-providers/userId/";
//=================StatusCodes===================
export const SUCCESS_CODES = [200, 201];
export const FORBIDDEN_CODE = 403;
export const PRECONDITION_REQUIRED_CODE = 428;
export const UNAVAILABLE_FOR_LEGAL_REASONS_CODE = 451;
//=================Exercise======================
export const exerciseLevel = ["Beginner", "Expert"];
export const category = [
  "Chest",
  "Traps",
  "Shoulder",
  "Biceps",
  "Forearms",
  "Obliques",
  "Abdominal",
  "Quads",
  "Calves",
];
//=======================AdminPanel select duration=====================
export const duration = ["Weekly", "monthly"];
//=======================AdminPanel select promotion type=====================
export const promoCodeTypeOptions = ["flat", "percentage"];
