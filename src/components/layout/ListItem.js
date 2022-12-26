import React from "react";
import { NavLink } from "react-router-dom";

const ListItem = ({ item, className, href, linkStyle }) => {
  return (
    <li className={className}>
      <NavLink className={linkStyle} to={href}>
        {item}
      </NavLink>
    </li>
  );
};

export default ListItem;
