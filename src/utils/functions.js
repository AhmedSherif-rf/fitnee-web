const {
  ADMIN_ROLE,
  TRAINEE_ROLE,
  TRAINEE_TYPE,
  TRAINER_ROLE,
  TRAINER_TYPE,
  NUTRITIONIST_TYPE,
  NUTRITIONIST_ROLE,
  ADMIN_INITIAL_URL,
  TRAINEE_INITIAL_URL,
  TRAINER_NUTRITIONIST_ROLE,
  TRAINER_NUTRITIONIST_TYPE,
  SERVICE_PROVIDER_INITIAL_URL,
} = require("./constants");

const setLanguageInStorage = (language) => {
  localStorage.setItem("Website_Language__fitnee", language);
};

const getLanguageFromStorage = () => {
  return localStorage.getItem("Website_Language__fitnee");
};

const getInitialUrl = (role) => {
  let initialUrl = "";

  switch (role) {
    case TRAINEE_ROLE:
      initialUrl = TRAINEE_INITIAL_URL;
      break;
    case TRAINER_ROLE:
      initialUrl = SERVICE_PROVIDER_INITIAL_URL;
      break;
    case NUTRITIONIST_ROLE:
      initialUrl = SERVICE_PROVIDER_INITIAL_URL;
      break;
    case TRAINER_NUTRITIONIST_ROLE:
      initialUrl = SERVICE_PROVIDER_INITIAL_URL;
      break;
    case ADMIN_ROLE:
      initialUrl = ADMIN_INITIAL_URL;
      break;
    default:
      break;
  }

  return initialUrl;
};

const createFormData = (data) => {
  const formData = new FormData();

  for (const key in data) {
    if (data.hasOwnProperty(key) && data[key] !== "" && data[key] !== null) {
      if (key === "certification" && Array.isArray(data[key])) {
        data[key].forEach((certification, index) => {
          formData.append(`certification`, certification);
        });
      } else if (Array.isArray(data[key])) {
        formData.append(key, JSON.stringify(data[key]));
      } else {
        formData.append(key, data[key]);
      }
    }
  }

  return formData;
};

const copyToClipboard = (text) => {
  const textField = document.createElement("textarea");
  textField.innerText = text;
  document.body.appendChild(textField);
  textField.select();
  document.execCommand("copy");
  document.body.removeChild(textField);
};

const setTraineeInitialValues = (initalValues, user) => {
  return {
    ...initalValues,
    goal: user?.goal,
    email: user?.email,
    level: user?.level,
    gender: user?.gender,
    weight: user?.weight,
    height: user?.height,
    protien: user?.protien,
    last_name: user?.last_name,
    first_name: user?.first_name,
    phone_number: user?.phone_number,
    date_of_birth: user?.date_of_birth,
    training_goal: user?.training_goal,
    body_fat_mass: user?.body_fat_mass,
    food_sensitive: user?.food_sensitive,
    injury_details: user?.injury_details,
    total_body_water: user?.total_body_water,
    skeletal_muscel_mass: user?.skeletal_muscel_mass,
  };
};

const setTrainerInitialValues = (initalValues, user) => {
  return {
    ...initalValues,
    bio: user?.bio,
    gender: user?.gender,
    full_name: user?.full_name,
    experience: user?.experience,
    is_currently_working: user?.is_currently_working,
  };
};

const setNutritionistInitialValues = (initalValues, user) => {
  return {
    ...initalValues,
    bio: user?.bio,
    gender: user?.gender,
    full_name: user?.full_name,
    experience: user?.experience,
    is_currently_working: user?.is_currently_working,
  };
};

const setTrainerNutritionistInitialValues = (initalValues, user) => {
  return {
    ...initalValues,
    bio: user?.bio,
    gender: user?.gender,
    full_name: user?.full_name,
    experience: user?.experience,
    is_currently_working: user?.is_currently_working,
  };
};

const filterSignUpFields = (roleType, user) => {
  if (roleType === TRAINEE_TYPE && user === null) {
    return [
      "goal",
      "email",
      "level",
      "gender",
      "weight",
      "height",
      "protien",
      "password",
      "last_name",
      "first_name",
      "body_images",
      "profile_pic",
      "phone_number",
      "date_of_birth",
      "training_goal",
      "body_fat_mass",
      "food_sensitive",
      "injury_details",
      "confirm_password",
      "total_body_water",
      "term_and_condition",
      "skeletal_muscel_mass",
    ];
  } else if (roleType === TRAINEE_TYPE && user !== null) {
    return [
      "goal",
      "level",
      "gender",
      "weight",
      "height",
      "protien",
      "last_name",
      "first_name",
      "body_images",
      "profile_pic",
      "phone_number",
      "date_of_birth",
      "body_fat_mass",
      "training_goal",
      "food_sensitive",
      "injury_details",
      "total_body_water",
      "skeletal_muscel_mass",
    ];
  } else if (roleType === TRAINER_TYPE && user === null) {
    return [
      "bio",
      "email",
      "gender",
      "stc_pay",
      "password",
      "full_name",
      "experience",
      "profile_pic",
      "specialities",
      "certification",
      "confirm_password",
      "saudireps_number",
      "certificate_title",
      "term_and_condition",
      "profile_availability",
      "is_currently_working",
    ];
  } else if (roleType === TRAINER_TYPE && user !== null) {
    return [
      "bio",
      "gender",
      "full_name",
      "experience",
      "profile_pic",
      "is_currently_working",
    ];
  } else if (roleType === NUTRITIONIST_TYPE && user === null) {
    return [
      "bio",
      "email",
      "gender",
      "stc_pay",
      "password",
      "full_name",
      "experience",
      "profile_pic",
      "certification",
      "license_number",
      "confirm_password",
      "certificate_title",
      "term_and_condition",
      "profile_availability",
      "is_currently_working",
    ];
  } else if (roleType === NUTRITIONIST_TYPE && user !== null) {
    return [
      "bio",
      "gender",
      "full_name",
      "experience",
      "profile_pic",
      "is_currently_working",
    ];
  } else if (roleType === TRAINER_NUTRITIONIST_TYPE && user === null) {
    return [
      "bio",
      "email",
      "gender",
      "stc_pay",
      "password",
      "full_name",
      "experience",
      "profile_pic",
      "specialities",
      "certification",
      "license_number",
      "saudireps_number",
      "confirm_password",
      "certificate_title",
      "term_and_condition",
      "profile_availability",
      "is_currently_working",
    ];
  } else if (roleType === TRAINER_NUTRITIONIST_TYPE && user !== null) {
    return [
      "bio",
      "gender",
      "full_name",
      "experience",
      "profile_pic",
      "is_currently_working",
    ];
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getInitialUrl,
  createFormData,
  copyToClipboard,
  filterSignUpFields,
  setLanguageInStorage,
  getLanguageFromStorage,
  setTraineeInitialValues,
  setTrainerInitialValues,
  setNutritionistInitialValues,
  setTrainerNutritionistInitialValues,
};
