const {
  TRAINEE_ROLE,
  TRAINEE_INITIAL_URL,
  TRAINER_ROLE,
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
    if (data.hasOwnProperty(key)) {
      formData.append(key, data[key]);
    }
  }

  return formData;
};

module.exports = {
  getInitialUrl,
  createFormData,
  getGuestDataLimit,
  setLanguageInStorage,
  getLanguageFromStorage,
};
