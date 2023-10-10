const setLanguageInStorage = (language) => {
  localStorage.setItem("Website_Language__fitnee", language);
};

const getLanguageFromStorage = () => {
  return localStorage.getItem("Website_Language__fitnee");
};

const getGuestDataLimit = () => {
  return 5;
};

module.exports = { setLanguageInStorage, getLanguageFromStorage, getGuestDataLimit };
