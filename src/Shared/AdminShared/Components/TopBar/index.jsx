import React, { useState } from "react";
import {
  Navbar,
  Button,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import { FaAlignLeft } from "react-icons/fa";

const TopBar = ({ toggleSidebar }) => {
  const [TopBarIsOpen, setTopBarOpen] = useState(true);
  const toggleTopBar = () => setTopBarOpen(!TopBarIsOpen);

  return (
    <Navbar
      color="light"
      light
      className="navbar shadow-sm px-3 bg-white d-flex align-items-center justify-content-between rounded"
      expand="md"
    >
      <Button color="info" onClick={toggleSidebar}>
        <FaAlignLeft />
      </Button>
      <NavbarToggler onClick={toggleTopBar} />
      <Collapse isOpen={TopBarIsOpen} navbar className="p-3">
        <Nav className="m-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to={"/page-1"}>
              page 1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/page-2"}>
              page 2
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/page-3"}>
              page 3
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/page-4"}>
              page 4
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default TopBar;
