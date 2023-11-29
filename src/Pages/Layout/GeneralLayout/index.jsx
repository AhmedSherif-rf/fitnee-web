import React from "react";
import { Container } from "reactstrap";
import { Toaster } from "react-hot-toast";
import styles from "./style.module.scss";
import TopBar from "../../../Shared/TopBar";

const GeneralLayout = (props) => {
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
