import React from "react";
import { Container } from "reactstrap";
import styles from "./style.module.scss";
import TopBar from "../../../Shared/TopBar";

const GeneralLayout = (props) => {
  return (
    <React.Fragment>
      <TopBar isPublic={props?.isPublic} isGuest={props?.isGuest} />
      <Container
        fluid
        className={`p-0 ${
          !props?.isPublic
            ? styles.overlapContainer
            : props?.isGuest
            ? styles.overlapContainer
            : ""
        }`}
      >
        {props.children}
      </Container>
    </React.Fragment>
  );
};

export default GeneralLayout;
