import React from "react";
import Topbar from "../TopBar";
import styles from "./style.module.scss";
import classNames from "classnames";
import { Container, Card, Row, Col } from "reactstrap";

const Content = ({ children, sidebarIsOpen, toggleSidebar }) => (
<Container
  fluid
  className={`${styles.containerAfter} ${classNames("content", { "is-open": sidebarIsOpen })}`}
>
    
    <Row className="position-absolute pe-md-3 ps-md-1" style={{zIndex:"2"}}>
      <Col md="12">
        <Topbar toggleSidebar={toggleSidebar} />
        <Card className="border-0 BorderRadius h-75 py-3">{children}</Card>
      </Col>
    </Row>
   
  </Container>
);

export default Content;
