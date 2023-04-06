import React from "react";

const Button = ({ btnText, type }) => {
  return (
    <>
      {type ? (
        <button
          className="h-[50px] w-[200px] border-2 border-transparent bg-primary font-dm text-sm font-bold text-white transition-all duration-100 ease-linear hover:border-2 hover:border-primary hover:bg-pure hover:text-primary"
          type={type}
        >
          {btnText}
        </button>
      ) : (
        <button className="h-[50px] w-[200px] border-2 border-transparent bg-primary font-dm text-sm font-bold text-white transition-all duration-100 ease-linear hover:border-2 hover:border-primary hover:bg-pure hover:text-primary">
          hover:bg-pure hover:text-primary{btnText}
        </button>
      )}
    </>
  );
};

export default Button;
