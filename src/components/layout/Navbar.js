import React, { useEffect, useState } from "react";
import Image from "./Image";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import { HiBars3 } from "react-icons/hi2";
import Container from "./Container";

const Navbar = () => {
  let [show, setShow] = useState(true);

  useEffect(() => {
    function scrollWidth() {
      if (window.innerWidth < 1024) {
        setShow(false);
      } else {
        setShow(true);
      }
    }

    scrollWidth();

    window.addEventListener("resize", scrollWidth);
  }, []);

  return (
    <nav className="w-full bg-red-400">
      <Container>
        <Flex className="lg:flex justify-between items-center">
          <div className="w-1/5">
            <Image source="assets/logo.png" className="w-16" alt="logo" />
          </div>

          <HiBars3
            onClick={() => setShow(!show)}
            className="w-7 h-7 block lg:hidden ml-auto cursor-pointer absolute top-1 right-2.5 z-50"
          />

          {show && (
            <div className="bg-red-400 lg:bg-transparent w-full lg:w-4/5">
              <List className="w-full lg:w-auto flex flex-col justify-center items-center gap-y-5 lg:gap-y-0 lg:flex-row lg:justify-end lg:items-center lg:gap-x-10 py-5">
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
      </Container>
    </nav>
  );
};

export default Navbar;
