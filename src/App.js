// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import "./App.css";
import routes from "./Routes/AllRoutes";
import { useDispatch } from "react-redux";
import React, { Suspense, useEffect } from "react";
import { PublicRoute } from "./Routes/PublicRoutes";
import { DEFAULT_LANGUAGE } from "./utils/constants";
import AdminLayout from "./Pages/Layout/AdminLayout";
import { PrivateRoute } from "./Routes/PrivateRoutes";
import { setLanguageInStorage } from "./utils/functions";
import GeneralLayout from "./Pages/Layout/GeneralLayout";
import LoadingScreen from "./HelperMethods/LoadingScreen";
import { setLanguage } from "./Redux/features/Language/languageSlice";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("Website_Language__fitnee") === null) {
      setLanguageInStorage(DEFAULT_LANGUAGE);
      dispatch(setLanguage(DEFAULT_LANGUAGE));
    } else {
      dispatch(setLanguage(localStorage.getItem("Website_Language__fitnee")));
    }
  }, [dispatch]);

  return (
    <React.Fragment>
      <Router>
        <Routes>
          {routes.map((route, index) => {
            const Component = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                element={
                  <>
                    {true ? (
                      <GeneralLayout
                        isPublic={route.isPublic}
                        isGuest={route.isGuest}
                        isPrivate={route.isPrivate}
                        isAuth={route.isAuth}
                        theme={route.theme ?? "black"}
                      >
                        <Suspense fallback={<LoadingScreen />}>
                          {!route.isPublic ? (
                            <PrivateRoute
                              props={route}
                              role={route?.role}
                              Component={Component}
                            />
                          ) : (
                            <PublicRoute
                              props={route}
                              role={route?.role}
                              Component={Component}
                            />
                          )}
                        </Suspense>
                      </GeneralLayout>
                    ) : (
                      <AdminLayout
                        isPublic={route.isPublic}
                        isGuest={route.isGuest}
                        isPrivate={route.isPrivate}
                        isAuth={route.isAuth}
                        theme={route.theme ?? "black"}
                      >
                        <Suspense fallback={<LoadingScreen />}>
                          {!route.isPublic ? (
                            <PrivateRoute
                              props={route}
                              role={route?.role}
                              Component={Component}
                            />
                          ) : (
                            <PublicRoute
                              props={route}
                              role={route?.role}
                              Component={Component}
                            />
                          )}
                        </Suspense>
                      </AdminLayout>
                    )}
                  </>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
