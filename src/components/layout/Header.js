import React, { useState, useEffect, useRef } from "react";
import Container from "./Container";
import Dropdown from "./Dropdown";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import Search from "./Search";
import Image from "./Image";
import { BiSearch } from "react-icons/bi";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { RxTriangleDown } from "react-icons/rx";
import { ImCross } from "react-icons/im";

const Header = () => {
  let [categoryDropdownShow, setCategoryDropdownShow] = useState(false);
  let [userDropdownShow, setUserDropdownShow] = useState(false);
  let [cartDropdownShow, setCartDropdownShow] = useState(false);
  let categoryRef = useRef();
  let userRef = useRef();
  let cartRef = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (categoryRef.current.contains(e.target)) {
        setCategoryDropdownShow(true);
      } else {
        setCategoryDropdownShow(false);
      }

      if (userRef.current.contains(e.target)) {
        setUserDropdownShow(true);
      } else {
        setUserDropdownShow(false);
      }

      if (cartRef.current.contains(e.target)) {
        setCartDropdownShow(true);
      } else {
        setCartDropdownShow(false);
      }
    });
  }, []);

  return (
    <>
      <div className="w-full bg-flat py-[25px]">
        <Container>
          <Flex className="flex items-center justify-between">
            <Dropdown className="relative" dropRef={categoryRef}>
              <div className="flex cursor-pointer items-center justify-between gap-x-2">
                <RiBarChartHorizontalLine />
                <span className="font-dm text-sm font-normal text-primary">
                  Shop by Category
                </span>
              </div>

              {categoryDropdownShow && (
                <List className="absolute top-8 z-10 w-[263px] bg-primary">
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
              )}
            </Dropdown>

            <div className="relative w-[601px]">
              <Search
                className="w-full py-[16px] px-[21px] font-dm text-sm font-normal text-secondary placeholder:text-dope"
                placeholder="Search Product"
              />

              <BiSearch className="absolute top-[50%] right-[21px] -translate-y-2/4" />
            </div>

            <Flex className="flex items-center justify-between gap-x-10">
              <Dropdown className="relative" dropRef={userRef}>
                <div className="flex cursor-pointer items-center justify-between gap-x-1">
                  <FaUserAlt className="w-[13px]" />
                  <RxTriangleDown />
                </div>

                {userDropdownShow && (
                  <List className="absolute top-8 right-0 z-10 w-[200px] bg-pure">
                    <ListItem
                      className="cursor-pointer border-x-[1px] border-t border-b border-smoke py-[14px] px-[58px] text-center font-dm text-sm font-normal text-primary transition-all duration-150 ease-linear hover:border-transparent hover:bg-caret hover:font-bold hover:text-pure"
                      item="My Account"
                    />
                    <ListItem
                      className="cursor-pointer border-x-[1px] border-b border-smoke py-[14px] px-[58px] text-center font-dm text-sm font-normal text-primary transition-all duration-150 ease-linear hover:border-transparent hover:bg-caret hover:font-bold hover:text-pure"
                      item="Log Out"
                    />
                  </List>
                )}
              </Dropdown>

              <Dropdown className="relative" dropRef={cartRef}>
                <FaShoppingCart className="w-[17px] cursor-pointer" />

                {cartDropdownShow && (
                  <div className="absolute top-8 right-0 z-10 w-[360px] border border-solid border-smoke">
                    <Flex className="flex items-center justify-between bg-flat p-5">
                      <Flex className="flex items-center gap-x-5">
                        <Image
                          className="h-20 w-20"
                          source="./assets/cart_image.png"
                          alt="cartImg"
                        />
                        <div className=" font-dm text-sm font-bold ">
                          <p className="pb-3"> Black Smart Watch </p>
                          <p> $44.00 </p>
                        </div>
                      </Flex>
                      <ImCross className="h-3 w-3 cursor-pointer" />
                    </Flex>

                    <div className="bg-pure pt-[14px] pb-5 pr-5 pl-5">
                      <div className="pb-3 font-dm text-base">
                        <span className="font-normal text-secondary">
                          Subtotal:
                        </span>
                        <span className="pl-1 font-bold text-primary">
                          $44.00
                        </span>
                      </div>
                      <Flex className="flex items-center justify-between gap-x-5">
                        <button className="border-[1.5px] border-caret bg-pure px-10 py-4 font-dm text-sm font-bold text-primary">
                          View Cart
                        </button>
                        <button className="border-[1.5px] border-transparent bg-primary px-10 py-4 font-dm text-sm font-bold text-pure">
                          Checkout
                        </button>
                      </Flex>
                    </div>
                  </div>
                )}
              </Dropdown>
            </Flex>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
