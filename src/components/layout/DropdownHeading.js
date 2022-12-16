import React from "react";

const DropdownHeading = ({ children, className, dropref }) => {
  return (
    <>
      <div className={className} ref={dropref}>
        {children}
      </div>
    </>
  );
};

export default DropdownHeading;
