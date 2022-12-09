import React, { useState } from "react";
import DropdownHeading from "./DropdownHeading";
import { RiBarChartHorizontalLine } from "react-icons/ri";

const Dropdown = ({ children, className }) => {
  let [show, setShow] = useState(false);

  return (
    <div className={className}>
      <DropdownHeading
        show={show}
        setShow={setShow}
        className="flex items-center gap-x-2.5 py-[23px] cursor-pointer"
      >
        <RiBarChartHorizontalLine />

        <span> Shop by Category </span>
      </DropdownHeading>

      {show && children}
    </div>
  );
};

export default Dropdown;
