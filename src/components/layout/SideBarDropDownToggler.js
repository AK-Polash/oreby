import React from "react";

const SideBarDropDownToggler = (props) => {
  return (
    <>
      {props.withIcon ? (
        <div className={props.mainClassName} onClick={props.onClick}>
          <props.as className={props.headingClassName}>
            {props.heading}
          </props.as>

          {props.toggler ? (
            <props.iconOne className={props.iconOneClassName} />
          ) : (
            <props.iconTwo className={props.iconTwoClassName} />
          )}
        </div>
      ) : (
        <props.as>{props.heading}</props.as>
      )}
    </>
  );
};

export default SideBarDropDownToggler;
