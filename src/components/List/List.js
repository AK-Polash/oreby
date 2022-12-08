import React from "react";
import ListItem from "../listItem/ListItem";

const List = () => {
  return (
    <ul>
      <ListItem title="Home" />
      <ListItem title="About" />
      <ListItem title="Services" />
      <ListItem title="Contact" />
    </ul>
  );
};

export default List;
