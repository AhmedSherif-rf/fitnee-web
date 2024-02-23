import React from "react";
import Topbar from "../TopBar";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Container, Card, Row, Col } from "reactstrap";

const Content = ({ children, sidebarIsOpen, toggleSidebar }) => {
  const shouldHideContent = sidebarIsOpen && window.innerWidth < 768;

  return (
    <Container
      fluid
      className={`${styles.containerAfter} ${classNames("content", {
        "is-open": sidebarIsOpen,
        "d-none": shouldHideContent,
      })}`}
    >
      <Row className="position-absolute px-2 w-100" style={{ zIndex: "2" }}>
        <Col md="12 ">
          <Topbar toggleSidebar={toggleSidebar} />
          <Card
            className="BorderRadius px-3 pb-1"
            style={{ height: "84vh", overflowY: "hidden" }}
          >
            <div className="h-100">{children}</div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Content;
