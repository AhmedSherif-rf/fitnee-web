import { Container } from "reactstrap";
import React, { useEffect } from "react";
import styles from "./style.module.scss";
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
      <Container fluid className={`bg-dark p-0 ${styles.overlayBackgound}`}>
        <TopBar
          isPublic={props.isPublic}
          isGuest={props.isGuest}
          isPrivate={props.isPrivate}
          isAuth={props.isAuth}
        />
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
