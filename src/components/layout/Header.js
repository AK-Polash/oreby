import React from "react";
import Container from "./Container";
import Dropdown from "./Dropdown";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import Search from "./Search";

const Header = () => {
  return (
    <>
      <div className="w-full bg-flat">
        <Container>
          <Flex className="flex items-center justify-between">
            <Dropdown title="Shop by Category" className="py-4">
              <List className="absolute w-[263px] bg-primary">
                <ListItem
                  className="border-b-[1px] border-rare px-5 py-3.5 font-dm text-sm font-normal text-fade transition-all duration-150 ease-linear hover:pl-7 hover:font-bold hover:text-pure"
                  item="Accesories"
                />
                <ListItem
                  className="border-b-[1px] border-rare px-5 py-3.5 font-dm text-sm font-normal text-fade transition-all duration-150 ease-linear hover:pl-7 hover:font-bold hover:text-pure"
                  item="Furniture"
                />
                <ListItem
                  className="border-b-[1px] border-rare px-5 py-3.5 font-dm text-sm font-normal text-fade transition-all duration-150 ease-linear hover:pl-7 hover:font-bold hover:text-pure"
                  item="Electronics"
                />
                <ListItem
                  className="border-b-[1px] border-rare px-5 py-3.5 font-dm text-sm font-normal text-fade transition-all duration-150 ease-linear hover:pl-7 hover:font-bold hover:text-pure"
                  item="Clothes"
                />
                <ListItem
                  className="border-b-[1px] border-rare px-5 py-3.5 font-dm text-sm font-normal text-fade transition-all duration-150 ease-linear hover:pl-7 hover:font-bold hover:text-pure"
                  item="Bags"
                />
                <ListItem
                  className="border-b-[1px] border-rare px-5 py-3.5 font-dm text-sm font-normal text-fade transition-all duration-150 ease-linear hover:pl-7 hover:font-bold hover:text-pure"
                  item="Home appliances"
                />
              </List>
            </Dropdown>

            <div>
              <Search
                className="w-[600px] py-[21px] px-[19px] "
                placeholder="Search Product"
              />
            </div>

            <Dropdown title="user" className="py-4">
              <List className="absolute right-0 w-[200px] bg-primary">
                <ListItem
                  className="border-b-[1px] border-rare px-5 py-3.5 font-dm text-sm font-normal text-fade transition-all duration-150 ease-linear hover:pl-7 hover:font-bold hover:text-pure"
                  item="Electronics"
                />
                <ListItem
                  className="border-b-[1px] border-rare px-5 py-3.5 font-dm text-sm font-normal text-fade transition-all duration-150 ease-linear hover:pl-7 hover:font-bold hover:text-pure"
                  item="Clothes"
                />
                <ListItem
                  className="border-b-[1px] border-rare px-5 py-3.5 font-dm text-sm font-normal text-fade transition-all duration-150 ease-linear hover:pl-7 hover:font-bold hover:text-pure"
                  item="Bags"
                />
              </List>
            </Dropdown>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
