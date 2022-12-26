import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Bredcrumb = ({ title }) => {
  return (
    <div className="pt-[124px] pb-32">
      <h1 className="pb-2 font-dm text-[49px] font-bold text-primary">
        {title}
      </h1>
      <p className="flex items-center gap-x-1 font-dm text-xs font-normal text-secondary">
        <Link to="/"> Home </Link>
        <FaAngleRight className="!text-[10px] font-normal" />
        {window.location.pathname.split("/")[1]}
      </p>
    </div>
  );
};

export default Bredcrumb;
