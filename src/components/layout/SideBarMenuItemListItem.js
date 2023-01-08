import React from "react";

const SideBarMenuItemListItem = ({
  className,
  listTitle,
  isSingle,
  listColor,
  subChild,
  children,
}) => {
  return (
    <div className={className}>
      {!subChild && (
        <>
          {!isSingle && (
            <div
              className="float-left mt-[2px] mr-2 h-[11px] w-[11px] rounded-[50%] md:mt-[3px] lg:mt-[4px] xl:mr-[10px] xl:mt-[6px] "
              style={{ background: listColor }}
            ></div>
          )}

          <span className="overflow-hidden"> {listTitle} </span>
        </>
      )}

      {children}
    </div>
  );
};

export default SideBarMenuItemListItem;
