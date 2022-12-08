import React from "react";

const Image = ({ source, className, alt }) => {
  return (
    <>
      <img src={source} className={className} alt={alt} />
    </>
  );
};

export default Image;
