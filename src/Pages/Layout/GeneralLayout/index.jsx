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
      <Toaster />
      <TopBar
        isPublic={props.isPublic}
        isGuest={props.isGuest}
        isPrivate={props.isPrivate}
        isAuth={props.isAuth}
      />
      <Container
        fluid
        className={`p-0 ${
          !props?.isPublic
            ? styles.overlapContainer
            : props?.isGuest || props?.isAuth
            ? styles.overlapContainer
            : ""
        } ${props?.theme === "light" ? styles.lightBg : ""}`}
      >
        {props.children}
      </Container>
    </React.Fragment>
  );
};

export default GeneralLayout;
