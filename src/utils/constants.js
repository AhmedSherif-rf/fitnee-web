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
export const roleOptions = ["Trainer", "Nutrition", "Trainer & Nutrition"];
export const specialityOptions = [
  { value: "Body Building", label: "Body Building" },
  { value: "Health Issue", label: "Health Issue" },
  { value: "Power Lifting", label: "Power Lifting" },
  { value: "Healthy Lifestyle", label: "Healthy Lifestyle" },
];
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
export const NEW_PASSWORD_URL = "/forget_password/";
export const CONTACT_US_URL = "/guest/contactusemail/";
export const FORGOT_PASSWORD_VERIFY_URL = "/verifyotp/";
export const FORGOT_PASSWORD_RESEND_OTP_URL = "/resendotp/";
export const TRAINEE_CHANGE_PASSWORD_URL = "/change_password/";
export const FORGOT_PASSWORD_OTP_URL = "/forget_password_otp/";
export const GUEST_SERVICE_PROVIDER_LISTING = "/guest/serviceprovide";
//=================StatusCodes===================
export const SUCCESS_CODES = [200, 201];
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
