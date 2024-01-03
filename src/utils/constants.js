//======================paginationParams============
export const PAGE_RANGE = 2;
export const PER_PAGE_COUNT = 20;
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
export const activityLevelOptions = ["Beginner", "Intermediate", "Advanced"];
export const roleOptions = ["Trainer", "Nutrition", "Both"];
export const weekDaysOptions = [
  { value: "monday", label: "Monday" },
  { value: "tuesday", label: "Tuesday" },
  { value: "wednesday", label: "Wednesday" },
  { value: "thursday", label: "Thursday" },
  { value: "friday", label: "Friday" },
  { value: "Saturday", label: "Saturday" },
  { value: "Sunday", label: "Sunday" },
];
//=====================Roles=====================
export const TRAINEE_ROLE = "Trainee";
export const TRAINER_ROLE = "Trainer";
//====================Routes====================
export const TRAINEE_INITIAL_URL = "/trainee/dashboard";
export const SERVICE_PROVIDER_INITIAL_URL = "/serviceProvider/dashboard";
//===================ApiEndPoints===============
export const LOGIN_URL = "/login/";
export const LOGOUT_URL = "/logout/";
export const DELETE_ACCOUNT_URL = "/delete/userId/";
export const NEW_PASSWORD_URL = "/forget_password/";
export const CONTACT_US_URL = "/guest/contactusemail/";
export const FORGOT_PASSWORD_VERIFY_URL = "/verifyotp/";
export const FORGOT_PASSWORD_RESEND_OTP_URL = "/resendotp/";
export const TRAINEE_CHANGE_PASSWORD_URL = "/change_password/";
export const FORGOT_PASSWORD_OTP_URL = "/forget_password_otp/";
export const GUEST_SERVICE_PROVIDER_LISTING_URL = "/guest/serviceprovide";
export const GUEST_SERVICE_PROVIDER_PROFILE_URL = "/guest/serviceprovide";
export const TRAINEE_SERVICE_PROVIDER_LISTING_URL = "/serviceprovider_logged_in";
//=================StatusCodes===================
export const SUCCESS_CODES = [200, 201];
export const FORBIDDEN_CODE = 403;
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
