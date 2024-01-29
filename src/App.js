import "./App.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import routes from "./Routes/AllRoutes";
import functions from "./utils/functions";
import { useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";
import "./firebase.js";
import { adminRole } from "./Routes/routeConfig";
import React, { Suspense, useEffect, useState } from "react";
import { PublicRoute } from "./Routes/PublicRoutes";
import { DEFAULT_LANGUAGE } from "./utils/constants";
import AdminLayout from "./Pages/Layout/AdminLayout";
import { PrivateRoute } from "./Routes/PrivateRoutes";
import GeneralLayout from "./Pages/Layout/GeneralLayout";
import LoadingScreen from "./HelperMethods/LoadingScreen";
import { setLanguage } from "./Redux/features/Language/languageSlice";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { getToken } from "firebase/messaging";
import { getNotificationToken, onMessageListener } from "./firebase.js";

function App() {
  const dispatch = useDispatch();
  const [isTokenFound, setTokenFound] = useState(false);

  getNotificationToken(setTokenFound);

  // useEffect(() => {

  // }, []);

  onMessageListener().then(payload => {
    // setShow(true);
    // setNotification({title: payload.notification.title, body: payload.notification.body})
    console.log(payload);
  }).catch(err => console.log('failed: ', err));

  useEffect(() => {
    if (localStorage.getItem("Website_Language__fitnee") === null) {
      functions.setLanguageInStorage(DEFAULT_LANGUAGE);
      dispatch(setLanguage(DEFAULT_LANGUAGE));
    } else {
      dispatch(setLanguage(localStorage.getItem("Website_Language__fitnee")));
    }
  }, [dispatch]);

  return (
    <React.Fragment>
      <Toaster />
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
                    {route.role !== adminRole ? (
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
