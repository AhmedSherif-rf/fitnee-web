import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SIGNUP_NAVIGATION_KEY = "fitnee_from_signup";

export const useTrackSignupNavigation = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if current path is a signup route
    if (location.pathname.startsWith("/signUp/")) {
      // Mark that user is navigating from signup
      sessionStorage.setItem(SIGNUP_NAVIGATION_KEY, "true");
    }
  }, [location.pathname]);
};

export const useCheckFromSignup = () => {
  const location = useLocation();

  const isFromSignup = () => {
    return sessionStorage.getItem(SIGNUP_NAVIGATION_KEY) === "true";
  };

  const shouldShowAppsFlyerScript = () => {
    const targetRoutes = [
      "/verifyOtp/signUp",
      "/trainee/dashboard",
      "/serviceProvider/dashboard",
      "/admin/dashboard",
    ];

    const currentPath = location.pathname;
    const isTargetRoute = targetRoutes.some((route) => currentPath === route);

    return isFromSignup() && isTargetRoute;
  };

  const clearSignupFlag = () => {
    sessionStorage.removeItem(SIGNUP_NAVIGATION_KEY);
  };

  return {
    isFromSignup,
    shouldShowAppsFlyerScript,
    clearSignupFlag,
  };
};
