import { useEffect, useRef } from "react";

const PREVIOUS_PAGE_KEY = "fitnee_previous_page";

export const useAppsFlyerForPage = (excludedPages = []) => {
  const currentPageRef = useRef(null);

  useEffect(() => {
    // Store current page as previous page for next navigation
    return () => {
      if (currentPageRef.current) {
        sessionStorage.setItem(PREVIOUS_PAGE_KEY, currentPageRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Store current page path
    currentPageRef.current = window.location.pathname;
  }, []);

  const shouldShowAppsFlyerScript = () => {
    const previousPage = sessionStorage.getItem(PREVIOUS_PAGE_KEY);

    // If no previous page recorded, show the script
    if (!previousPage) {
      return true;
    }

    // Check if previous page is in the excluded list
    const isFromExcludedPage = excludedPages.some(
      (excludedPage) =>
        previousPage === excludedPage || previousPage.startsWith(excludedPage)
    );

    // Show script if NOT coming from excluded pages
    return !isFromExcludedPage;
  };

  return {
    shouldShowAppsFlyerScript,
  };
};
