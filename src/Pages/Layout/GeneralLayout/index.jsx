import { Container } from "reactstrap";
import React, { useEffect } from "react";
import styles from "./style.module.scss";
import { Toaster } from "react-hot-toast";
import TopBar from "../../../Shared/TopBar";
import { useLocation } from "react-router-dom";

const GeneralLayout = (props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [pathname]);

  return (
    <React.Fragment>
      <Container
        fluid
        className={`bg-dark p-0 ${
          props.isPrivate ? styles.overlayBackgound : ""
        }`}
      >
        <Toaster />
        <TopBar
          isPublic={props.isPublic}
          isGuest={props.isGuest}
          isPrivate={props.isPrivate}
          isAuth={props.isAuth}
        />
        <Container
          fluid
          className={`${
            !props?.isPublic
              ? styles.overlapContainer
              : props?.isGuest || props?.isAuth
              ? styles.overlapContainer
              : "p-0"
          } ${
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
