import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { CgMathMinus } from "react-icons/cg";

const SideBarMenuItemList = ({ subdrop, listTitle, children, color }) => {
  let [show, setShow] = useState(false);

  return (
    <>
      {subdrop && (
        <div
          onClick={() => setShow(!show)}
          className="flex cursor-pointer items-center justify-between border-b-[1px] border-smoke py-2 font-dm text-xs font-normal text-secondary lg:py-3 lg:text-sm xl:text-base 2xl:py-5"
        >
          <h2 className="font-dm text-xs font-normal text-secondary lg:text-sm xl:text-base">
            {color && (
              <span
                className="mr-2 inline-block h-[11px] w-[11px] rounded-[50%]"
                style={{ background: color }}
              ></span>
            )}

            {listTitle}
          </h2>

          {show ? (
            <CgMathMinus className="text-[8px] md:text-[12px] lg:text-sm 2xl:text-base" />
          ) : (
            <BsPlusLg className="text-[8px] md:text-[10px] lg:text-xs 2xl:text-sm" />
          )}
        </div>
      )}

      {show && <div className="md:pl-3"> {children} </div>}
    </>
  );
};

export default SideBarMenuItemList;
