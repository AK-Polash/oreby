import React from "react";

const Badge = ({ title }) => {
  return (
    <span className="absolute top-5 left-5 bg-primary py-2 px-[30px] font-dm text-sm font-bold text-pure">
      {title}
    </span>
  );
};

export default Badge;
