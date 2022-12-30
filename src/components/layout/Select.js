import React from "react";

const Select = ({ id, className, children }) => {
  return (
    <select id={id} className={className}>
      {children}
    </select>
  );
};

export default Select;
