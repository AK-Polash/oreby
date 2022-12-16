import React, { useEffect, useRef, useState } from "react";
import DropdownHeading from "./DropdownHeading";
import { RiBarChartHorizontalLine } from "react-icons/ri";

const Dropdown = ({ children, className, title }) => {
  let [show, setShow] = useState(false);
  let ref = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (ref.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  return (
    <div className={className}>
      <DropdownHeading
        className="flex items-center gap-x-2.5 py-[23px] cursor-pointer"
        dropref={ref}
      >
        <RiBarChartHorizontalLine />

        <span> {title} </span>
      </DropdownHeading>

      {show && children}
    </div>
  );
};

export default Dropdown;
