import React from "react";
import Container from "./Container";
import Dropdown from "./Dropdown";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import Search from "./Search";
import { BiSearch } from "react-icons/bi";

const Header = () => {
  return (
    <>
      <div className="w-full bg-flat py-[25px]">
        <Container>
          <Flex className=" flex items-center justify-between">
            <Dropdown title="Shop by Category" className="relative">
              <List className="absolute top-[140%] z-10 w-[263px] bg-primary">
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

            <div className="relative w-[601px]">
              <Search
                className="w-full py-[16px] px-[21px] font-dm text-sm font-normal text-secondary placeholder:text-dope"
                placeholder="Search Product"
              />

              <BiSearch className="absolute top-[50%] right-[21px] -translate-y-2/4" />
            </div>

            <Dropdown title="user" className="">
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
