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
        <NavLink className="dropdown-toggle py-3 d-flex align-items-center gap-2">
          {icon}
          {title}
        </NavLink>
      </NavItem>
      <Collapse isOpen={!collapsed} navbar className="bg-dark pl-4">
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
