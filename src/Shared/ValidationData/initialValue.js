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
  email: "",
  gender: "",
  stc_pay: "",
  password: "",
  full_name: "",
  experience: "",
  role: "Trainer",
  specialities: [],
  profile_pic: null,
  certification: [],
  confirm_password: "",
  saudireps_number: "",
  certificate_title: [],
  is_currently_working: "",
  term_and_condition: false,
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
  profile_pic: null,
  certification: [],
  license_number: "",
  role: "Nutritionist",
  confirm_password: "",
  certificate_title: [],
  is_currently_working: "",
  term_and_condition: false,
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
