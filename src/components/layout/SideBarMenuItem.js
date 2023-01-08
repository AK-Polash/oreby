import React, { useState } from "react";
import SideBarMenuItemList from "./SideBarMenuItemList";
import SideBarMenuItemListItem from "./SideBarMenuItemListItem";
import SideBarDropDownToggler from "./SideBarDropDownToggler";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { BsPlusLg } from "react-icons/bs";
import { CgMathMinus } from "react-icons/cg";

const SideBarMenuItem = ({
  dropDown,
  heading,
  headingClassName,
  data,
  isSingle,
  nested,
}) => {
  let [show, setShow] = useState(true);
  let [see, setSee] = useState(false);

  return (
    <>
      {dropDown ? (
        <div className="mb-3 md:mb-5 lg:mb-7 2xl:mb-12">
          <SideBarDropDownToggler
            toggler={show}
            onClick={() => setShow(!show)}
            mainClassName="mb-[2px] flex cursor-pointer items-center justify-between lg:mb-1 2xl:mb-4"
            heading={heading}
            headingClassName={headingClassName}
            as="h3"
            withIcon={true}
            iconOne={GoTriangleUp}
            iconOneClassName="text-[8px] md:text-[10px] lg:text-xs 2xl:text-sm"
            iconTwo={GoTriangleDown}
            iconTwoClassName="text-[8px] md:text-[10px] lg:text-xs 2xl:text-sm"
          />

          {show && (
            <SideBarMenuItemList className="w-full">
              {data.map((item, index) => (
                <SideBarMenuItemListItem
                  key={index}
                  className="border-b-[1px] border-smoke py-2 font-dm text-xs font-normal text-secondary lg:py-3 lg:text-sm xl:text-base 2xl:py-5"
                  isSingle={isSingle}
                  listTitle={item.title}
                  listColor={item.color}
                  subChild={false}
                />
              ))}
            </SideBarMenuItemList>
          )}
        </div>
      ) : (
        <div>
          <h3 className={headingClassName}> {heading} </h3>

          {nested ? (
            <SideBarMenuItemList className="mb-3 w-full lg:mb-6">
              {data.map((item, index) => (
                <>
                  <SideBarMenuItemListItem
                    key={index}
                    className="border-b-[1px] border-smoke py-2 font-dm text-xs font-normal text-secondary lg:py-3 lg:text-sm xl:text-base 2xl:py-5"
                    subChild={true}
                  >
                    {item.subCategory ? (
                      <SideBarDropDownToggler
                        toggler={see}
                        mainClassName="flex cursor-pointer items-center justify-between"
                        onClick={() => setSee(!see)}
                        heading={item.cat}
                        as="div"
                        iconOne={CgMathMinus}
                        iconOneClassName="text-xs lg:text-base"
                        iconTwo={BsPlusLg}
                        iconTwoClassName="text-[8px] lg:text-xs"
                        withIcon={true}
                      />
                    ) : (
                      <SideBarDropDownToggler
                        withIcon={false}
                        heading={item.cat}
                        as="div"
                      />
                    )}

                    {see &&
                      item.subCategory &&
                      item.subCategory.map((subItem, subIndex) => (
                        <SideBarMenuItemListItem
                          key={subIndex}
                          className="pt-2 pl-3 font-dm text-xs font-normal text-secondary lg:pt-3 lg:text-sm xl:text-base 2xl:pt-5"
                          isSingle={isSingle}
                          listTitle={subItem.cat}
                          subChild={false}
                        />
                      ))}
                  </SideBarMenuItemListItem>
                </>
              ))}
            </SideBarMenuItemList>
          ) : (
            <SideBarMenuItemList className="w-full">
              {data.map((item, index) => (
                <SideBarMenuItemListItem
                  key={index}
                  className="border-b-[1px] border-smoke py-2 font-dm text-xs font-normal text-secondary lg:py-3 lg:text-sm xl:text-base 2xl:py-5"
                  isSingle={isSingle}
                  listTitle={item.priceRange}
                  subChild={false}
                />
              ))}
            </SideBarMenuItemList>
          )}
        </div>
      )}
    </>
  );
};

export default SideBarMenuItem;
