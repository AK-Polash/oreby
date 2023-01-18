import React, { useState } from "react";
import SideBarMenuItemList from "./SideBarMenuItemList";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

const SideBarMenuItem = ({
  dropDown,
  headingTitle,
  headingClassName,
  data,
}) => {
  let [show, setShow] = useState(true);

  return (
    <div className="mb-8">
      {dropDown ? (
        <div
          onClick={() => setShow(!show)}
          className="mb-[2px] flex cursor-pointer items-center justify-between lg:mb-1 2xl:mb-4"
        >
          <h3 className={headingClassName}> {headingTitle} </h3>

          {show ? (
            <GoTriangleDown className="text-[8px] md:text-[10px] lg:text-xs 2xl:text-sm" />
          ) : (
            <GoTriangleUp className="text-[8px] md:text-[10px] lg:text-xs 2xl:text-sm" />
          )}
        </div>
      ) : (
        <h3 className={headingClassName}> {headingTitle} </h3>
      )}

      {show && (
        <>
          {data.map((item, index) => (
            <div key={index} className="kire">
              {item.subCategory ? (
                <SideBarMenuItemList
                  subdrop={"true"}
                  listTitle={item.name}
                  color={item.colorCode}
                >
                  {item.subCategory.map((subItem, subIndex) => (
                    <h3
                      key={subIndex}
                      className="border-b-[1px] border-smoke py-2 font-dm text-xs font-normal text-secondary lg:py-3 lg:text-sm xl:text-base 2xl:py-5"
                    >
                      {subItem.colorCode && (
                        <span
                          className="mr-2 inline-block h-[11px] w-[11px] rounded-[50%]"
                          style={{ background: subItem.colorCode }}
                        ></span>
                      )}

                      {subItem.name}
                    </h3>
                  ))}
                </SideBarMenuItemList>
              ) : (
                <h2
                  subdrop={"false"}
                  className="border-b-[1px] border-smoke py-2 font-dm text-xs font-normal text-secondary lg:py-3 lg:text-sm xl:text-base 2xl:py-5"
                >
                  {item.colorCode && (
                    <span
                      className="mr-2 inline-block h-[11px] w-[11px] rounded-[50%]"
                      style={{ background: item.colorCode }}
                    ></span>
                  )}

                  {item.name}
                </h2>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default SideBarMenuItem;
