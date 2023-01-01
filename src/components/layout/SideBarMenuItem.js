import React, { useState } from "react";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import SideBarMenuItemList from "./SideBarMenuItemList";
import SideBarMenuItemListItem from "./SideBarMenuItemListItem";

const SideBarMenuItem = ({
  dropDown,
  heading,
  headingClassName,
  category,
  isSingle,
}) => {
  let [drop, setDrop] = useState(dropDown);
  let [show, setShow] = useState(true);

  return (
    <>
      {drop ? (
        <div className="mb-3 md:mb-5 lg:mb-7 2xl:mb-12">
          <div
            onClick={() => setShow(!show)}
            className="mb-[2px] flex cursor-pointer items-center justify-between lg:mb-1 2xl:mb-4"
          >
            <h3 className={headingClassName}> {heading} </h3>
            {show ? (
              <GoTriangleUp className="text-[8px] md:text-[10px] lg:text-xs 2xl:text-sm" />
            ) : (
              <GoTriangleDown className="text-[8px] md:text-[10px] lg:text-xs 2xl:text-sm" />
            )}
          </div>

          {show && (
            <SideBarMenuItemList className="w-full">
              {category.map((item, index) => (
                <SideBarMenuItemListItem
                  key={index}
                  className="border-b-[1px] border-smoke py-2 font-dm text-xs font-normal text-secondary lg:py-3 lg:text-sm xl:text-base 2xl:py-5"
                  isSingle={isSingle}
                  listTitle={item.title}
                  listColor={item.color}
                />
              ))}
            </SideBarMenuItemList>
          )}
        </div>
      ) : (
        <div>
          <h3 className={headingClassName}> {heading} </h3>
          <div>
            <p>one</p>
            <p>two</p>
            <p>three</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBarMenuItem;
