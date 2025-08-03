import { Container } from "reactstrap";
import React, { useEffect } from "react";
import styles from "./style.module.scss";
import { useSelector } from "react-redux";
import TopBar from "../../../Shared/TopBar";
import { FaWhatsapp } from "react-icons/fa6";
import { useLocation, Link } from "react-router-dom";
import {
  useTrackSignupNavigation,
  useCheckFromSignup,
} from "../../../hooks/useSignupNavigation";
import AppsFlyerScript from "../../../components/AppsFlyerScript";

const GeneralLayout = (props) => {
  const { pathname } = useLocation();
  const { user } = useSelector((state) => state.user);

  // Track signup navigation
  useTrackSignupNavigation();

  // Check if AppsFlyer script should be shown
  const { shouldShowAppsFlyerScript } = useCheckFromSignup();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [pathname]);

  return (
    <React.Fragment>
      {/* Conditionally render AppsFlyer script if navigated from signup */}
      {shouldShowAppsFlyerScript() && <AppsFlyerScript />}

      <Container fluid className={`bg-dark p-0 ${styles.overlayBackgound}`}>
        <TopBar
          isPublic={props.isPublic}
          isGuest={props.isGuest}
          isPrivate={props.isPrivate}
          isAuth={props.isAuth}
        />
        {user === null && (
          <button
            className={`rounded-circle position-fixed ${styles.whatsappBtnOverlay} bottom-0 m-3  z-3  border-0 shadow-md p-2`}
          >
            <Link
              className="text-decoration-none"
              to="https://wa.me/+966549836605"
              target="_blank"
            >
              <FaWhatsapp className="text-white" size="30px" />
            </Link>
          </button>
        )}
        <Container
          fluid
          className={`p-0 ${
            props?.theme === "light" ? styles.lightBg : styles.transparentBg
          }`}
        >
          {props.children}
        </Container>
      </Container>
    </React.Fragment>
  );
};

export default GeneralLayout;
