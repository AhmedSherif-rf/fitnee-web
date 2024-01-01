const {
  TRAINEE_ROLE,
  TRAINEE_TYPE,
  TRAINER_ROLE,
  TRAINEE_INITIAL_URL,
  TRAINER_INITIAL_URL,
} = require("./constants");

const setLanguageInStorage = (language) => {
  localStorage.setItem("Website_Language__fitnee", language);
};

const getLanguageFromStorage = () => {
  return localStorage.getItem("Website_Language__fitnee");
};

const getGuestDataLimit = () => {
  return 5;
};

const getInitialUrl = (role) => {
  let initialUrl = "";

  switch (role) {
    case TRAINEE_ROLE:
      initialUrl = TRAINEE_INITIAL_URL;
      break;
    case TRAINER_ROLE:
      initialUrl = TRAINER_INITIAL_URL;
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
      formData.append(key, data[key]);
    }
  }

  return formData;
};

const setTraineeInitialValuesForTrainee = (initalValues, user) => {
  return {
    ...initalValues,
    smm: user?.smm,
    bfm: user?.bfm,
    tbw: user?.tbw,
    goal: user?.goal,
    email: user?.email,
    level: user?.level,
    gender: user?.gender,
    weight: user?.weight,
    height: user?.weight,
    protein: user?.protein,
    last_name: user?.last_name,
    first_name: user?.first_name,
    phone_number: user?.phone_number,
    date_of_birth: user?.date_of_birth,
    training_goal: user?.training_goal,
    food_sensitive: user?.food_sensitive,
    injury_details: user?.injury_details,
  };
};

const filterSignUpFields = (roleType, user) => {
  if (roleType === TRAINEE_TYPE && user === null) {
    return [
      "smm",
      "bfm",
      "tbw",
      "goal",
      "email",
      "level",
      "gender",
      "weight",
      "height",
      "protein",
      "password",
      "last_name",
      "first_name",
      "body_images",
      "profile_pic",
      "phone_number",
      "date_of_birth",
      "training_goal",
      "food_sensitive",
      "injury_details",
      "confirm_password",
    ];
  } else if (roleType === TRAINEE_TYPE && user !== null) {
    return [
      "smm",
      "bfm",
      "tbw",
      "goal",
      "level",
      "gender",
      "weight",
      "height",
      "protein",
      "last_name",
      "first_name",
      "body_images",
      "profile_pic",
      "phone_number",
      "date_of_birth",
      "training_goal",
      "food_sensitive",
      "injury_details",
    ];
  }
};

module.exports = {
  getInitialUrl,
  createFormData,
  getGuestDataLimit,
  filterSignUpFields,
  setLanguageInStorage,
  getLanguageFromStorage,
  setTraineeInitialValuesForTrainee,
};
