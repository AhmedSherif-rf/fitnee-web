const {
  TRAINEE_ROLE,
  TRAINEE_TYPE,
  TRAINER_ROLE,
  TRAINER_TYPE,
  TRAINEE_INITIAL_URL,
  SERVICE_PROVIDER_INITIAL_URL,
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
      initialUrl = SERVICE_PROVIDER_INITIAL_URL;
      break;
    default:
      break;
  }
  console.log(initialUrl, role);

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

const copyToClipboard = (text) => {
  const textField = document.createElement("textarea");
  textField.innerText = text;
  document.body.appendChild(textField);
  textField.select();
  document.execCommand("copy");
  document.body.removeChild(textField);
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
  } else if (roleType === TRAINER_TYPE && user === null) {
    return [
      "bio",
      "role",
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
  }
};

module.exports = {
  getInitialUrl,
  createFormData,
  copyToClipboard,
  getGuestDataLimit,
  filterSignUpFields,
  setLanguageInStorage,
  getLanguageFromStorage,
  setTraineeInitialValuesForTrainee,
};
