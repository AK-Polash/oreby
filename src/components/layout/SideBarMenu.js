import React from "react";
import SideBarMenuItem from "./SideBarMenuItem";
import { category, color, brand, price } from "../../Data/Data";

const SideBarMenu = ({ className }) => {
  return (
    <div className={className}>
      <SideBarMenuItem
        dropDown={false}
        heading="Shop by Category"
        headingClassName="w-full font-dm font-bold text-sm lg:text-base 2xl:text-xl text-primary"
        isSingle={true}
        data={category}
        nested={true}
      />
      <SideBarMenuItem
        dropDown={true}
        heading="Shop by Color"
        headingClassName="w-full font-dm font-bold text-sm lg:text-base 2xl:text-xl text-primary"
        data={color}
        isSingle={false}
      />
      <SideBarMenuItem
        dropDown={true}
        heading="Shop by Brand"
        headingClassName="w-full font-dm font-bold text-sm lg:text-base 2xl:text-xl text-primary"
        data={brand}
        isSingle={true}
      />
      <SideBarMenuItem
        dropDown={false}
        heading="Shop by Price"
        headingClassName="w-full font-dm font-bold text-sm lg:text-base 2xl:text-xl text-primary"
        data={price}
        isSingle={true}
      />
    </div>
  );
};

export default SideBarMenu;
