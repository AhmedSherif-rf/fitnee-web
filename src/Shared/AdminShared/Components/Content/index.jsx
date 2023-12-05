import React from "react";
import Topbar from "../TopBar";
import classNames from "classnames";
import { Container, Card } from "reactstrap";

const Content = ({ children, sidebarIsOpen, toggleSidebar }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    <Topbar toggleSidebar={toggleSidebar} />
    <Card className="border-0 BorderRadius h-75 py-3">{children}</Card>
  </Container>
);

export default Content;
