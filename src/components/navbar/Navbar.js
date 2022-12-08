import React, { useEffect, useState } from "react";
import Image from "../layout/Image";
import Flex from "../layout/Flex";
import List from "../layout/List";
import ListItem from "../layout/ListItem";
import { HiBars3 } from "react-icons/hi2";

const Navbar = () => {
  let [show, setShow] = useState(true);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1024) {
        setShow(false);
      } else {
        setShow(true);
      }
    });
  }, []);

  return (
    <nav className="w-full bg-red-400 fixed top-0 left-0 z-50">
      <div className="max-w-container mx-auto p-2.5">
        <Flex className="flex justify-between items-center">
          <div className="w-1/5 z-50">
            <Image source="assets/logo.png" className="w-16" alt="logo" />
          </div>

          <HiBars3
            onClick={() => setShow(!show)}
            className="w-7 h-7 block lg:hidden ml-auto z-50 cursor-pointer"
          />

          {show && (
            <div className="bg-red-400 lg:bg-transparent w-full h-screen absolute top-0 left-0 z-1 lg:w-4/5 lg:h-auto lg:static">
              <List className="w-full lg:w-auto h-screen lg:h-auto flex flex-col justify-center items-center gap-y-5 lg:gap-y-0 lg:flex-row lg:justify-end lg:items-center lg:gap-x-10 py-5">
                <ListItem
                  className="font-dm text-sm font-bold text-secondary hover:text-primary"
                  item="Home"
                />
                <ListItem
                  className="font-dm text-sm font-bold text-secondary hover:text-primary"
                  item="Shop"
                />
                <ListItem
                  className="font-dm text-sm font-bold text-secondary hover:text-primary"
                  item="About"
                />
                <ListItem
                  className="font-dm text-sm font-bold text-secondary hover:text-primary"
                  item="Contacts"
                />
                <ListItem
                  className="font-dm text-sm font-bold text-secondary hover:text-primary"
                  item="Journal"
                />
              </List>
            </div>
          )}
        </Flex>
      </div>
    </nav>
  );
};

export default Navbar;
