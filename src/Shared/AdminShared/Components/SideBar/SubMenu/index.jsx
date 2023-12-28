import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Collapse, NavItem, NavLink } from "reactstrap";

const SubMenu = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggle = () => setCollapsed(!collapsed);
  const { icon, title, items } = props;

  return (
    <div>
      <NavItem onClick={toggle}>
        <NavLink className="dropdown-toggle justify-content-between me-5 pe-5">
          <div className="py-2 d-flex align-items-center gap-2">
            {icon}
            {title}
          </div>
        </NavLink>
      </NavItem>
      <Collapse isOpen={!collapsed} navbar className="bg-dark pl-5">
        {items.map((item, index) => (
          <NavItem key={index}>
            <NavLink tag={Link} to={item.target}>
              {item.title}
            </NavLink>
          </NavItem>
        ))}
      </Collapse>
    </div>
  );
};

export default SubMenu;
