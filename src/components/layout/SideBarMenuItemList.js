import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const SideBarMenuItemList = ({ subdrop, listTitle, color, children }) => {
  let [show, setShow] = useState(false);

  return (
    <>
      {subdrop && (
        <div
          onClick={() => setShow(!show)}
          className="flex cursor-pointer items-center justify-between border-b-[1px] border-smoke py-2 font-dm text-xs font-normal text-secondary lg:py-3 lg:text-sm xl:text-base 2xl:py-5"
        >
          <h2 className="font-dm text-base font-normal text-secondary">
            {color && (
              <span
                className="mr-2 inline-block h-[11px] w-[11px] rounded-[50%]"
                style={{ background: color }}
              ></span>
            )}

            {listTitle}
          </h2>

          {show ? (
            <FaMinus className="text-sm" />
          ) : (
            <FaPlus className="text-sm" />
          )}
        </div>
      )}

      {show && <div className="md:pl-3"> {children} </div>}
    </>
  );
};

export default SideBarMenuItemList;
