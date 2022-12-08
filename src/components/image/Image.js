import React from "react";

const Image = ({ source }) => {
  return (
    <div>
      <img src={source} width="100px" />
    </div>
  );
};

export default Image;
