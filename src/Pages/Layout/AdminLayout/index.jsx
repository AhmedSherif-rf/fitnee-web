import React from "react";
import { Container } from "reactstrap";
import styles from "./style.module.scss";

const AdminLayout = (props) => {
  return (
    <React.Fragment>
      navbar/sidebar
      <Container
        fluid
        className={`p-0 ${
          !props?.isPublic
            ? styles.overlapContainer
            : props?.isGuest || props?.isAuth
            ? styles.overlapContainer
            : ""
        }`}
      >
        {props.children}
      </Container>
    </React.Fragment>
  );
};

export default AdminLayout;
