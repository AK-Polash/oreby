import React from "react";
import Container from "./Container";
import Dropdown from "./Dropdown";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";

const Header = () => {
  return (
    <>
      <div className="w-full bg-flat">
        <Container>
          <Flex className="flex justify-between items-center">
            <Dropdown className="py-4">
              <List className="w-[263px] bg-primary">
                <ListItem
                  className="font-dm text-sm font-normal text-fade px-5 py-3.5 border-rare border-b-[1px] transition-all ease-linear duration-150 hover:text-pure hover:font-bold hover:pl-7"
                  item="Accesories"
                />
                <ListItem
                  className="font-dm text-sm font-normal text-fade px-5 py-3.5 border-rare border-b-[1px] transition-all ease-linear duration-150 hover:text-pure hover:font-bold hover:pl-7"
                  item="Furniture"
                />
                <ListItem
                  className="font-dm text-sm font-normal text-fade px-5 py-3.5 border-rare border-b-[1px] transition-all ease-linear duration-150 hover:text-pure hover:font-bold hover:pl-7"
                  item="Electronics"
                />
                <ListItem
                  className="font-dm text-sm font-normal text-fade px-5 py-3.5 border-rare border-b-[1px] transition-all ease-linear duration-150 hover:text-pure hover:font-bold hover:pl-7"
                  item="Clothes"
                />
                <ListItem
                  className="font-dm text-sm font-normal text-fade px-5 py-3.5 border-rare border-b-[1px] transition-all ease-linear duration-150 hover:text-pure hover:font-bold hover:pl-7"
                  item="Bags"
                />
                <ListItem
                  className="font-dm text-sm font-normal text-fade px-5 py-3.5 border-rare border-b-[1px] transition-all ease-linear duration-150 hover:text-pure hover:font-bold hover:pl-7"
                  item="Home appliances"
                />
              </List>
            </Dropdown>
            <h1>Hey</h1>
            <h1>Buddy</h1>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
