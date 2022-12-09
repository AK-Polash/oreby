import React from "react";

const DropdownHeading = ({ children, className, show, setShow }) => {
  return (
    <>
      <div
        onClick={() => {
          setShow(!show);
        }}
        className={className}
      >
        {children}
      </div>
    </>
  );
};

export default DropdownHeading;
