import React from "react";
import SideBarMenuItem from "./SideBarMenuItem";
import { category, color, brand, price } from "../../Data/Data";
import { IoClose } from "react-icons/io5";

const SideBarMenu = ({ className, toggle }) => {
  return (
    <div className={className}>
      <IoClose
        onClick={toggle}
        className="absolute top-1 right-1 inline-block cursor-pointer text-xl sm:hidden"
      />

      <SideBarMenuItem
        dropDown={false}
        headingTitle="Shop by Category"
        headingClassName="w-full font-dm font-bold text-sm lg:text-base 2xl:text-xl text-primary"
        data={category}
      />
      <SideBarMenuItem
        dropDown={true}
        headingTitle="Shop by Color"
        headingClassName="w-full font-dm font-bold text-sm lg:text-base 2xl:text-xl text-primary"
        data={color}
      />
      <SideBarMenuItem
        dropDown={true}
        headingTitle="Shop by Brand"
        headingClassName="w-full font-dm font-bold text-sm lg:text-base 2xl:text-xl text-primary"
        data={brand}
      />
      <SideBarMenuItem
        dropDown={false}
        headingTitle="Shop by Price"
        headingClassName="w-full font-dm font-bold text-sm lg:text-base 2xl:text-xl text-primary"
        data={price}
      />
    </div>
  );
};

export default SideBarMenu;
