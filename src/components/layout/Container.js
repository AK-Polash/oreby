import React from "react";

const Container = ({ children }) => {
  return (
    <div className="max-w-container mx-auto px-2.5 py-2.5 lg:px-3.5 lg:py-0">
      {children}
    </div>
  );
};

export default Container;
