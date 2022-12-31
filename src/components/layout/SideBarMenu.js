import React from "react";
import SideBarMenuItem from "./SideBarMenuItem";

const SideBarMenu = () => {
  let color = [
    { title: "Color 1", color: "#000000" },
    { title: "Color 2", color: "#FF8686" },
    { title: "Color 3", color: "#7ED321" },
    { title: "Color 4", color: "#B6B6B6" },
    { title: "Color 5", color: "#15CBA5" },
  ];

  let brand = [
    { title: "Brand 1" },
    { title: "Brand 2" },
    { title: "Brand 3" },
    { title: "Brand 4" },
    { title: "Brand 5" },
  ];

  return (
    <div>
      <SideBarMenuItem
        dropDown={false}
        heading="Shop by Category"
        headingClassName="w-full font-dm font-bold text-sm lg:text-base xl:text-xl text-primary"
      />
      <SideBarMenuItem
        dropDown={true}
        heading="Shop by Color"
        headingClassName="w-full font-dm font-bold text-sm lg:text-base xl:text-xl text-primary"
        category={color}
        isSingle={false}
      />
      <SideBarMenuItem
        dropDown={true}
        heading="Shop by Brand"
        headingClassName="w-full font-dm font-bold text-sm lg:text-base xl:text-xl text-primary"
        category={brand}
        isSingle={true}
      />
      <SideBarMenuItem
        dropDown={false}
        heading="Shop by Price"
        headingClassName="w-full font-dm font-bold text-sm lg:text-base xl:text-xl text-primary"
      />
    </div>
  );
};

export default SideBarMenu;
