import React from "react";
import Image from "../image/Image";
import List from "../List/List";

const Navbar = () => {
  return (
    <nav className=" font-bold text-white">
      <div className="max-w-container mx-auto bg-red-500">
        <div>
          <Image source="../../public/assets/logo.png" />
        </div>
        <List />
      </div>
    </nav>
  );
};

export default Navbar;
