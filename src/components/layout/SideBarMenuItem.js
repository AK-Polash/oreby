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
        <div>
          <div
            onClick={() => setShow(!show)}
            className="flex cursor-pointer items-center justify-between"
          >
            <h3 className={headingClassName}> {heading} </h3>
            {show ? <GoTriangleUp /> : <GoTriangleDown />}
          </div>

          {show && (
            <SideBarMenuItemList className="w-full">
              {category.map((item, index) => (
                <SideBarMenuItemListItem
                  key={index}
                  className="border-b-[1px] border-smoke py-2 lg:py-3 font-dm text-xs font-normal text-secondary lg:text-sm xl:text-base 2xl:py-5"
                  multipleClass="flex items-center gap-x-[6px] lg:gap-x-[10px]"
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
