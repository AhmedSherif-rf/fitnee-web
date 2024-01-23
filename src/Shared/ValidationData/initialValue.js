export const TRAINEE_SIGNUP_INITIAL_VALUES = {
  goal: "",
  level: "",
  email: "",
  gender: "",
  weight: "",
  height: "",
  protien: "",
  password: "",
  last_name: "",
  first_name: "",
  role: "Trainee",
  phone_number: "",
  body_fat_mass: "",
  training_goal: "",
  body_images: null,
  profile_pic: null,
  date_of_birth: "",
  food_sensitive: "",
  injury_details: "",
  confirm_password: "",
  total_body_water: "",
  skeletal_muscel_mass: "",
  term_and_condition: false,
};

export const TRAINER_SIGNUP_INITIAL_VALUES = {
  bio: "",
  role: "",
  email: "",
  gender: "",
  stc_pay: "",
  password: "",
  full_name: "",
  experience: "",
  specialities: [],
  phone_number: "",
  profile_pic: null,
  certification: [],
  confirm_password: "",
  saudireps_number: "",
  certificate_title: [],
  is_currently_working: "",
  term_and_condition: false,
  profile_availability: [{ day: "", starttime: "", endtime: "" }],
  subscription_plans: [
    { price: "", membership_type: "Trainer", duration: "1" },
    { price: "", membership_type: "Trainer", duration: "2" },
    { price: "", membership_type: "Trainer", duration: "3" },
  ],
};

export const TRAINER_EDIT_PROFILE_INITIAL_VALUES = {
  bio: "",
  role: "",
  email: "",
  gender: "",
  stc_pay: "",
  password: "",
  full_name: "",
  experience: "",
  specialities: [],
  phone_number: "",
  profile_pic: null,
  certification: [],
  confirm_password: "",
  saudireps_number: "",
  certificate_title: [],
  is_currently_working: "",
  profile_availability: [{ day: "", starttime: "", endtime: "" }],
};

export const NUTRITIONIST_SIGNUP_INITIAL_VALUES = {
  bio: "",
  email: "",
  gender: "",
  stc_pay: "",
  password: "",
  full_name: "",
  experience: "",
  phone_number: "",
  profile_pic: null,
  certification: [],
  license_number: "",
  role: "Nutritionist",
  confirm_password: "",
  certificate_title: [],
  is_currently_working: "",
  term_and_condition: false,
  profile_availability: [{ day: "", starttime: "", endtime: "" }],
  subscription_plans: [
    { price: "", membership_type: "Nutrition", duration: "1" },
    { price: "", membership_type: "Nutrition", duration: "2" },
    { price: "", membership_type: "Nutrition", duration: "3" },
  ],
};

export const NUTRITIONIST_EDIT_PROFILE_INITIAL_VALUES = {
  bio: "",
  email: "",
  gender: "",
  stc_pay: "",
  password: "",
  full_name: "",
  experience: "",
  phone_number: "",
  profile_pic: null,
  certification: [],
  license_number: "",
  role: "Nutritionist",
  confirm_password: "",
  certificate_title: [],
  is_currently_working: "",
  profile_availability: [{ day: "", starttime: "", endtime: "" }],
};

export const TRAINER_NUTRITIONIST_SIGNUP_INITIAL_VALUES = {
  bio: "",
  email: "",
  gender: "",
  stc_pay: "",
  password: "",
  full_name: "",
  experience: "",
  phone_number: "",
  specialities: [],
  profile_pic: null,
  certification: [],
  license_number: "",
  confirm_password: "",
  saudireps_number: "",
  certificate_title: [],
  is_currently_working: "",
  term_and_condition: false,
  role: "Trainer And Nutritionist",
  profile_availability: [{ day: "", starttime: "", endtime: "" }],
};

export const CHANGE_PASSWORD_INITIAL_VALUES = {
  new_password: "",
  confirm_password: "",
  previous_password: "",
};

export const FORGOT_PASSWORD_INITIAL_VALUES = {
  email: "",
};

export const NEW_PASSWORD_INITIAL_VALUES = {
  new_password: "",
  confirm_password: "",
};

export const PAYMENT_METHOD_DETAIL_INITIAL_VALUES = {
  city: "",
  state: "",
  amount: "",
  entity: "",
  country: "",
  street1: "",
  surname: "",
  postcode: "",
  givenName: "",
  promo_code: "",
  currency: "SAR",
  paymentType: "DB",
  use_wallet: false,
};

export const ADD_CATEGORY_INITIAL_VALUES = {
  title: "",
  title_ar: "",
};

export const ADD_SUB_CATEGORY_INITIAL_VALUES = {
  title: "",
  title_ar: "",
};

export const ADD_EXERCISE_INITIAL_VALUES = {
  title: "",
  title_ar: "",
  warm_up: false,
  exercise_videos: null,
  exercise_part_text: [""],
  exercise_part_text_ar: [""],
};
<<<<<<< HEAD
export const INITIAL_VALUES_PROMO_CODE = {
  code: "",
  type: "",
  value: "",
  user_limit: "",
  expiry_date: "",
=======

export const ADD_PROGRESS_INITIAL_VALUES = {
  weight: "",
  protien: "",
  body_fat_mass: "",
  skeletal_muscel_mass: "",
>>>>>>> 8ec4aeeb512432ee92093521916aecbbfd7223fc
};
