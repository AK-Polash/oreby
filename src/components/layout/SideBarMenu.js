import React from "react";
import SideBarMenuItem from "./SideBarMenuItem";
import { category, color, brand, price } from "../../Data/Data";

const SideBarMenu = ({ className }) => {
  return (
    <div className={className}>
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
