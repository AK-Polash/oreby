import React from "react";

const InputBox = ({ title, placeholder, type, radioName }) => {
  return (
    <div>
      <h4 className="font-dm text-base font-bold text-primary"> {title} </h4>

      {type === "textArea" ? (
        <textarea
          className="w-full resize-none border-b border-smoke pt-2.5 pb-8 text-sm font-normal text-secondary outline-none placeholder:font-dm"
          placeholder={placeholder}
        />
      ) : type === "radio" ? (
        <input type="radio" name={radioName} />
      ) : type === "checkbox" ? (
        <input
          className="w-full border-b border-smoke pt-2.5 pb-4 text-sm font-normal text-secondary outline-none placeholder:font-dm"
          type="checkbox"
        />
      ) : type === "email" ? (
        <input
          className="w-full border-b border-smoke pt-2.5 pb-4 text-sm font-normal text-secondary outline-none placeholder:font-dm"
          type="email"
          placeholder={placeholder}
        />
      ) : type === "password" ? (
        <input
          className="w-full border-b border-smoke pt-2.5 pb-4 text-sm font-normal text-secondary outline-none placeholder:font-dm"
          type="password"
          placeholder={placeholder}
        />
      ) : (
        <input
          className="w-full border-b border-smoke pt-2.5 pb-4 text-sm font-normal text-secondary outline-none placeholder:font-dm"
          type="text"
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default InputBox;
