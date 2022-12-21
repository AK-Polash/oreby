import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ item, className, href, linkStyle }) => {
  return (
    <li className={className}>
      <Link className={linkStyle} to={href}>
        {item}
      </Link>
    </li>
  );
};

export default ListItem;
