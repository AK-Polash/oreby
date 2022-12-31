import React from "react";

const SideBarMenuItemListItem = ({
  className,
  listTitle,
  isSingle,
  multipleClass,
  listColor,
}) => {
  return (
    <>
      {isSingle ? (
        <div className={className}> {listTitle} </div>
      ) : (
        <div className={multipleClass}>
          <div
            className="h-[11px] w-[11px] rounded-[50%]"
            style={{ background: listColor }}
          ></div>

          <div className={className}> {listTitle} </div>
        </div>
      )}
    </>
  );
};

export default SideBarMenuItemListItem;
