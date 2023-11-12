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

  import("./constants").then((item) => {
    switch (role) {
      case item.TRAINEE_ROLE:
        initialUrl = item.TRAINEE_INITIAL_URL;
        break;

      default:
        break;
    }
  });

  return initialUrl;
};

module.exports = {
  setLanguageInStorage,
  getLanguageFromStorage,
  getGuestDataLimit,
  getInitialUrl,
};
