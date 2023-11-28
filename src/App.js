// Import Swiper styles
import "./App.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
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

function withLayout(
  WrappedComponent,
  isPublic,
  isGuest,
  isPrivate,
  isAuth,
  theme = "black"
) {
  const admin = true;

  return class extends React.Component {
    render() {
      return (
        <>
          {admin ? (
            <AdminLayout>
              <WrappedComponent></WrappedComponent>
            </AdminLayout>
          ) : (
            <GeneralLayout
              isPublic={isPublic}
              isGuest={isGuest}
              isPrivate={isPrivate}
              isAuth={isAuth}
              theme={theme}
            >
              <WrappedComponent></WrappedComponent>
            </GeneralLayout>
          )}
        </>
      );
    }
  };
}

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
                  <Suspense fallback={<LoadingScreen />}>
                    {!route.isPublic ? (
                      <PrivateRoute
                        props={route}
                        role={route?.role}
                        Component={withLayout(
                          Component,
                          route?.isPublic,
                          route?.isGuest,
                          route?.isPrivate,
                          route?.isAuth,
                          route?.theme
                        )}
                      />
                    ) : (
                      <PublicRoute
                        props={route}
                        role={route?.role}
                        Component={withLayout(
                          Component,
                          route?.isPublic,
                          route?.isGuest,
                          route?.isPrivate,
                          route?.isAuth,
                          route?.theme
                        )}
                      />
                    )}
                  </Suspense>
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
