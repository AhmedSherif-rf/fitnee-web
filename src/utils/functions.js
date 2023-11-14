const { TRAINEE_ROLE, TRAINEE_INITIAL_URL } = require("./constants");

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
    default:
      break;
  }

  return initialUrl;
};

module.exports = {
  setLanguageInStorage,
  getLanguageFromStorage,
  getGuestDataLimit,
  getInitialUrl,
};
