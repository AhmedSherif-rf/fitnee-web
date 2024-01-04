//===============AdminCredentials==================
export const ADMIN_EMAIL = "admin@admin.com";
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
export const weekDaysOptions = [
  { value: "Monday", label: "Monday" },
  { value: "Tuesday", label: "Tuesday" },
  { value: "Wednesday", label: "Wednesday" },
  { value: "Thursday", label: "Thursday" },
  { value: "Friday", label: "Friday" },
  { value: "Saturday", label: "Saturday" },
  { value: "Sunday", label: "Sunday" },
];
//=====================Roles=====================
export const ADMIN_ROLE = "Admin";
export const TRAINEE_ROLE = "Trainee";
export const TRAINER_ROLE = "Trainer";
export const NUTRITIONIST_ROLE = "Nutritionist";
export const TRAINER_NUTRITIONIST_ROLE = "Trainer And Nutritionist";
//====================Routes====================
export const ADMIN_INITIAL_URL = "/admin/dashboard";
export const TRAINEE_INITIAL_URL = "/trainee/dashboard";
export const SERVICE_PROVIDER_INITIAL_URL = "/serviceProvider/dashboard";
//===================ApiEndPoints===============
export const LOGIN_URL = "/login/";
export const LOGOUT_URL = "/logout/";
export const EDIT_PROFILE_URL = "/User/userId/";
export const REGISTER_URL = "/registeruser/";
export const DELETE_ACCOUNT_URL = "/delete/userId/";
export const NEW_PASSWORD_URL = "/forget_password/";
export const GET_SPECIALITIES_URL = "/specialities/";
export const CONTACT_US_URL = "/guest/contactusemail/";
export const FORGOT_PASSWORD_VERIFY_URL = "/verifyotp/";
export const FORGOT_PASSWORD_RESEND_OTP_URL = "/resendotp/";
export const TRAINEE_CHANGE_PASSWORD_URL = "/change_password/";
export const FORGOT_PASSWORD_OTP_URL = "/forget_password_otp/";
export const GUEST_SERVICE_PROVIDER_LISTING = "/guest/serviceprovide";
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
