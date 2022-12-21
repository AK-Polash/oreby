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
    <nav className="relative w-full py-1 md:py-2 lg:py-4 2xl:py-8">
      <Container>
        <Flex className="items-center justify-between lg:flex">
          <div className="w-1/5">
            <Image source="assets/logo.png" className="w-16" alt="logo" />
          </div>

          <HiBars3
            onClick={() => setShow(!show)}
            className="absolute top-2 right-2.5 z-50 ml-auto block h-7 w-7 cursor-pointer md:top-3 lg:hidden"
          />

          {show && (
            <div className="w-full lg:w-4/5">
              <List className="flex w-full flex-col items-center justify-center gap-y-5 lg:w-auto lg:flex-row lg:items-center lg:justify-end lg:gap-y-0 lg:gap-x-10">
                <ListItem
                  className="font-dm text-sm font-bold text-secondary hover:text-primary"
                  item="Home"
                  href="#"
                  linkStyle="inline-block"
                />
                <ListItem
                  className="font-dm text-sm font-bold text-secondary hover:text-primary"
                  item="Shop"
                  href="#"
                  linkStyle="inline-block"
                />
                <ListItem
                  className="font-dm text-sm font-bold text-secondary hover:text-primary"
                  item="About"
                  href="#"
                  linkStyle="inline-block"
                />
                <ListItem
                  className="font-dm text-sm font-bold text-secondary hover:text-primary"
                  item="Contacts"
                  href="#"
                  linkStyle="inline-block"
                />
                <ListItem
                  className="font-dm text-sm font-bold text-secondary hover:text-primary"
                  item="Journal"
                  href="#"
                  linkStyle="inline-block"
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
